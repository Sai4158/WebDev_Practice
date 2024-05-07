import React from "react";

const Header = () => {
  return (
    <div className="headerSection">
      <div className="left">
        <h2> Shopping Store</h2>
      </div>
      <div className="center">
        <ul>Women</ul>
        <ul>Men</ul>
        <ul>Children</ul>
        <ul>Electronic</ul>
      </div>
      <div className="right">
        <div className="signin">
          Sign/Signup
        </div>
        <div className="cart">
          Cart
        </div>
      </div>
    </div>
  );
};

export default Header;
