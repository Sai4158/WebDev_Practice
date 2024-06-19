import React, { Children } from "react";

const layout = ({ Children }) => {
  return (
    <div>
      {Children}
      <h2>Features product</h2>
    </div>
  );
};

export default layout;
