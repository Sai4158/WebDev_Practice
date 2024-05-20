import React from "react";
//this is for linkning pages.
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const Navlinkstyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    // or u
    <nav>
      {/* use capital Link so it will use from react router dom */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/ANY">404 Page</NavLink>
    </nav>
  );
};

export default NavBar;
