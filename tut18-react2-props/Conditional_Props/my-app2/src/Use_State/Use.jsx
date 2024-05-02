import React, { useState, useEffect } from "react";

const Use = (props) => {
  const [city, setCity] = useState("hyd");

  //this is use effect
  useEffect(() => {
    if (city === "hyd") {
      setCity("banglore");
    } else {
      setCity("Philly");
    }
  });

  //conditional statments
  return <div>{city}</div>;
};

export default Use;
