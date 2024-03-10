"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import style from './login.module.scss'
import { useEffect } from "react";
import Script from "next/script";
import FinisherHeaderScript from '../../lib/finisherbg.js'

const Login = () => {
  const { data: session, status } = useSession();

  useEffect(() => {

  }, [])


  if (status === "loading") return <h3>Cargando...</h3>

  if (session && session.user) return redirect("/dashboard")

  return (
    <>
      <div className={style.login}>
        <FinisherHeaderScript />
        <div className={`${style.bg_login} header finisher-header`} >

          <div className={style.loginContainer}>
            <h3>Login component client rendered</h3>

            <button
              className="button"
              onClick={() => signIn("google")}
            >
              Google Sign in
            </button>
            <button
              className="button"
              onClick={() => signIn("github")}
            >
              Github Sign in
            </button>
          </div>
        </div>

      </div>
    </>

  );
};

export default Login;