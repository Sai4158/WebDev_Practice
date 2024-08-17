"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [laptops, setLaptops] = useState([]);

  const productHandle = async () => {
    const response = await fetch("http://localhost:3000/api/Products/Laptops");
    const resdata = await response.json();

    console.log("checking for products", resdata);
    setLaptops(resdata.laptopsData);
  };

  useEffect(() => {
    productHandle();
  }, []);

  return (
    <div>
      <h1>Laptop Products</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Laptop ID</th>
            <th>Title</th>
            <th>Model</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {laptops.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.laptopmodel}</td>
              <td>{item.laptopprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
