"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        This is Catch all segments page
      </button>
    </div>
  );
};

export default page;
