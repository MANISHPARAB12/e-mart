import { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";
import "../App.css"

const Youmightneed = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const Youmightneed = [...res.data]
          .sort(() => Math.random() - 0.5)
          .slice(0, 10);

        setProducts(Youmightneed);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="random-products">
      <div className="heading-container">
      <h2>You Might need</h2>
      <div className="grp">
      <p className="sm">See more</p>
        <img src="https://img.icons8.com/?size=100&id=85563&format=png&color=000000" alt="" srcset="" className="rightarrow"/>
      </div>
      </div>
        

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

export default Youmightneed;