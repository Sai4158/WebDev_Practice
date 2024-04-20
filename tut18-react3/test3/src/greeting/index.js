import React from "react";

function Greeting({ name, age }) {
  return (
    <div>
      <h1>
        Hello, {name}! Your age is {age}
      </h1>
      <h2>Welcome!</h2>
    </div>
  );
}

export default Greeting;
