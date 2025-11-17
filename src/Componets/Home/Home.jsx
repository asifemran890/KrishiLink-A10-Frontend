import React from "react";
import HomeCrops from "./Homecrops/HomeCrops";
import Banner from "../../Componets/Banner/Banner";
import AgroNews from "../AgroNews";
import Features from "../Features";
import HowItWorks from "../HowItWorks";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <AgroNews></AgroNews>
      <Features></Features>
      <HomeCrops />
    </div>
  );
};

export default Home;
