"Use Client";

import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-6 rounded-md shadow-md w-96">
        <h3 className="text-lg mb-4">Register</h3>

        <div className="mb-4">
          <label className="block mb-1">Username</label>
          <input type="text" className="border p-2 rounded w-full" />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input type="email" className="border p-2 rounded w-full" />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input type="password" className="border p-2 rounded w-full" />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
