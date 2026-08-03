import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../Components/Card";
import OfferCards from "../Components/OfferCards";
import { useSearchParams } from "react-router-dom";

const AllCategory = () => {
  const [products, setProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "";

  useEffect(() => {
    let url = "http://localhost:3000/products";

    if (category) {
      url += `?category=${encodeURIComponent(category)}`;
    }

    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <>
      <OfferCards className="category-offercard" />

      <h2>Products</h2>

      <select
        value={category}
        onChange={(e) => {
          const value = e.target.value;

          if (value === "") {
            setSearchParams({});
          } else {
            setSearchParams({ category: value });
          }
        }}
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
    </>
  );
};

export default AllCategory;