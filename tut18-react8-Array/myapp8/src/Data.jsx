import React from "react";
import { user } from "./data1";

const Data = () => {
  console.log(user);
  return (
    <div>
      {user.map((item) => {
        return (
          <div style={{ border: "2px red solid" }}>
            <div>{item.name}</div>
            <div>{item.email}</div>
            <div>{item.address}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
