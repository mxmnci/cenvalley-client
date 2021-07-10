import React from "react";

const BackgroundImage = ({ className, image, filter, children }) => {
  return (
    <div className={`relative ${className}`}>
      {image}
      <div
        className="absolute left-0 top-0 w-full h-full z-0"
        style={{
          backgroundColor: filter,
        }}
      />
      {children}
    </div>
  );
};

export default BackgroundImage;

export const BackgroundImageClasses =
  "override-absolute left-0 top-0 w-full h-full z-0";
