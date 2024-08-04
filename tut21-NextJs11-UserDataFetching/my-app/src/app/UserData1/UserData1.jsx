import React from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

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
      {/* this is how we will display the data */}

      {/* This will give numbers or counting  */}
      {data.map((item, i) => {
        return (
          <>
            {/* hr will give line after each title */}
            {`${i}- ${item.title}`} <hr />
          </>
        );
      })}
    </div>
  );
};

export default userData1;
