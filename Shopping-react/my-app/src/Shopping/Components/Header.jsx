import React from "react";

const Header = () => {
  return (
    <div className="headerSection">
      <div className="left">
        <h1> Pranavs online Store</h1>
      </div>

      <div className="center">
        <ul>Women</ul>
        <ul>Men</ul>
        <ul>Children</ul>
        <ul>Electronic</ul>
      </div>

      <div className="search">
        <input type="text" placeholder="search" />
      </div>

      <div className="right">
        <div className="signin">Sign/Signup</div>
        <div className="cart">Cart</div>
      </div>
    </div>
  );
};

export default Header;
