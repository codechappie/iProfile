"use client";
import { signOut, useSession } from "next-auth/react";
import AppContainer from '@/components/AppContainer';
import { Button } from "@/components/ui/button"
import axios from "axios";
import { useEffect, useState } from "react";
import { setUserData } from "@/lib/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useGetPostByIdQuery } from '@/lib/redux/services/post'
import { useGetUserByIdQuery, useUpdateUsernameMutation } from '@/lib/redux/services/user'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import style from './dashboard.module.scss'
import Loader from "@/components/Loader";
import ContentLoader from "@/components/ContentLoader";

const Dashboard = () => {
  const userData = useSelector(state => state.userSlice);
  const dispatch = useDispatch();
  const values = useSession();
  const [id, setid] = useState(null);

  console.log(values)
  useEffect(() => {
    if (values.status === "authenticated") {
      setid(values.data.user.id)
    }
  }, [id, values.status]);

  // const { data } = useGetPostByIdQuery({ id: "1" })

  function setNewName() {
    dispatch(setUserData("pruebita"))
  }

  return (
    <AppContainer>
      <h1>{userData.name}</h1>

      <Button variant="secondary"
        onClick={() => setNewName()}
      >Change name</Button>


      {id && <UserForm userId={id} />}

    </AppContainer>
  )
}

export default Dashboard

// const Dashboard = () => {
//   const dispatch = useDispatch()
//   const data = useSelector(state => state.userInfo);

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <button onClick={() => dispatch(setUserData("pruebas"))}>
//         Increment counter
//       </button>
//     </div>
//   )
// }

// export default Dashboard

export const UserForm = ({ userId }) => {
  const { data, isLoading, isFetching } = useGetUserByIdQuery({ id: userId })
  const [updateUsername] = useUpdateUsernameMutation();
  const [error, seterror] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const _handleUpdateUsername = async (body) => {

    const response = await updateUsername({
      id: data.user.id,
      body
    })


    seterror(response.data.error);
  }

  return (
    <form className={style.userForm} onSubmit={handleSubmit(_handleUpdateUsername)}>
      {isLoading || isFetching && <ContentLoader show={true} />}

      {/* <Input placeholder="12345666" defaultValue={data?.user?.id} {...register("id", { required: true, disabled: true })} /> */}
      <div className="usernameValidator">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="text" placeholder="Username" defaultValue={data?.user?.username} {...register("username")} />
        </div>
      </div>
      {error && <span>{error}</span>}

      {/* <Input type="text" placeholder="name" defaultValue={data?.user?.name} {...register("name")} /> */}



      <Button type="submit">Actualizar</Button>
    </form>
  )
}