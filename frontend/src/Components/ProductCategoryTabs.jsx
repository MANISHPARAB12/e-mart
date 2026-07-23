import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../App.css'

const ProductCategoryTabs = ({setSelectedCategory}) => {
  const [categories, setCategories] = useState([]);
  const [visibleCategory, setVisibleCategory] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const uniqueCategories = [
          ...new Set(res.data.map((item) => item.category))
        ];

        setCategories(uniqueCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleViewAll = () => {
    setVisibleCategory((prev) => prev + 4);
  };

  return (
    <>
    <div className="container">
         <button onClick={() => navigate()}>
        ← Back
      </button>
      <div className="category-container">
        {categories
          .slice(0, visibleCategory)
          .map((category) => (
              <button key={category} onClick={ () =>setSelectedCategory(category)}>
              {category}
            </button>
          ))}
      </div>

      {visibleCategory < categories.length && (
          <button onClick={handleViewAll}>
          View All
        </button>
      )}
      </div>
    </>
  );
};

export default ProductCategoryTabs;