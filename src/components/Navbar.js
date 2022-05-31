import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // useSelector used to extract “value” from the global state

const Navbar = () => {

  const items = useSelector(state => state.cart);

  return (
    <div className="navbar">
      <div className="logo">MY STORE</div>
      <div className="menu">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span>
          <strong>Cart Items: { items.length }</strong>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
