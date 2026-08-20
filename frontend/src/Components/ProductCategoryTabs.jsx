import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Css/ProductCategoryTabs.css";

function ProductCategoryTabs() {
  const [categories, setCategories] = useState([]);

  const categoryImages = {
    Fruits:
      "https://raw.githubusercontent.com/MANISHPARAB12/e-mart/main/images/fruits-product-category.png",
    Vegetables:
      "https://raw.githubusercontent.com/MANISHPARAB12/e-mart/main/images/vegetables-product-category.png",
    "Cold Drinks":
      "https://raw.githubusercontent.com/MANISHPARAB12/e-mart/main/images/colddrink-product-category.png",
    Beverages:
      "https://raw.githubusercontent.com/MANISHPARAB12/e-mart/main/images/beverages-product-categroy.png",
  };

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      const uniqueCategories = [
        ...new Set(res.data.map((item) => item.category)),
      ];

      setCategories(uniqueCategories);
    });
  }, []);

  return (
    <div className="padding">
      <div className="container">
        <div className="category-container">
          {categories.slice(0, 4).map((category) => (
            <button key={category} onClick={() => navigate("/allCategory")}>
              <p>{category}</p>

              <span className="img-span">
                <img
                  src={categoryImages[category]}
                  alt={category}
                  width={100}
                  className="tab-img"
                />
              </span>
            </button>
          ))}
        </div>

        {categories.length > 4 && (
          <div className="viewallbtn">
            <button
              onClick={() => navigate("/allCategory")}
              className="btn-view"
            >
              <div className="circle">
                <img
                  src="https://img.icons8.com/?size=100&id=85563&format=png&color=000000"
                  alt=""
                  srcset=""
                  className="arrow"
                />
              </div>
              See all
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCategoryTabs;
