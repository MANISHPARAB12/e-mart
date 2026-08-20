// import React from "react";
import "../Css/Membership.css";
import Gift from "../assets/Gift.png";
import Clock from "../assets/Clock.png";

function Membership() {
  return (
    <section className="membership-section">
      {/* Free Delivery Card */}
      <div className="membership-card delivery-card">
        <div className="membership-content">
          <span className="membership-label">🚚 Free delivery</span>

          <h2>
            Get up to 50% off
            <br />
            Delivery by 12:15pm
            <br />
            Fast and free
          </h2>
        </div>

        <div className="membership-image">
          <img src={Gift} alt="Gift box" />
        </div>
      </div>

      {/* Membership Card */}
      <div className="membership-card health-card">
        <div className="membership-content">
          <span className="membership-label">💳 Membership Card</span>

          <h2>
            You can enjoy a 5%
            <br />
            discount using our
            <br />
            health card
          </h2>
        </div>

        <div className="membership-image">
          <img src={Clock} alt="Alarm clock" />
        </div>
      </div>
    </section>
  );
}

export default Membership;
