import React, { useEffect, useState } from "react";
import LatestCrop from "./LatestCrop";
import { Link } from "react-router";
import Loading from "../loading/Loading";

const LatestCrops = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://krishilink-server-ivory.vercel.app/latest-products")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching crops:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-11/12 mx-auto py-10 border-t border-green-300">
      <div className="text-center">
        <h2 className="text-4xl font-bold  mb-3">Latest Crops</h2>
        <div className="flex justify-center mb-3">
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-black to-black"></div>
        </div>
        <p className="text-gray-600 mb-10">
          Stay ahead with fresh insights on organic farming, soil health, pest
          control, and certification.
        </p>
      </div>

      {/* Loading state */}
      {loading ? <Loading></Loading> : <LatestCrop crops={crops} />}

      <div className="text-center my-10">
        <Link
          to={"/all-crops"}
          className="bg-blue-500 text-white px-4 py-2.5 rounded hover:bg-green-700 transition cursor-pointer w-full"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default LatestCrops;
