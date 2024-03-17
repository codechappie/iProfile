"use client";
import AppContainer from '@/components/AppContainer';
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useGetPostByIdQuery } from '@/lib/redux/services/post'
import Loader from "@/components/Loader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useGetUserByIdQuery, useUpdateUsernameMutation } from '@/lib/redux/services/user';
import { useForm } from "react-hook-form";
import style from './dashboard.module.scss';




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



const UserForm = ({ userId, loading, setLoading }) => {
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

  if (loading) {
    return <Loader show={loading} />
  }

  return (
    <form className={style.usernameValidator} onSubmit={handleSubmit(_handleUpdateUsername)}>
      {/* <Input placeholder="12345666" defaultValue={data?.user?.id} {...register("id", { required: true, disabled: true })} /> */}

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

export default Dashboard;

