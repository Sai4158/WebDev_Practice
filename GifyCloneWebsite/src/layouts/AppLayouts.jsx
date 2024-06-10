import React from "react";
import { Outlet } from "react-router-dom";

const AppLayouts = () => {
  return (
    <div>
      <main>
        {/* this where the routes will be rendered  */}
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayouts;
