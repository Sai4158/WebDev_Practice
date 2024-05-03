import React, { useState, useEffect } from "react";

const Use = (props) => {
  const [city, setCity] = useState("hyd");
  const [car, setCar] = useState("audi");

  //this is use effect -1
  useEffect(() => {
    if (city === "hyd") {
      setCity("banglore");
    } else {
      setCity("Philly");
    }
  });

  // use effect -2
  useEffect(() => {
    if (car === "audi") {
      setCar("bwm");
    } else {
      setCar("benz");
    }
  });

  //conditional statments
  return <div>{city}</div>;
};

export default Use;
