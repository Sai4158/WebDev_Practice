"use client";
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  const [carModel, setCarModel] = useState("");
  const [carColour, setCarColour] = useState("");
  const [cars, setCars] = useState([]);

  // Fetch car data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/Cars");
      const data = await res.json();
      setCars(data);
    };
    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/Cars", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ CarModel: carModel, CarColour: carColour }),
    });
    setCarModel("");
    setCarColour("");
    const res = await fetch("/api/Cars");
    const updatedCars = await res.json();
    setCars(updatedCars);
  };

  // // If user is not logged in, show login button
  // if (!session) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-screen">
  //       <h1 className="text-3xl font-bold mb-6">
  //         Please Login to Submit Car Info
  //       </h1>
  //       <button
  //         onClick={() => signIn("google")}
  //         className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
  //       >
  //         Sign in with Google
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <div className="flex flex-col items-center p-10 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Enter Your Cars Here</h1>

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

      <div className="w-full max-w-lg bg-white p-6 rounded shadow-md">
        <h1 className="text-center font-bold text-4xl pb-6">Cars Entered</h1>
        <ul className="w-full max-w-md bg-gray-300 p-6 shadow-xl">
          {cars.map((car) => (
            <li key={car._id} className="flex justify-between border-b py-2">
              <span>{car.CarModel}</span>
              <span>{car.CarColour}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full text-center pt-5">
        <Link
          href="/api/Cars"
          target="_blank"
          className="px-10 py-3 bg-blue-300"
        >
          Go to API Page
        </Link>
      </div>

      {/* <button
        onClick={() => signOut()}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button> */}
    </div>
  );
}
