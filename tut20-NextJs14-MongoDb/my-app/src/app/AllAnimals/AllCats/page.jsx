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
      <h1>Cat Products</h1>
      <table border="5">
        <thead>
          <tr>
            <th>Cat ID.</th>
            <th>Cat Name.</th>
            <th>Cat Color.</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((item) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.catName}</td>
              <td>{item.catColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
