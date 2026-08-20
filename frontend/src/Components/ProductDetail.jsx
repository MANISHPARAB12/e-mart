// import React from "react";
import "../Css/ProductDetail.css";

const ProductDetail = () => {
  const product = {
    name: "Fresh Red Apple",
    description:
      "Fresh and delicious red apples. Perfect for eating directly or adding to your favorite recipes.",
    price: 180,
    image:
      "https://raw.githubusercontent.com/MANISHPARAB12/imgforproducts/main/Fruits/apple.png",
  };
  return (
    <div className="product-detail-container">
      {/* Left Section - Image */}
      <div className="product-image-section">
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />
      </div>

      {/* Right Section - Details */}
      <div className="product-info-section">
        <h1>{product.name}</h1>

        <p className="product-description">{product.description}</p>

        <h2 className="product-price">₹{product.price}</h2>

        <br />
        <br />

        <div className="btn-container2">
          <button className="atb">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Add to bucket</span>
          </button>
          <button className="bwt">Buy with tamara</button>
        </div>

              <br />

        <div className="links">
          <button className="atw">
            <i className="fa-regular fa-heart"></i>
            <span>Add to wishlist</span>
          </button>
          <br />
          <button className="cwov">
            <i className="fa-solid fa-store"></i>
            <span>Compare with other vendor</span>
          </button>
        </div>


      </div>
    </div>
  );
};

export default ProductDetail;
