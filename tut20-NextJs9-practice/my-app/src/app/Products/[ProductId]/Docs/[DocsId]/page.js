import React from "react";

const page = ({ params }) => {
  return (
    <div>
      Product id <br />
      <h1> Your search is {params.DocsId}</h1>
    </div>
  );
};

export default page;
