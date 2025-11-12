import React from "react";
import { useLoaderData } from "react-router";
import HomeCropsDetails from "../Home/HomeCropsDetails";

const HomeCrops = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-[#67C090]">
      <div className="text-3xl text-center font-bold p-5 text-lime-500  ">
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
      <div className="grid grid-cols-1 place-items-center mx-auto lg:w-7xl lg:grid-cols-3">
        {data.map((home) => (
          <HomeCropsDetails key={home._id} home={home} />
        ))}
      </div>
    </div>
  );
};

export default HomeCrops;
