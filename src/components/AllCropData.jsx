// import React from "react";
// import { Link } from "react-router";

// const AllCropData = ({ crop }) => {
//   return (
//     <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       <img
//         src={crop.image}
//         alt={crop.name}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <div className="flex items-center justify-between">
//           <h2 className="text-xl font-semibold text-gray-800">{crop.name}</h2>
//           <p className="text-xs font-medium  mb-1 px-2 py-1 rounded-full bg-blue-200">
//             {crop.type}
//           </p>
//         </div>

//         <p className=" font-bold mb-2">Price: ৳{crop.price}</p>
//         <p className="text-sm text-gray-500 font-medium mb-1">
//           Quantity: {crop.quantity} {crop.unit}
//         </p>

//         <p className="text-sm text-gray-600 mb-3 line-clamp-2">
//           <p>{crop.description}</p>
//         </p>
//         <p className="text-sm font-normal text-gray-500 mb-3">{crop.address}</p>

//         <div className="pb-3 pt-1 w-full flex justify-center">
//           <Link
//             to={`/crop-details/${crop._id}`}
//             className="bg-blue-500 text-white text-center px-4 py-2.5 rounded hover:bg-green-700 transition cursor-pointer w-full"
//           >
//             See Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllCropData;
import React from "react";
import { Link } from "react-router";

// Helper Function: Show only first 6 words
const truncateWords = (text, count = 6) => {
  if (!text) return "";
  const words = text.split(/\s+/);
  return words.length > count ? words.slice(0, count).join(" ") + "..." : text;
};

const AllCropData = ({ crop }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={crop.image}
        alt={crop.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">{crop.name}</h2>
          <p className="text-xs font-medium mb-1 px-2 py-1 rounded-full bg-blue-200">
            {crop.type}
          </p>
        </div>

        <p className="font-bold mb-2">Price: ৳{crop.price}</p>
        <p className="text-sm text-gray-500 font-medium mb-1">
          Quantity: {crop.quantity} {crop.unit}
        </p>

        {/* Show only first 40 words */}
        <p className="text-sm text-gray-600 mb-3">
          {truncateWords(crop.description, 6)}
        </p>

        <p className="text-sm font-normal text-gray-500 mb-3">{crop.address}</p>

        <div className="pb-3 pt-1 w-full flex justify-center">
          <Link
            to={`/crop-details/${crop._id}`}
            className="bg-blue-500 text-white text-center px-4 py-2.5 rounded hover:bg-green-700 transition cursor-pointer w-full"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCropData;
