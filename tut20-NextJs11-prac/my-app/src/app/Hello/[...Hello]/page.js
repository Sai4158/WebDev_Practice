"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div className=" justify-center place-items-center text-center bg-red-300 h-[100vh]">
      <h1 className="pt-56 text-4xl"> This is Catch all segments page</h1>
      <button
        className="mt-32  text-xl bg-slate-200 h-28 w-80 hover:scale-105 rounded-lg"
        onClick={() => {
          router.push("/");
        }}
      >
        Click to go back to main page
      </button>
    </div>
  );
};

export default page;
