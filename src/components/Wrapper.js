import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
      <div className="max-w-6xl mx-auto h-full">{children}</div>
    </div>
  );
};

export default Wrapper;
