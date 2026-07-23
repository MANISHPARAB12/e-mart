import axios from 'axios';
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const AllCategory = ({selectedCategory}) => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(()=> {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {setProducts(res.data)})
      .catch((err)=> console.log(err));
  }, []);

  const categories = [...new Set(products.map((item) => item.category))];

  return (
      <>
          <button onClick={() => navigate("/")}>Go Back</button>
        {categories
        .filter((category) =>
          selectedCategory ? category === selectedCategory : true
        )
        .map((category) => (
          <div key={category}>
            <h1>{category}</h1>

            <div className="Card-container">
              {products
                .filter((item) => item.category === category)
                .map((item) => (
                  <div className="card" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="image"
                    />

                    <span><h3>{item.name}</h3></span>

                    <p>₹{item.price}</p>

                    <span className="btn-container">
                      <button className="addtocart">+</button>
                    </span>

                  </div>
                ))}
            </div>
          </div>
        ))}
      </>
  );
};

export default AllCategory;