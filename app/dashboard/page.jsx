"use client";
import { signOut } from "next-auth/react";
import AppContainer from '../../components/AppContainer/index';

const index = () => {
  return (
    <AppContainer>
      <div>Dashboard</div>

      <button onClick={() => signOut()}>
        Cerrar sesión
      </button>
    </AppContainer>
  )
}

export default index