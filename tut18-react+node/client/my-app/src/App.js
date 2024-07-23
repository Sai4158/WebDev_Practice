import { response } from "express";
import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [backendData, setbackendData] = useState([{}]);

  // so here we are getting the data form backend and showing it on the screen
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setbackendData(data);
      });
  }, []);

  return <div>App</div>;
};

export default App;
