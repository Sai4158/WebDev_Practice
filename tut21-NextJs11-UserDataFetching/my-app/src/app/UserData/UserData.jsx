import React from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

export const smapledata = async () => {
  const respone = await fetch(url);
  return respone.json;
};

// to show above smaple data fetch u have to make this function
const UserData = async () => {
  const data1 = await smapledata();

  console.log("Data: ", data1);
  return (
    <div>
      {data1.map((item) => {
        return <>{item.id}</>;
      })}
    </div>
  );
};

export default UserData;
