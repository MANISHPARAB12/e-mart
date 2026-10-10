import { useState } from "react";

import Wbsi from "../Components/Wbsi"

import ProductCategoryTabs from "../Components/ProductCategoryTabs";
// import {Card} from "../Components/Card";
import { Herosection } from "../Components/Herosection";
import Youmightneed from "../Components/Youmightneed";
import FeatureStore from "../Components/FeaturedStore";
import OfferCards from "../Components/OfferCards";
import { Banner } from "../Components/AppPromotionBanner";
import { Services } from "../Components/ServicesSection";

import ProductDetail from "../Components/ProductDetail";
import Membership from "../Components/Membership";

import "../Components/Wbsi"

function Home() {
  const [setSelectedCategory] = useState("");

  return (
    <>
    <div>

      <Herosection />
    

     
      <ProductCategoryTabs
        setSelectedCategory={setSelectedCategory}
        />
      
      
      
      <Youmightneed/>
      
      
      <Wbsi/>

      
      <FeatureStore/>
      
      <ProductDetail />

      
      <OfferCards className="home-offer-card" />
      
      
      <Membership />

      
        <Banner/>
      


        <Services/>
      
    </div>
      {/* <Card selectedCategory={selectedCategory} /> */}
    </>
  );
}

export default Home;