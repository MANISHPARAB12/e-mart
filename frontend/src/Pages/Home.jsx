import { useState } from "react";

import ProductCategoryTabs from "../Components/ProductCategoryTabs";
// import {Card} from "../Components/Card";
import {Herosection} from "../Components/Herosection";
import Youmightneed from "../Components/Youmightneed";
import FeatureStore from "../Components/FeaturedStore";
import OfferCards from "../Components/OfferCards";




function Home() {
  const [ setSelectedCategory] = useState("");

  return (
    <>
      <Herosection />

      <ProductCategoryTabs
        setSelectedCategory={setSelectedCategory}
      />
      
      
      <Youmightneed/>

      <FeatureStore/>

      <OfferCards/>

      {/* <Card selectedCategory={selectedCategory} /> */}
    </>
  );
}

export default Home;