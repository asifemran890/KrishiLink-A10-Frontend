import { div } from "motion/react-client";
import React from "react";

const About = () => {
  return (
    <div className="w-11/12 mx-auto my-14 ">
      <div className="text-center">
        <h2 className="text-4xl font-bold   text-green-700 mb-3">
          About KrishiLink
        </h2>
        <div className="flex justify-center mb-3">
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-green-600 to-green-400"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-10 max-md:px-4 mt-14">
        <div className="relative shadow-2xl shadow-green-600/40 rounded-2xl overflow-hidden shrink-0">
          <img
            className=" w-full object-cover rounded-2xl"
            src="https://research.wpcarey.asu.edu/wp-content/uploads/2015/11/Farmer-vegetables-IDEAS.jpg"
            alt=""
          />
        
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <p>
            <span className="text-green-600 font-bold text-xl">KrishiLink</span>{" "}
            is a modern web application that connects people in the agricultural
            sector such as farmers, traders, and consumers in one digital space.
          </p>

          <div className="mt-4">
            <p>For now every user can:</p>

            <div className="mt-2 ml-8">
              <li>Show interest to connect and collaborate</li>
              <li>Post what they are growing or selling</li>
              <li>Browse others crop’s posts</li>
            </div>
          </div>

          <p className="mt-4">
            Instead of a traditional e-commerce or buyer-seller model, this
            platform works as a social agro network, where everyone can interact
            directly.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-green-700 transition cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
