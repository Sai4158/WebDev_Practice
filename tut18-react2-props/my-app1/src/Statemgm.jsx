import React from "react";

import { useState } from "react";

const Statemgm = () => {
  const [city, setCity] = useState("hyd");

  setCity("philly");

  console.log(city);
  return <div>use state</div>;
};

export default Statemgm;
