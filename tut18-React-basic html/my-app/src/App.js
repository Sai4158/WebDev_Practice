import logo from "./logo.svg";
import "./App.css";

//a
const name = "sai";
const age = 19;

//b
const items = ["apple", "banana", "orange", "grapes"];

function App() {
  //this is how to use styles in react
  return (
    <div>
      <h1 style={{ color: "red" }}>Hello I am Sai</h1>; 
      
      []
      /**a**/
      <p>
        Hello {name}, ur age is {age}
      </p>



      /**b**/
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
