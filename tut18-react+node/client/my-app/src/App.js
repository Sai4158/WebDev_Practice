import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [backendData, setBackendData] = useState([{}]);

  // so here we are getting the data form backend and showing it on the screen
  // first it is getting it form the fetch prot 5000
  // then it getting response as json
  //then it is storing the data into the setbackend usestate

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      {/* Display the users */}
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => <p key={i}>{user}</p>)
      )}
    </div>
  );
};

export default App;
