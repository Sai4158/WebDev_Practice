import React from "react";
import { auth } from "./auth";
import { redirect } from "next/navigation";

const LandingPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <h1>Welcome to my application</h1>
    </div>
  );
};

export default LandingPage;
