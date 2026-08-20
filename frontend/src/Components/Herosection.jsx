// import React from 'react'
import heroImg from "../assets/heroimg.png";
import "../Css/HeroSection.css";
import "../App.css";
export const Herosection = () => {
  return (
    <div className="padding">
      <section className="hero">
        <div className="left-container">
          <div className="h1-container">
            <h1>We bring the store to your door</h1>
          </div>

          <div className="p-container">
            <p>
              Get organic produce and sustainably sourced groceries delivery at
              up to 4% off grocery.
            </p>
          </div>

          <button className="shop-btn">Shop Now</button>
        </div>

        <div className="right-container">
          <img src={heroImg} alt="" className="heroimg" />
        </div>
      </section>
    </div>
  );
};

// google h1 font lillita one
