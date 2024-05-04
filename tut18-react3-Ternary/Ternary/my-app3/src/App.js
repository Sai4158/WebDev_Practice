import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //use state
  const [sampleCondition, setCondition] = useState(true);
  sampleCondition ? "this is true Statment" : "I am false";

  return <div></div>;
}

export default App;
