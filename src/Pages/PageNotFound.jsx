import React from "react";
import { useOutletContext } from "react-router-dom";

function PageNotFound() {
  const { navBarHeight } = useOutletContext();
  return (
    <div
      className=""
      style={{
        padding: `${navBarHeight}px`,
      }}
    >
      <div className="flex items-center justify-center ">
        <div className="text-center p-8 shadow-lg rounded-lg">
          <h1 className="text-6xl font-extrabold text-red-500">404</h1>
          <p className="mt-4 text-xl">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="mt-2 text-lg ">
            You may have mistyped the address or the page may have moved.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="px-6 py-3 bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Go Back to Homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
