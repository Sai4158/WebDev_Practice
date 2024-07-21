import React from "react";

const page = () => {
  return (
    <div>
      {/* this is using group hover and relative and absolute  */}
      <a className=" relative group " href="/">
        <span className="absolute  opacity-0 group-hover:opacity-100 ">
          Home
        </span>
        <span className=" group-hover:opacity-0 ">Welcome!</span>
      </a>

      <div>
        <a href="" className="relative group">
          {" "}
          <span className=" absolute group-hover:opacity-100 opacity-0">
            sai11111111
          </span>
          <span className=" group-hover:opacity-0">Sai</span>
        </a>
      </div>
    </div>
  );
};

export default page;
