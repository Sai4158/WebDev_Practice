import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Thicker() {
  const element = (
    <div>
      <h1>hello world</h1>

      <h1 style={{ color: "red" }}>it is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
  root.render(element);
}

//this is set the interval time to update the date
setInterval(Thicker, 1000);

function App() {
  return (
    <div classname="root">{/*this will be updated the tick function*/}</div>
  );
}

export default App;
