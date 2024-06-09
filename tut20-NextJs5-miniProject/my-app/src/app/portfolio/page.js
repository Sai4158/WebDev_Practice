import React from "react";

const Ifram = () => {
  return (
    <div
      // center the the whole iframe in the middle
      className="flex justify-center items-center h-screen"
    >
      <iframe
        className="w-[80%] h-[80vh] "
        src="https://sai4158.github.io/"
        frameborder="2"
      ></iframe>
    </div>
  );
};

export default Ifram;
