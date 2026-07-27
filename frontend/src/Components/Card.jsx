import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "../Css/Card.css";

export const Card = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  // Read category from URL
  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((item) => item.category === selectedCategory)
    : products;

  return (
    <div className="Card-container">
      {filteredProducts.map((item) => (
        <div className="card" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            className="image"
          />

          <h3>{item.name}</h3>

          <p>{item.category}</p>

          <p>₹{item.price}</p>

          <div className="btn-container">
            <button className="addtocart">+</button>
          </div>
        </div>
      ))}
    </div>
  );
};