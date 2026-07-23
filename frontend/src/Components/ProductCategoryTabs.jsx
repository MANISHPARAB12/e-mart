import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
            onClick={() => navigate(`/category/${category}`)}
          >
            {category}
          </button>
        ))}
      </div>

      {categories.length > 4 && (
        <button onClick={() => navigate("/categories")}>
          View All
        </button>
      )}
    </div>
  );
}

export default ProductCategoryTabs;