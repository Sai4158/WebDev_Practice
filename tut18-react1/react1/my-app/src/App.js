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

      <div className="container">
        <p>this is paragraph</p>
        <img className="img2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsEFTJyiprf8CPYc_WaV6T97zrPVleDAMtnbkdb9kEA&s"
          alt=""
        />
        <img className="img1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsEFTJyiprf8CPYc_WaV6T97zrPVleDAMtnbkdb9kEA&s"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
