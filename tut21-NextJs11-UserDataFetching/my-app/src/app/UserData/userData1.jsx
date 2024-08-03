import React from "react";

const url = "https://jsonplaceholder.typicode.com/albums";

// then make sure to use export
export const FreeData = async () => {
  const response = await fetch(url);
  return response.json();
};

// make sure to use async function
const userData1 = async () => {
  // make sure to use await here
  const data = await FreeData();

  return (
    <div>
      {/* this is how we will display the data  */}
      {data.map((item) => {
        return <>{item.id};</>;
      })}
    </div>
  );
};

export default userData1;
