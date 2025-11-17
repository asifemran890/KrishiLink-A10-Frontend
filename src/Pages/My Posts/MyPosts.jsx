import { useEffect, useState } from "react";
import { FiPlus, FiMail } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function MyPosts() {
  const [crops, setCrops] = useState([]);
  // const [crop, setCrop] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data From URL
  useEffect(() => {
    fetch("https://backend-bay-tau-10.vercel.app/post")
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Loading...
      </div>
    );
  }

  const handleDelete = (crop) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(crop._id);
        fetch(`https://backend-bay-tau-10.vercel.app/post/${crop._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full">
            <FiMail className="text-purple-600 text-3xl" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-purple-700">My Crop Listings</h1>
        <p className="text-gray-600 mt-1">
          Manage and track your agricultural products
        </p>
      </div>
      <div className="flex justify-between">
        {/* Stats */}
        <div className="mb-10">
          <div className="p-3 flex gap-3 items-center bg-white shadow rounded-2xl w-52">
            <p className="text-3xl font-bold text-purple-700">{crops.length}</p>
            <p className="text-gray-600">Total Listings</p>
          </div>
        </div>{" "}
        {/* Add New Crop Button */}
        <div className=" mb-8">
          <Link
            to="/AddCrops"
            className="px-5 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 flex items-center gap-2"
          >
            <FiPlus /> Add New Crop
          </Link>
        </div>
      </div>

      {/* Crop Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {crops.map((crop) => (
          <div
            key={crop._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={crop.image}
                alt={crop.title}
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">Name: {crop.name}</h2>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-gray-600">Type: {crop.type} </p>
              </div>
              <p className="text-purple-600 text-lg font-bold mb-2">
                Weight : {crop.unit}
              </p>

              <div className="flex items-center gap-2 mb-4">
                <IoLocationOutline className="text-gray-500" />
                <p className="text-gray-600">Location: {crop.location}</p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-2 bg-purple-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700">
                  <FaEdit /> Edit
                </button>

                <button
                  onClick={() => handleDelete(crop)}
                  className="flex-1 py-2 bg-pink-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-pink-700"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
