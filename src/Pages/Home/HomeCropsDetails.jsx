import React from "react";

import { Link } from "react-router";
const HomeCropsDetails = ({ home }) => {
  const { name, image, _id, description } = home;
  return (
    <div className="card bg-white w-96 mt-10 shadow-sm lg:grid-cols-3">
      <figure>
        <img
          className="md:p-3  w-[400px] h-[250px] object-cover rounded-4xl shadow-md"
          src={image}
          alt="Shoes"
        />
      </figure>

      <div className="card-body ">
        <h2 className="card-title  text-black">Name : {name}</h2>
        <p className=" text-black line-clamp-1 ">Description : {description}</p>
        <div className="card-actions  text-black ">
          <Link
            to={`/crops/${_id}`}
            className="py-2 sm:py-3 btn  rounded-3xl btn-outline "
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCropsDetails;
