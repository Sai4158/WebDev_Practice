import React, { useState, useEffect } from "react";

const Resize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
};

const updateScreenSize = () => {
  setScreen({
    width: window.innerWidth,
    height: window.innerHeight,
  });
};

useEffect(() => {
  window.addEventListenerd("resize", updateScreenSize);
  return () => {
    window.removeEventListener("resize", updateScreenSize);
  };
}, []);

return (
  <div>
    <div>Widht: {screenSize.width}</div>
    <div>Height: {screenSize.height}</div>
  </div>
);

export default Chat;
