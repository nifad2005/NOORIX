"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default function Page() {
  const { data: session } = useSession();
   if(session) setTimeout(() => {
        redirect("/dashboard");
    }, 600);
    
  if (session)
    return (
      <div className="min-h-screen grid place-items-center min-w-screen text-4xl font-bold">
        <h1>Redirceting to dashboard...</h1>
      </div>
    );
  return (
    <div className="min-h-screen min-w-screen  font-bold grid place-items-center">
      <button
        onClick={()=>signIn("google")}
        className="px-4 py-2 bg-blue-500 text-xl rounded-2xl"
      >
        Sign UP
      </button>
    </div>
  );
}
