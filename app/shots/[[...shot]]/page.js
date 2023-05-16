import React from "react";
// optional catch all segment

const page = ({ params }) => {
  return <div>shot{params.shot}w</div>;
};

export default page;
