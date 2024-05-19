import React from "react";
//this is for linkning pages.
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      {/* use capital Link so it will use from react router dom */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default NavBar;
