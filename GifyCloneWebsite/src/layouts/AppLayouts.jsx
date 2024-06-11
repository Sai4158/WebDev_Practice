import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const AppLayouts = () => {
  return (
    // black and min h - screen will make the whole page background black
    <div className="bg-black min-h-screen text-white">
      <div className="container px-6 py-4 mx-auto">
        
        {/* this is where the header goes */}
        <Header />

        <main>
          {/* this where the routes will be rendered  */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayouts;
