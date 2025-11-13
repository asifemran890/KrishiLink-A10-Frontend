import React from "react";
import Banner from "../../Componets/Banner/Banner";
import HomeCrops from "./Homecrops/HomeCrops";

const Home = () => {
  return (
    <div>
      <div className="bg-[#FAF8F1] ">
        <Banner></Banner>
      </div>

      <HomeCrops />
    </div>
  );
};

export default Home;
