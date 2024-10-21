import React from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

export const sampleData = async () => {
  const response = await fetch(url);
  return response.json();
};

// to show above sample data fetch you have to make this function
const UserData = async () => {
  const data1 = await sampleData();

  console.log("Data: ", data1);
  return (
    <div>
      {data1.map((item) => {
        return (
          <>
            {item.id} <br />
            {item.title}
          </>
        );
      })}
    </div>
  );
};

export default UserData;
