import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import "../Css/wbsi.css";

const categories = [
  "Cold Drinks",
  "Vegetables",
  "Beverages",
  "Electronics",
  "Grocery",
  "Toys",
  "Jewellery",
  "Fruits",
];

const Wbsi = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Cold Drinks");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() ===
            activeCategory.toLowerCase()
        );

  return (
    <section className="weekly-section">
      <div className="weekly-heading">
        <h2>Weekly best selling items</h2>

        <button
          className="see-more"
          onClick={() => setActiveCategory("All")}
        >
          See more <FaArrowRight />
        </button>
      </div>

      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-tab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="products-message">Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="products-message">
          No products found in this category.
        </p>
      ) : (
        <div className="weekly-products">
          {filteredProducts.slice(0, 10).map((item) => (
            <article className="weekly-card" key={item.id}>
              <div className="weekly-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="weekly-image"
                />
              </div>

              <h3 className="weekly-product-name">
                {item.name}
              </h3>

              <p className="weekly-weight">
                {item.weight || "500 gm."}
              </p>

              <p className="weekly-price">
                <span>{item.price}</span>
                <sup>29$</sup>
              </p>

              <button
                className="weekly-add-button"
                aria-label={`Add ${item.name} to cart`}
                onClick={() => console.log("Add to cart:", item)}
              >
                +
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wbsi;