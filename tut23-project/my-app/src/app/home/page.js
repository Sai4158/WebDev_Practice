import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">Welcome Home 🚀</h1>
        <p className="text-gray-600">You have successfully logged in!</p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
