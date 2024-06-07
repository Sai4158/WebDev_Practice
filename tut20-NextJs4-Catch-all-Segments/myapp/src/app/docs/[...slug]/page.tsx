import React from "react";

const docs = ({ params }) => {
  if (params.slug.length === 2) {
    return <h1>views for docs {params.slug[0]}</h1>;
  } else if (params.slug.length === 1) {
    return <h1>views for docs {params.slug[0]}</h1>;
  }

  return (
    <div>
      <h1>docs home page </h1>
    </div>
  );
};

export default docs;
