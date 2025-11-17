import React from "react";
import { useLoaderData } from "react-router";
import HomeCropsDetails from "../HomeCropsDetails";

const HomeCrops = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-[#eaeced]  h-[1150px] container mx-auto px-4 py-16  aos-init aos-animate">
      <div className="text-3xl text-center font-bold p-5 text-[#F75A5A]  ">
        {" "}
        Latest 6 Crops
      </div>
      <p className=" text-center text-xl lg:w-7xl lg:mx-auto  text-black font-bold">
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
