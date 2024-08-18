"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch("http://localhost:3000/api/Cats");
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <h1 className="text-center m-8">All cats data here</h1>

      <div className="flex justify-center items-center">
        <table className=" border border-black w-[50%]">
          <thead>
            <tr>
              <th className="border border-black p-2">Cat ID.</th>
              <th className="border border-black p-2">Cat Name.</th>
              <th className="border border-black p-2">Cat Color.</th>
            </tr>
          </thead>
          <tbody>
            {cats.map((item) => (
              <tr key={item._id}>
                <td className="border border-black p-2">{item._id}</td>
                <td className="border border-black p-2">{item.catName}</td>
                <td className="border border-black p-2">{item.catColor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
