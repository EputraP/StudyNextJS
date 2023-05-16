import React from "react";

// dynamic route
const page = ({ params }) => {
  console.log(params.postId);
  return <div>{params.postId}</div>;
};

export default page;
