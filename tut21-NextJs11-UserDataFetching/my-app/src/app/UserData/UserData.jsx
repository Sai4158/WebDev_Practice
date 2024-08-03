import React from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

export const smapledata = async () => {
  const respone = await fetch(url);
  return respone.json;
};

// to show above smaple data fetch u have to make this function
const UserData = () => {
  return <div>UserData</div>;
};

export default UserData;
