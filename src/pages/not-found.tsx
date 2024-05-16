// write a simple but beautiful 404 page

import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen text-white bg-black">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-lg">Page not found</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back to home
        </Link>
      </div>
      <img src="./candle.gif" alt="404" className="w-1/4" />
    </div>
  );
};
