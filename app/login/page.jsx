"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Login = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <h3>Cargando...</h3>

  if (session && session.user) return redirect("/dashboard")

  return (
    <div className="rounded-xl border-slate-100 p-8 flex items-center justify-center w-min gap-2 border flex-col-reverse">
      <h3>Login component client rendered</h3>

      <button
        className="whitespace-nowrap rounded-md border border-slate-100 p-2"
        onClick={() => signIn("github")}
      >
        Github Sign in
      </button>
    </div>
  );
};

export default Login;