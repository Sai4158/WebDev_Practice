"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [laptops, SetLaptops] = useState([]);

  const productHandle = async () => {
    const response = await fetch("http://localhost:3000/api/Products/Laptops");
    const resdata = await response.json();

    console.log("checking for products", resdata);
    SetLaptops(resdata.laptopsData);
  };

  useEffect(() => {
    productHandle();
  }, []);

  return (
    <div>
      <h1>Laptop products </h1>
      <table border={1}>
        <thead>
          {/* table row */}
          <tr>
            {/* table heading */}
            <th>Laptop ID</th>
            <th>Title</th>
            <th>Model</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {laptops.map((item) => {
            return (
              <tr>
                <td key={item._id}>{item._id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default page;
