import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="NavSection">
      <ul>
        <Link to="/First">
          <li>First page</li>
        </Link>

        <Link to="/Second">
          <li>Second page</li>
        </Link>

        <Link to="/Third">
          <li>Third page</li>
        </Link>

        <Link to="/Fourth">
          <li>Fourth page</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;