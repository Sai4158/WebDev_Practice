import "./App.css";
import Use from "./Use";
import First from "./container/first";
import Fourth from "./container/fourth";
import Second from "./container/second";
import Third from "./container/third";

const user = {
  name: "sai",
  age: "213",
  phone: 2342323,
};

const mycar = {
  model: "crv",
  make: "honda",
  year: 2018,
};

function App() {
  return (
    <div className="App">
      {user.name} and {user.age}
      <First car={mycar} />
      <Second name="abhi" />
      <Third car={mycar} />
      <Fourth name="jhon" />
      <Use />
    </div>
  );
}

export default App;
