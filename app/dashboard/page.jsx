"use client";
import { signOut, useSession } from "next-auth/react";
import AppContainer from '@/components/AppContainer';
import { Button } from "@/components/ui/button"
import axios from "axios";
import { useEffect } from "react";
import { setUserData } from "@/lib/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetPostByIdQuery } from '@/lib/redux/services/post'

const Dashboard = () => {
  // const { data: session, status } = useSession();
  // const data = useSelector(state => state.userSlice);
  const dispatch = useDispatch();

  const { data } = useGetPostByIdQuery({ id: "1" })


  console.log(data)
  function setNewName() {
    dispatch(setUserData("pruebita"))
  }



  return (
    <AppContainer>
      {/* <div>{data.name}</div> */}

      <Button variant="secondary"
        onClick={() => setNewName()}
      >Change name</Button>


      <button onClick={() => signOut()}>
        Cerrar sesión
      </button>
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