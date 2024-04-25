import Apple from "./apple";
import Sample from "./Nested Components/Sample";

function App() {
  return (
    <div className="App">
      {/* Use the component with a capital letter */}
      <Apple />
      <Sample />
    </div>
  );
}

export default App;
