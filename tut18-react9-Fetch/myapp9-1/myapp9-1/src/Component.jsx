import React, { useState } from "react";

const Component = () => {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
  };

  return (
    <div>
      <p>{quote || "Click the button"}</p>
      <button onClick={fetchQuote}>Click To Get Random Quote</button>
    </div>
  );
};

export default Component;
