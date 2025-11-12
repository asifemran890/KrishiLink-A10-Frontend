import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const AllCropsDetails = ({ crops }) => {
  const { name, image, _id, description } = crops;

  return (
    <div className="card bg-emerald-200 w-96 mt-10 shadow-sm lg:grid-cols-3">
      <figure>
        <img
          className="md:p-3  w-[400px] h-[250px] object-cover rounded-4xl shadow-md"
          src={image}
          alt="Shoes"
        />
      </figure>

      <div className="card-body ">
        <h2 className="card-title ">Name : {name}</h2>
        <p>Description: {description}</p>
        <div className="card-actions  ">
          <Link
            to={`/crops/${_id}`}
            className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600 "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCropsDetails;
