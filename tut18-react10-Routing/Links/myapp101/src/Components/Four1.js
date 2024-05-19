import React, { useState } from "react";

const Four1 = () => {
  const [state, setState] = useState(true);

  return (
    <div>
      {state ? "this is a error please try again" : "This error will be fixed"}
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for could not be found.</p>
    </div>
  );
};

export default Four1;
