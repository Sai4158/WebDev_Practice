import React from "react";

const Student = (props) => {
  return (
    <div className="bg-gray-500">
      <h1 className="w-20">
        Hello I am span <strong>{props.name4}</strong>, I like playing around
        with react
      </h1>
    </div>
  );
};

export default Student;
