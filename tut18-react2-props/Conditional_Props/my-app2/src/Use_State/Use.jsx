import React, { useState } from "react";

const Use = (props) => {
  const [city, setCity] = useState("Hyderbad");

  //conditional statments
  if (city === "Hyderbad") {
    setCity("banglore");
  }

  return <div>{city}</div>;
};

export default Use;
