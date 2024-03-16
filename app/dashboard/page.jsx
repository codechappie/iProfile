"use client";
import { signOut, useSession } from "next-auth/react";
import AppContainer from '@/components/AppContainer';
import { Button } from "@/components/ui/button"
import axios from "axios";
import { useEffect, useState } from "react";
import { setUserData } from "@/lib/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useGetPostByIdQuery } from '@/lib/redux/services/post'
import { useGetUserByIdQuery } from '@/lib/redux/services/user'
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
import style from './dashboard.module.scss'
import Loader from "@/components/Loader";

const Dashboard = () => {
  const userData = useSelector(state => state.userSlice);
  const dispatch = useDispatch();
  const values = useSession();
  const [id, setid] = useState(null);



  useEffect(() => {
    if (values.status === "authenticated") {
      setid(values.data.user.id)
    }
  }, [id, values.status]);

  // const form = useForm({
  //   defaultValues: {
  //     id: "",
  //     username: "sss"
  //   },
  // })

  // console.log(form)


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  // const { data } = useGetPostByIdQuery({ id: "1" })

  const onSubmit = (data) => console.log("VALUES", data)


  const { data, isLoading, isFetching } = useGetUserByIdQuery({ id })

  if (isLoading || isFetching) {
    return <Loader show={true} />
  }




  function setNewName() {
    dispatch(setUserData("pruebita"))
  }




  return (
    <AppContainer>
      <h1>{data?.user?.name || ""}</h1>

      <Button variant="secondary"
        onClick={() => setNewName()}
      >Change name</Button>

      {/* <Form {...form}> */}
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* <FormField
            control={form.control}
            name="id"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Id</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>{errors.id && <span>REquerido</span>}</FormDescription>
                <FormMessage />
              </FormItem>
            )} />


          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className={style.formItem}>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )} /> */}


        <Input placeholder="12345666" defaultValue={data?.user?.id} readOnly {...register("id", { required: true })} />
        <Input type="text" placeholder="Username" defaultValue={data?.user?.username} {...register("username")} />
        <Input type="text" placeholder="name" {...register("name")} />

        {/* {errors.id && <span>This field is required</span>} */}

        <input type="submit" />
      </form>
      {/* </Form> */}
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