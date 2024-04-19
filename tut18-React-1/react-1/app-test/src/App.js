import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const one = 1;
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <h1 style={{ color: "blue" }}>This is a bule car</h1>
      <br />
      <img
        src={
          "https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds"
        }
      />
    </div>
  );
}

export default App;
