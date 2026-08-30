import React from "react";
import "../Css/Footer.css";

// Payment images
import tabby from "../assets/tabby.png";
import visa from "../assets/Visa.png";
import tamara from "../assets/tamara.png";
import mastercard from "../assets/mastercard.png";
import klarna from "../assets/Klarna.png";
import applePay from "../assets/Apple_Pay.png";

const Footer = () => {

  // ================= PAYMENT IMAGES =================

  const payments = [
    {
      id: 1,
      image: tabby,
      name: "Tabby",
    },
    {
      id: 2,
      image: visa,
      name: "Visa",
    },
    {
      id: 3,
      image: tamara,
      name: "Tamara",
    },
    {
      id: 4,
      image: mastercard,
      name: "Mastercard",
    },
    {
      id: 5,
      image: klarna,
      name: "Klarna",
    },
    {
      id: 6,
      image: applePay,
      name: "Apple Pay",
    },
  ];


  // ================= FOOTER COLUMNS =================

  const footerColumns = [
    {
      id: 1,
      title: "Department",
      links: [
        "Fashion",
        "Education Product",
        "Frozen Food",
        "Beverages",
        "Organic Grocery",
        "Office Supplies",
        "Beauty Products",
      ],
    },

    {
      id: 2,
      title: "About us",
      links: [
        "About shopcart",
        "Careers",
        "News & Blog",
        "Help",
        "Press Center",
      ],
    },

    {
      id: 3,
      title: "Services",
      links: [
        "Gift Card",
        "Mobile App",
        "Shipping & Delivery",
        "Order Pickup",
      ],
    },

    {
      id: 4,
      title: "Help",
      links: [
        "Shopcart Help",
        "Returns",
        "Track orders",
        "Contact us",
      ],
    },
  ];


  // ================= BOTTOM LINKS =================

  const bottomLinks = [
    {
      id: 1,
      icon: "💼",
      name: "Become Seller",
    },

    {
      id: 2,
      icon: "🎁",
      name: "Gift Cards",
    },

    {
      id: 3,
      icon: "❓",
      name: "Help Center",
    },
  ];


  // ================= JSX =================

  return (
    <footer className="footer">

      {/* ================= TOP SECTION ================= */}

      <div className="footer-top">

        {/* LEFT BRAND SECTION */}

        <div className="footer-brand">

          <h2 className="logo">
            🛒 <h2>Gromuse</h2>
          </h2>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor
            do amet sint. Velit officia consequat duis enim velit mollit.
          </p>

          <h4>Accepted Payments</h4>


          <div className="payment-container">

            {payments.map((payment) => (
              <img
                key={payment.id}
                src={payment.image}
                alt={payment.name}
              />
            ))}

          </div>

        </div>


        <div className="footer-columns">

          {footerColumns.map((column) => (

            <div
              className="footer-column"
              key={column.id}
            >

              <h3>
                {column.title}
              </h3>

              {column.links.map((link, index) => (

                <a
                  href="#"
                  key={index}
                >
                  {link}
                </a>

              ))}

            </div>

          ))}

        </div>

      </div>


      <div className="footer-bottom">

        {/* BOTTOM LEFT */}

        <div className="bottom-left">

          {bottomLinks.map((item) => (

            <div
              className="bottom-item"
              key={item.id}
            >

              <span className="bottom-icon">
                {item.icon}
              </span>

              <span>
                {item.name}
              </span>

            </div>

          ))}

        </div>


        {/* TERMS AND PRIVACY */}

        <div className="bottom-center">

          <a href="#">
            Terms of Use
          </a>

          <a href="#">
            Privacy Policy
          </a>

        </div>


        {/* COPYRIGHT */}

        <div className="copyright">
          All Right reserved by Musemind | 2022
        </div>

      </div>

    </footer>
  );
};

export default Footer;