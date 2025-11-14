import React from "react";
import { Link } from "react-router";

const MyInterests = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">My Interests</h1>
          <p className="py-6">
            The phrase "crops My Interests" could be a request for information
            on gardening and agriculture as interests or a question about how to
            cultivate or develop your personal interests. Here are resources
            related to both interpretations
          </p>
          <Link to="/AllCrops" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyInterests;
