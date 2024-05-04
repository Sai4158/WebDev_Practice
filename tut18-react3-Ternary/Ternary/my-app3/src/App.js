import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import First from "./Component/First";
import Second from "./Component/Second";
import Third from "./Component/Third";
import Fourth from "./Component/Fourth";

function App() {
  //use state
  const [sampleCondition, setCondition] = useState(false);

  return (
    <div>
      {sampleCondition ? <First /> : <Second />}

      <div>{sampleCondition ? <Third /> : <Fourth />}</div>
    </div>
  );
}

export default App;
