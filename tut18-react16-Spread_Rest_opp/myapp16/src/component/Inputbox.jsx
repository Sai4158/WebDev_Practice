import React, { useState } from "react";

const InputBox = () => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);

  const add = () => {
    return parseInt(state1) + parseInt(state2) + parseInt(state3);
  };

  const handleState1Change = (e) => {
    setState1(e.target.value);
  };

  const handleState2Change = (e) => {
    setState2(e.target.value);
  };

  const handleState3Change = (e) => {
    setState3(e.target.value);
  };
  const click = () => {};

  return (
    <div>
      <input
        value={state1}
        type="text"
        placeholder="enter text here"
        onChange={handleState1Change}
      />

      <input
        value={state2}
        type="text"
        placeholder="enter text here"
        onChange={handleState2Change}
      />
      <input
        value={state3}
        type="text"
        placeholder="enter text here"
        onChange={handleState3Change}
      />

      <button type="submit" onClick={click}>
        Submit
      </button>

      <h2>{add()}</h2>
    </div>
  );
};

export default InputBox;
