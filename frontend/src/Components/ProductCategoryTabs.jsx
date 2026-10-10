
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Css/ProductCategoryTabs.css";

function ProductCategoryTabs() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const uniqueCategories = [
          ...new Set(res.data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="px-15">
      <div className="category-container">
        {categories.slice(0, 4).map((category) => (
          <button
            type="button"
            key={category}
            className="category-card"
            onClick={() => navigate("/allCategory")}
          >
            <p>{category}</p>

            <span className="img-span">
              <img
                src={categoryImages[category]}
                alt={category}
                className="tab-img"
              />
            </span>
          </button>
        ))}

        {categories.length > 4 && (
          <button
            type="button"
            onClick={() => navigate("/allCategory")}
            className="btn-view"
          >
            <span className="circle">
              <img
                src="https://img.icons8.com/?size=100&id=85563&format=png&color=000000"
                alt=""
                className="arrow"
              />
            </span>
            <span>See all</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCategoryTabs;