import "./App.css";
import First from "./container/first";
import Fourth from "./container/fourth";
import Second from "./container/second";
import Third from "./container/third";

const user = {
  name: "sai",
  age: "213",
  phone: 2342323,
};

function App() {
  return (
    <div className="App">
      {user.name} and {user.age}
      <First name="Sai" />
      <Second name="abhi" />
      <Third name="pran" />
      <Fourth name="tim" />
    </div>
  );
}

export default App;
