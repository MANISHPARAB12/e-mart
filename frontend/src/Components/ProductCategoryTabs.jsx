import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

function ProductCategoryTabs() {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const uniqueCategories = [
          ...new Set(res.data.map((item) => item.category)),
        ];

        setCategories(uniqueCategories);
      });
  }, []);

  return (
    <div className="container">
      <div className="category-container">
        {categories.slice(0, 4).map((category) => (
          <button
            key={category}
            onClick={() => navigate("/allCategory")}
          >
            {category}
          </button>
        ))}
      </div>

      {categories.length > 4 && (
        <div className="viewallbtn">
        <button onClick={() => navigate("/allCategory")} >
          View All
        </button>
        </div>
      )}
    </div>
  );
}

export default ProductCategoryTabs;