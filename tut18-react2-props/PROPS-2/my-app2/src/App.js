import React from "react";
import "./App.css";
import A1 from "./Component/A1";

const ex = {
  car: "audi",
  bike: "ktm",
  boat: "lambo",
};

function App() {
  return (
    <div>
      <A1 car={ex} />
    </div>
  );
}

export default App;
