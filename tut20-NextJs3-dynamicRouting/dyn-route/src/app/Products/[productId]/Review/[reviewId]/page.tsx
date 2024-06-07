import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <h1>
        Product {params.productId}
        <br />
        Review is
        {params.reviewId}
      </h1>
    </div>
  );
};

export default page;
