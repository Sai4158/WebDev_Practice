"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");

    //will send it that site
    router.push("/Blog");
  };

  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place order</button>
    </>
  );
}
