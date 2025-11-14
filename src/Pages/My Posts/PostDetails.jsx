import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const PostDetails = ({ post }) => {
  const { name, image, _id, description, pricePerUnit, unit, location, type } =
    post;

  return (
    <div className="card bg-white w-96 mt-10 shadow-sm  md:grid-cols-1 lg:grid-cols-3">
      <figure>
        <img
          className="md:p-3  w-[400px] h-[250px] object-cover rounded-4xl shadow-md"
          src={image}
          alt="Shoes"
        />
      </figure>

      <div className="card-body ">
        <h2 className="card-title text-black ">Name : {name}</h2>
        <p className="text-black font-bold">
          Type : {type} , Weight : {pricePerUnit} {unit}
        </p>

        <p className="text-black">Location : {location}</p>
        <p className="line-clamp-1 text-black">Description: {description}</p>
        <div className="card-actions  ">
          <Link
            to={`/crops/${_id}`}
            className="btn btn-outline w-full rounded-full text-black border-gray-300 hover:border-pink-500 hover:text-pink-600 "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
