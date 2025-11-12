import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-green-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="mb-6  text-white">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded transition duration-300"
        >
          Go back to Krishilink
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
