import React from "react";
import { useLoaderData } from "react-router";

import AllCropsDetails from "../All-crops-Details/AllCropsDetails";

export const AllCrops = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="text-3xl text-center font-bold p-5  text-lime-500  ">
        {" "}
        All Crops
      </div>
      <p className=" text-center text-xl lg:w-7xl lg:mx-auto">
        They form the basis of global agriculture and are vital for human
        survival and economic stability. Major categories include grains (rice,
        wheat), pulses (beans, lentils), and oilseeds (soybean, mustard).
        Successful cultivation depends on soil, climate, and proper management
        (fertilization, irrigation, and pest control)
      </p>
      <div className="container grid grid-cols-1 md:p-5 lg:place-items-center mx-auto w-7xl lg:grid-cols-3">
        {data.map((crops) => (
          <AllCropsDetails key={crops._id} crops={crops} />
        ))}
      </div>
    </div>
  );
};

export default AllCrops;
