// import React from "react";

// //using the params then using params and defing it to string will take aways the type script error

// const page = ({ params }: { params: { productId: String } }) => {
//   return (
//     <div>
//       <h1>Details about the product {params.productId}</h1>
//     </div>
//   );
// };

// export default page;

//practice

import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  return (
    <div>
      <h1>details about the product : {params.productId}</h1>
    </div>
  );
};

export default page;
