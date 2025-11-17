import React, { useState } from "react";
import { useLoaderData } from "react-router";

import AllCropsDetails from "../All-crops-Details/AllCropsDetails";

export const AllCrops = () => {
  const data = useLoaderData();
  const [crop, setCrop] = useState(data);
  const [Loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;

    setLoading(true);

    fetch(`https://backend-bay-tau-10.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCrop(data);
        setLoading(false);
      });
  };

  return (
    <div className="bg-emerald-200">
      <div className="text-3xl text-center font-bold p-5  text-lime-500  ">
        {" "}
        All Crops
      </div>
      <p className=" text-center text-xl lg:w-7xl text-black lg:mx-auto">
        They form the basis of global agriculture and are vital for human
        survival and economic stability. Major categories include grains (rice,
        wheat), pulses (beans, lentils), and oilseeds (soybean, mustard).
        Successful cultivation depends on soil, climate, and proper management
        (fertilization, irrigation, and pest control)
      </p>
      <form
        onSubmit={handleSearch}
        className=" mt-5 mb-10 flex gap-2 justify-center"
      >
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn btn-secondary  rounded-full">
          {Loading ? "Searching...." : "Search"}
        </button>
      </form>
      <div className="container grid grid-cols-1 p-4 md:p-5 lg:place-items-center mx-auto w-7xl lg:grid-cols-3">
        {crop.map((crops) => (
          <AllCropsDetails key={crops._id} crops={crops} />
        ))}
      </div>
    </div>
  );
};

export default AllCrops;
