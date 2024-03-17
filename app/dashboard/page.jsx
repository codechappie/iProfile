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
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

const Dashboard = () => {
  const userData = useSelector(state => state.userSlice);
  const dispatch = useDispatch();
  const session = useSession();
  const [id, setid] = useState(null);
  const [loading, setLoading] = useState(false);


  console.log(session)
  useEffect(() => {
    if (session.status === "authenticated") {
      setid(session.data.user.id)
    }
  }, [id, session.status]);


  return (
    <AppContainer>
      <h2>Configuración</h2>
      <p>Administre la configuración de su cuenta.</p>
      <Separator className="separator" />
      {id && <UserForm userId={id} loading={loading} setLoading={setLoading} />}

    </AppContainer>
  )
}

export default Dashboard;



export const UserForm = ({ userId, loading, setLoading }) => {
  const { data, isLoading, isFetching } = useGetUserByIdQuery({ id: userId })
  const [updateUsername] = useUpdateUsernameMutation();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const _handleUpdateUsername = async ({ username }) => {
    if (username.trim() !== "") {
      setLoading(true)
      const response = await updateUsername({
        id: data.user.id,
        body: {
          username
        }
      })
      setMessage(response.data.message);
      setLoading(false)
    }
  }

  if ((isLoading && isFetching)) {
    return <Loader show={true} />
  }


  return (
    <form className={style.usernameValidator} onSubmit={handleSubmit(_handleUpdateUsername)}>
      {/* <Input placeholder="12345666" defaultValue={data?.user?.id} {...register("id", { required: true, disabled: true })} /> */}
      {/* <Loader show={loading} /> */}
      <Label htmlFor="email">Username: </Label>
      <div className={style.userField}>
        <Input className={style.inputUsername}
          type="text"
          placeholder="Username"
          defaultValue={data.user.username}
          {...register("username")}
        />
        <Button disabled={(isLoading && isFetching)} type="submit">Actualizar</Button>
      </div>
      <span className={style.spanError}>{message}</span>



      {/* <Input type="text" placeholder="name" defaultValue={data?.user?.name} {...register("name")} /> */}




    </form>
  )
}