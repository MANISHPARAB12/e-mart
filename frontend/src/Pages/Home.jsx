import { useState } from "react";

import ProductCategoryTabs from "../Components/ProductCategoryTabs";
import {Card} from "../Components/Card";
import {Herosection} from "../Components/Herosection";
import RandomProducts from "../Components/RandomProducts";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <Herosection />

      <ProductCategoryTabs
        setSelectedCategory={setSelectedCategory}
      />
      
      <RandomProducts/>


      <Card selectedCategory={selectedCategory} />
    </>
  );
}

export default Home;