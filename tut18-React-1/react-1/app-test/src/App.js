import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "blue" }}>This is a blue car</h1>
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds"
          alt=" Venom F5"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div>
        <ul>
          <li>car 1</li>
          <li>car 2</li>
          <li>car 3</li>
          <li>car 4</li>
        </ul>
      </div>
    </>
  );
}

export default App;
