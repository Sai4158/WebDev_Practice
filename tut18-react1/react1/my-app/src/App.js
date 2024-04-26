import Apple from "./apple";
import Sample from "./Nested Components/Sample";
import "./App.css";
import "./sample.css";

function App() {
  return (
    <div className="App">
      {/* Use the component with a capital letter */}
      <Apple />
      <Sample />

      <h1>this is sample css file </h1>
    </div>
  );
}

export default App;
