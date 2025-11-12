import React from "react";
import { Link, useLoaderData } from "react-router";

const CropsDetails = () => {
  const data = useLoaderData();
  const { name, image, _id, description } = data.result;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold "> Name : {name}</h1>

            <div className="flex gap-3">
              <div className="font-medium">Description : {description}</div>
            </div>

            <div className="flex gap-3 mt-6">
              <Link
                to="/AllCrops"
                className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
              >
                All Crops pages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropsDetails;
