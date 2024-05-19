import React from "react";
import { useState } from "react";

const Short = () => {
  const [game, setGame] = useState(true);
  const [name, setName] = useState(false);
  const [test, setTest] = useState(false);
  const Mygame = () => {
    return (
      <div>
        <h1>I like to play fornite</h1>
      </div>
    );
  };

  const Myname = () => {
    return (
      <div>
        <h2>Hello my name is sai</h2>
      </div>
    );
  };

  return (
    <div>
      {/* make sure the componetsm ust be capital */}

      <div>{game && <Mygame />}</div>

      <div>{name && <Myname />}</div>
    </div>
  );
};

export default Short;
