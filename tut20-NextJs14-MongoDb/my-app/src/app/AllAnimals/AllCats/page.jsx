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
      <h1>All cats data here</h1>
      <br />
      <br />
      <table
        style={{
          border: "1px solid black",
          width: "50%",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black" }}>Cat ID.</th>
            <th style={{ border: "1px solid black" }}>Cat Name.</th>
            <th style={{ border: "1px solid black" }}>Cat Color.</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((item) => (
            <tr key={item._id}>
              <td style={{ border: "1px solid black" }}>{item._id}</td>
              <td style={{ border: "1px solid black" }}>{item.catName}</td>
              <td style={{ border: "1px solid black" }}>{item.catColor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
