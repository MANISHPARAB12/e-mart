import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaArrowRight,
  FaShoppingBasket,
} from "react-icons/fa";

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
  const [activeCategory, setActiveCategory] =
    useState("Cold Drinks");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from the backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Unable to load products. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filter products according to the selected category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() ===
            activeCategory.toLowerCase()
        );

  // Format product prices in Indian Rupees
  const formatPrice = (price) => {
    if (
      price === null ||
      price === undefined ||
      price === "" ||
      !Number.isFinite(Number(price))
    ) {
      return "Price unavailable";
    }

    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(Number(price));
  };

  return (
    <section className="overflow-hidden bg-[#f8faf6] px-3 py-7 font-sans text-[#123b30] sm:px-5 sm:py-8 lg:px-10 lg:py-11">

      {/* ================= HEADING ================= */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-7 sm:flex-row sm:items-center">
        <div>
          <span className="mb-2 inline-block text-[10px] font-bold tracking-[2px] text-[#638d4b] sm:text-[11px]">
            OUR TOP PICKS
          </span>

          <h2 className="text-[21px] font-bold leading-tight text-[#123b30] sm:text-2xl lg:text-[27px]">
            Weekly Best Selling Items
          </h2>

          <p className="mt-2 text-xs text-[#7a8980] sm:text-[13px]">
            Discover the products everyone loves.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setActiveCategory("All")}
          className="flex shrink-0 items-center gap-2 rounded-full border border-[#dce7d7] bg-white px-4 py-2.5 text-xs font-semibold text-[#315f37] transition-colors duration-200 hover:bg-[#064b37] hover:text-white"
        >
          See all products
          <FaArrowRight className="text-[11px]" />
        </button>
      </div>

      {/* ================= CATEGORY TABS ================= */}
      <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mb-7 sm:gap-2.5">
        <button
          type="button"
          onClick={() => setActiveCategory("All")}
          className={`shrink-0 rounded-full border px-4 py-2.5 text-[11px] font-medium transition-all duration-200 sm:px-[18px] sm:text-xs ${
            activeCategory === "All"
              ? "border-[#064b37] bg-[#064b37] text-white shadow-md shadow-[#064b37]/15"
              : "border-[#e7ece4] bg-white text-[#52665a] hover:border-[#8eb87d] hover:text-[#064b37]"
          }`}
        >
          All Products
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-[11px] font-medium transition-all duration-200 sm:px-[18px] sm:text-xs ${
              activeCategory === category
                ? "border-[#064b37] bg-[#064b37] text-white shadow-md shadow-[#064b37]/15"
                : "border-[#e7ece4] bg-white text-[#52665a] hover:border-[#8eb87d] hover:text-[#064b37]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ================= PRODUCT STATES ================= */}
      {loading ? (
        <div className="rounded-2xl border border-dashed border-[#d8e4d2] bg-white px-4 py-12 text-center text-sm text-[#728075]">
          Loading your favourite products...
        </div>
      ) : error ? (
        <div className="rounded-2xl border border-red-100 bg-white px-4 py-12 text-center text-sm text-red-600">
          {error}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#d8e4d2] bg-white px-4 py-12 text-center text-sm text-[#728075]">
          No products found in this category.
        </div>
      ) : (

        /* ================= PRODUCT GRID ================= */
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.slice(0, 10).map((item) => (
            <article
              key={item.id}
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#edf0e9] bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d9e7d2] hover:shadow-lg sm:rounded-2xl sm:p-3.5"
            >
              {/* Product Image */}
              <div className="mb-3 flex h-[115px] items-center justify-center overflow-hidden rounded-lg bg-[#f7f9f4] p-2 sm:h-[135px] sm:rounded-xl sm:p-3 lg:h-[155px]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Information */}
              <div className="flex flex-1 flex-col items-start">
                <span className="mb-1 text-[9px] font-semibold uppercase tracking-wide text-[#78966a] sm:text-[10px]">
                  {item.category}
                </span>

                <h3 className="line-clamp-2 min-h-[38px] w-full text-xs font-semibold leading-5 text-[#193a2f] sm:min-h-[42px] sm:text-[13px]">
                  {item.name}
                </h3>

                <p className="mb-3 mt-1 text-[10px] text-[#8b948c] sm:text-[11px]">
                  {item.weight || "500 gm"}
                </p>

                {/* Price and Full-Width Add Button */}
                <div className="mt-auto flex w-full flex-col gap-3 border-t border-[#f0f2ed] pt-3">
                  <p className="text-lg font-bold leading-tight text-[#064b37] sm:text-xl">
                    {formatPrice(item.price)}
                  </p>

                  <button
                    type="button"
                    aria-label={`Add ${item.name} to cart`}
                    title="Add to cart"
                    onClick={() =>
                      console.log("Add to cart:", item)
                    }
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#064b37] text-white shadow-sm transition-all duration-200 hover:bg-[#087653] hover:shadow-md active:scale-[0.98]"
                  >
                    <FaShoppingBasket className="text-base" />
                    <span className="text-sm font-semibold">
                      Add
                    </span>
                    <span className="text-xl font-medium leading-none">
                      +
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Wbsi;
