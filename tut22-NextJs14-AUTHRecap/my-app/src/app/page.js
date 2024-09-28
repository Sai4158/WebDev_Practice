"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [carModel, setCarModel] = useState("");
  const [carColour, setCarColour] = useState("");
  const [cars, setCars] = useState([]);

  // Fetch the list of cars
  const fetchData = async () => {
    const res = await fetch("/api/Cars");
    const data = await res.json();
    setCars(data);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ CarModel: carModel, CarColour: carColour }),
    });
    if (res.ok) fetchData();
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-10 min-h-screen bg-gray-100">
      <h1>Please enter you cars here</h1>

      <div className="flex flex-col items-center p-10 min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded shadow-md mb-6"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Car Model</label>
            <input
              type="text"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Car Colour</label>
            <input
              type="text"
              value={carColour}
              onChange={(e) => setCarColour(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {/* This is the entered the data here */}
        <div className="w-full max-w-lg bg-white p-6 rounded shadow-md">
          <h1 className="text-center font-bold text-4xl pb-6 ">
            List of the cars entered
          </h1>
          {/* Display the list of cars */}
          <ul className="w-full max-w-md bg-gray-300 p-6  shadow-xl">
            {cars.map((car) => (
              <li key={car._id} className="flex justify-between border-b py-2">
                <span>{car.CarModel}</span>
                <span>{car.CarColour}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
