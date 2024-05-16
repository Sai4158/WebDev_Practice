import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Comp/Home";
import "./App.css";
import About from "./About";
import Four1 from "./Comp/Four1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Four1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
