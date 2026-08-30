import { useState } from "react";

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

function Home() {
  const [setSelectedCategory] = useState("");

  return (
    <>
    
      <Herosection />
    

     
      <ProductCategoryTabs
        setSelectedCategory={setSelectedCategory}
        />
      
      
      
      <Youmightneed/>
      


      
      <FeatureStore/>
      
      <ProductDetail />

      
      <OfferCards className="home-offer-card" />
      
      
      <Membership />

      
        <Banner/>
      


        <Services/>
      
      {/* <Card selectedCategory={selectedCategory} /> */}
    </>
  );
}

export default Home;