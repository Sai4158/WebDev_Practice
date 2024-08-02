"use client";

import { useRouter } from "next/navigation";
import React from "react";

// this will be home page for this project

const page = () => {
  const router = useRouter();
  return (
    <div className=" justify-center place-items-center text-center bg-blue-300 h-[100vh]">
      <h1 className="pt-56 text-4xl"> This is home page</h1>

      <button
        className="mt-32  text-xl bg-slate-200 h-28 w-80 hover:scale-105 rounded-lg"
        onClick={() => {
          router.back();
        }}
      >
        Click to go back
      </button>
    </div>
  );
};

export default page;
