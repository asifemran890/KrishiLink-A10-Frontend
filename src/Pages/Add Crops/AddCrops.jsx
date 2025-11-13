import React from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const AddCrops = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      type: e.target.type.value,
      description: e.target.description.value,
      image: e.target.image.value,
      location: e.target.location.value,
      pricePerUnit: e.target.pricePerUnit.value,
      created_at: new Date(),
      unit: "kg",
    };

    fetch("http://localhost:3000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added!");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Crops</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* type  */}
          <div>
            <label className="label font-medium">Type</label>
            <input
              type="text"
              name="type"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="type"
            />
          </div>
          {/* Weight  */}
          <div>
            <label className="label font-medium">Weight</label>
            <input
              type="text"
              name="pricePerUnit"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Weight"
            />
            {/* <label className="label font-medium">Kg</label>
            <input
              type="text"
              name="unit"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Kg"
            /> */}
          </div>
          {/* location */}
          <div>
            <label className="label font-medium">location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="location"
            />
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label  font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[100px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/*  image URL */}
          <div>
            <label className="label font-medium"> Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Add Crops
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCrops;
