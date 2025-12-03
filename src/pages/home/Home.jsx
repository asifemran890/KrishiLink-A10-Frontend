import React from "react";
import Slider from "../../components/Slider";
import WorkProcedure from "../../components/WorkProcedure";
import Blogs from "../../components/Blogs";
import About from "../../components/About";
import LatestCrops from "../../components/LatestCrops";

const Home = () => {
  return (
    <div>
      <title>KrishiLink - Home </title>
      <Slider></Slider>
      {/* About */}
      <About></About>
      {/* Latest Crop */}
      <LatestCrops></LatestCrops>
      {/* working procedure */}
      <WorkProcedure></WorkProcedure>
      {/* Blog page */}
      <Blogs></Blogs>
     
    </div>
  );
};

export default Home;
