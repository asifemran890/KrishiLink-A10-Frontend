import React from "react";
import { Link, useLoaderData } from "react-router";

const CropDetels = () => {
  const data = useLoaderData();
  const crop = data.result;
  const { description,pricePerUnit,userName, image, location, name } = crop;
  return (
    // <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
    //   <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
    //     <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
    //       <div className="shrink-0 w-full md:w-1/2">
    //         <img
    //           src={image}
    //           alt="img"
    //           className="w-full object-cover rounded-xl shadow-md"
    //         />
    //       </div>

    //       <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
    //         <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{name}</h1>

    //         <div className="flex gap-3">
    //           <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">{location}</div>

    //           <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
    //             Downloaded:
    //           </div>
    //         </div>

    //         <p className="text-gray-600 leading-relaxed text-base md:text-lg">
    //           {description}
    //         </p>

    //         <div className="flex gap-3 mt-6">
    //           <Link className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700">
    //             Update Model
    //           </Link>
    //           <button className="btn btn-secondary rounded-full">
    //             Download
    //           </button>
    //           <button className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600">
    //             Delete
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-6">
        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src={image}
            alt="Green Chilli"
            className="w-80 h-auto rounded-xl shadow"
          />
        </div>

        {/* Title & Price */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-xl text-purple-600 font-semibold">৳{pricePerUnit}kg</p>
        </div>

        {/* Details */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-xl shadow-sm">
            <p className="text-gray-600 text-sm">Available Quantity</p>
            <p className="text-lg font-semibold">150 kg</p>
          </div>
          <div className="p-4 border rounded-xl shadow-sm">
            <p className="text-gray-600 text-sm">Location</p>
            <p className="text-lg font-semibold">{location}</p>
          </div>
          <div className="p-4 border rounded-xl shadow-sm">
            <p className="text-gray-600 text-sm">Seller</p>
            <p className="text-lg font-semibold">{userName}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Description</h2>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>

        {/* Express Interest */}
        <div className="mt-8 p-4 border rounded-2xl shadow-sm bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Express Interest</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium">Quantity (kg)</label>
            <input
              type="number"
              min="1"
              className="mt-1 w-32 border px-3 py-2 rounded-lg shadow-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Message</label>
            <textarea
              className="w-full h-24 border px-3 py-2 rounded-lg shadow-sm"
              placeholder="Tell the seller about your requirements..."
            ></textarea>
          </div>

          <div className="text-right text-lg font-semibold">Total: ৳80</div>

          <button className="w-full mt-4 py-3 bg-purple-700 text-white font-semibold rounded-xl shadow hover:bg-purple-800 transition">
            Send Interest →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropDetels;
