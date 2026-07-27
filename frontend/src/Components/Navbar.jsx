// import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left">
        <i className="fa-solid fa-bars menu"></i>

        <div className="logo">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Gromuse</span>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for Grocery, Stores, Vegetable or Meat"
        />

        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="right">
        <div className="delivery">
          <i className="fa-solid fa-bolt"></i>
          <span>
            Order now and get it within <strong>15 min!</strong>
          </span>
        </div>

        <div className="cart">
          <i className="fa-solid fa-cart-plus"></i>
          <span className="badge">2</span>
        </div>

        <img
          src="https://i.pravatar.cc/45"
          alt="profile"
        />
      </div>
    </nav>
  );
};
