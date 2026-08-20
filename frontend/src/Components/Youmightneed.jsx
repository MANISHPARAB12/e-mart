import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import "../Css/Card.css";
import "../Css/Youmightneed.css";

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
    <div className="padding">
      <div className="random-products">
        <div className="heading-container">
          <h2>You Might need</h2>

          <div className="grp">
            <p className="sm">See more</p>
            <FaArrowRight className="rightarrow" />
          </div>
        </div>

        <div className="Card-container">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <div className="img-container">
                <img
                  src={item.image}
                  alt={item.name}
                  className="image"
                  width="120"
                />
              </div>
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <div className="btn-container">
                <button className="addtocart">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Youmightneed;
