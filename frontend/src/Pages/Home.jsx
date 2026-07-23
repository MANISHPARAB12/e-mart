import { useState } from "react";
import { Card } from "../Components/Card";
import { Herosection } from "../Components/Herosection";
import RandomProducts from "../Components/RandomProducts";
import ProductCategoryTabs from "../Components/ProductCategoryTabs";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      {!selectedCategory && <Herosection />}

      <ProductCategoryTabs
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {!selectedCategory && <RandomProducts />}

      <Card selectedCategory={selectedCategory} />
    </>
  );
};

export default Home;