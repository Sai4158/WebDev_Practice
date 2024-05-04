import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import First from "./Component/First";
import Second from "./Component/Second";

function App() {
  //use state
  const [sampleCondition, setCondition] = useState(false);

  return <div>{sampleCondition ? <First /> : <Second />}</div>;
}

export default App;
