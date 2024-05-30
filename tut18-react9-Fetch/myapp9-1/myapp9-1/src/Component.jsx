import React from "react";
import { useState, useEffect } from "react";

const Component = () => {
  //using 2 use states
  const [quote, setQuote] = useState("");
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    //function to fetch random quote
    const fectchquote = async () => {
      setFetching(true);
      const respone = await fetch("https://api.quotable.io/random");
      const data = await respone.json;

      setQuote(data.content);
      setFetching(false);
    };

    if (fetching) {
      fectchquote();
    }

    return () => {
      setQuote("");
    };
  }, [fetching]);

  return (
    <div>
      <p>{quote || "Click the button to load a quote!"}</p>
      <button onClick={() => setFetching(true)}>Get Random Quote</button>
    </div>
  );
};

export default Component;
