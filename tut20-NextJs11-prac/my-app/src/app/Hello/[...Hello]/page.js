"use client";
import React from "react";

// make sure to import it from the next navigation
import { useRouter } from "next/navigation";

const page = () => {
  // then create a const
  const router = useRouter();

  return (
    <div className=" justify-center place-items-center text-center bg-red-300 h-[100vh]">
      <h1 className="pt-56 text-4xl"> This is Catch all segments page</h1>

      {/* then create a button and use it in the onlick function  */}
      <button
        className="mt-32  text-xl bg-slate-200 h-28 w-80 hover:scale-105 rounded-lg"
        // make a arrow function then use router.push to go
        // router.back will go back to previous page
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
