import "../Css/AllCategory.css";
import { useSearchParams } from "react-router-dom";

const AllCategory = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "";

  const handleCategoryChange = (e) => {
    const category = e.target.value;

    const params = {};

    if (category) {
      params.category = category;
    }

    setSearchParams(params);
  };

  return (
    <div>
      <h2>Gromuse / All Category</h2>

      <div className="filter">
        <div className="allcategorydropdown">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="dd"
          >
            <option value="">All Category</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Grocery">Grocery</option>
            <option value="Cold Drinks">Cold Drinks</option>
            <option value="Beverages">Beverages</option>
            <option value="Jewellery">Jewellery</option>
            <option value="Electronics">Electronics</option>
            <option value="Toys">Toys</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllCategory;