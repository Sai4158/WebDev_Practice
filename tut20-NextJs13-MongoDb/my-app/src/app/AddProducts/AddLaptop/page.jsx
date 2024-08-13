"use client";

import React, { useState } from "react";

const page = () => {
  const [name, Setname] = useState();
  const [model, Setmodel] = useState();
  const [price, Setprice] = useState();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Laptop name</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => Setname(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Laptop model</h3>
            <input
              type="text"
              value={model}
              onChange={(e) => Setmodel(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Laptop price</h3>
            <input
              type="text"
              value={price}
              onChange={(e) => Setprice(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Add Laptop
        </button>
      </form>
    </div>
  );
};

export default page;
