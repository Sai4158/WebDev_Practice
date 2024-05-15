import React, { useEffect } from "react";
import { useState } from "react";

//get the api link
const userDetails = "https://jsonplaceholder.typicode.com/posts";

const UserPage = () => {
  //use state to store data
  const [user, setUser] = useState([]);

  //use asnyc to fetch data and then store it into user
  const userHandle = async () => {
    const response = await fetch(userDetails);
    const newData = await response.json();
    setUser(newData);
  };

  //this use effect will make sure it will only run once
  //use effect will stop reapted printing
  useEffect(() => {
    console.log(userHandle());
  }, []);

  //the display using the map function
  return (
    <div>
      {user.map((item) => {
        return (
          <div className="userSection" style={{ color: "red" }}>
            <h1>{item.title}</h1>

            <div style={{ color: "blue" }}>
              <h2>{item.body}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserPage;
