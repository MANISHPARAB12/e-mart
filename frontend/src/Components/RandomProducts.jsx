import { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";

const RandomProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const randomProducts = [...res.data]
          .sort(() => Math.random() - 0.5)
          .slice(0, 10);

        setProducts(randomProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="random-products">
      <h2>You Might Like</h2>

      <div className="Card-container">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="image"
              width="120"
            />

            <h3>{item.name}</h3>

            <p>{item.category}</p>

            <h2>₹{item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomProducts;