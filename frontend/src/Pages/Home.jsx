import { useState } from "react";

import ProductCategoryTabs from "../Components/ProductCategoryTabs";
// import {Card} from "../Components/Card";
import { Herosection } from "../Components/Herosection";
import Youmightneed from "../Components/Youmightneed";
import FeatureStore from "../Components/FeaturedStore";
import OfferCards from "../Components/OfferCards";
import ProductDetail from "../Components/ProductDetail";
import Membership from "../Components/Membership";

function Home() {
  const [setSelectedCategory] = useState("");

  return (
    <>
      <Herosection />

      <ProductDetail />

      <ProductCategoryTabs setSelectedCategory={setSelectedCategory} />

      <Youmightneed />

      <FeatureStore />

      <OfferCards className="home-offer-card" />
      <Membership />

      {/* <Card selectedCategory={selectedCategory} /> */}
    </>
  );
}

export default Home;
