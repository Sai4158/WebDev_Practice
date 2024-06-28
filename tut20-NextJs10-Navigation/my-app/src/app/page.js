import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      this is the home page
      <div>
        <h1>
          <Link href="/Homee">Home page</Link>
        </h1>

        <br />
        <h1>
          <Link href="/Blog">Blog page</Link>
        </h1>
      </div>
    </div>
  );
};

export default page;
