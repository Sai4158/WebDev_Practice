import React from "react";

const HomePage = () => {
  return (
    <div className=" h-screen center text-white font-normal py-52 text-center">
      <h1 className="text-center py-5 text-5xl">Notes App</h1>
      <textarea
        name=""
        id=""
        className="bg-slate-200 w-1/2 rounded-lg shadow-lg text-2xl font-bold"
      ></textarea>
    </div>
  );
};

export default HomePage;
