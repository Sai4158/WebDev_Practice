"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// this will be home page for this project

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center text-center bg-blue-300 h-[150vh]">
      {/* when you add a image address make sure to add domain in next config file too */}

      <h1 className="text-4xl">
        This is home page
        <br />
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s"
          }
          width={400}
          height={200}
          className="pt-7"
        />
      </h1>

      <button
        className="mt-24 text-xl bg-slate-200 h-28 w-80 hover:scale-105 rounded-lg"
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

export default Page;
