import React from "react";
import { useLoaderData } from "react-router";
import PostDetails from "./PostDetails";

const MyPosts = () => {
  const data = useLoaderData();
  console.log(data.result);
  return (
    <div className="grid grid-cols-2 place-items-center mx-auto w-7xl lg:grid-cols-3">
      {data.result.map((post) => (
        <PostDetails key={post._id} post={post} />
      ))}
    </div>
  );
};

export default MyPosts;
