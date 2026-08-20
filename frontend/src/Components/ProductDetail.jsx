import React from "react";
import "../Css/ProductDetail.css";

const ProductDetail = () => {
   const product = {
      name: "Fresh Red Apple",
      description:
        "Fresh and delicious red apples. Perfect for eating directly or adding to your favorite recipes.",
      price: 180,
      image: "https://raw.githubusercontent.com/MANISHPARAB12/imgforproducts/main/Fruits/apple.png",
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

        <p className="product-description">
          {product.description}
        </p>

        <h2 className="product-price">
          ₹{product.price}
        </h2>

        <div className="product-quantity">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <button className="add-cart-btn">
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductDetail;