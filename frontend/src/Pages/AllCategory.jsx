import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Components/Card";

const AllCategory = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    let url = "http://localhost:3000/products";

    if (category !== "") {
      url += `?category=${category}`;
    }

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  return (
    <div>
      <h2>Products</h2>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Category</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Grocery">Grocery</option>
        <option value="Electronics">Electronics</option>
        <option value="Cold Drinks">Cold Drinks</option>
        <option value="Toys">Toys</option>
      </select>

      <Card products={products} />
    </div>
  );
};

export default AllCategory;