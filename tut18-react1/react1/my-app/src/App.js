import Apple from "./apple";
import Sample from "./Nested Components/Sample";
import "./App.css";

let a = "apple";
let b = "banana";

function App() {
  return (
    <div>
      <Apple />
      <Sample />

      <h1>
        I like {a}, {b}
      </h1>
    </div>
  );
}

export default App;
