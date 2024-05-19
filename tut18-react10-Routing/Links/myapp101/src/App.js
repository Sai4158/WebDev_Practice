import "./App.css";

//must import these packages
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import About from "./Components/About";
import Four1 from "./Components/Four1";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/About" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Four1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
