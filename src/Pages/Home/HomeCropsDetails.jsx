import React from "react";
import { AuthContext } from "../../context/AuthContext";
const HomeCropsDetails = ({ home }) => {
  const { name, image, _id, description } = home;
  return (
    <div className="card bg-emerald-800 w-96 mt-10 shadow-sm lg:grid-cols-3">
      <figure>
        <img
          className="md:p-3  w-[400px] h-[250px] object-cover rounded-4xl shadow-md"
          src={image}
          alt="Shoes"
        />
      </figure>

      <div className="card-body ">
        <h2 className="card-title ">{name}</h2>
        <p>{description}</p>
        <div className="card-actions  ">
          <button className="py-2 sm:py-3 btn  rounded-3xl btn-outline ">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCropsDetails;
