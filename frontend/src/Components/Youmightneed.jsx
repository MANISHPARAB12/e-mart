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
    <div className="px-15">
      <div className="random-products">
        <div className="heading-container flex justify-between">
          <h2 className="font-bold text-2xl">You Might need</h2>

          <div className="grp">
            <p className="smx text-red-600">See more</p>
            <FaArrowRight className="rightarrow text-red-600" />
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

