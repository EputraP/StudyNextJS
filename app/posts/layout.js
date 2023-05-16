import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <div>Navigate to top</div>
    </div>
  );
};

export default layout;
