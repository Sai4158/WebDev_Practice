import React from "react";
import { useState } from "react";

const Short = () => {
  const [game, setGame] = useState(true);

  const Mygame = () => {
    return (
      <div>
        <h1>I like to play fornite</h1>
      </div>
    );
  };

  return (
    <div>
      {/* make sure the componets must be capital */}
      <div>{game && <Mygame />}</div>
    </div>
  );
};

export default Short;
