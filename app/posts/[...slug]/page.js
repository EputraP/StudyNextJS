import React from "react";

//catch all segment
const page = ({ params }) => {
  return <div>slug{params.slug}</div>;
};

export default page;
