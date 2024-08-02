"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";

// this will be home page for this project

const page = () => {
  const router = useRouter();
  return (
    <div className=" justify-center place-items-center text-center bg-blue-300 h-[100vh]">
      <h1 className="pt-56 text-4xl"> This is home page</h1>

      <button
        className="mt-24  text-xl bg-slate-200 h-28 w-80 hover:scale-105 rounded-lg"
        onClick={() => {
          router.back();
        }}
      >
        Click to go back (ONCLICK)
      </button>
      <br />
      <br />
      <Link href={"/Hello/Sai"}>
        <button className="mt-3 text-xl bg-amber-200 h-28 w-80 hover:scale-105 rounded-lg">
          This is Link button
        </button>
      </Link>
    </div>
  );
};

export default page;
