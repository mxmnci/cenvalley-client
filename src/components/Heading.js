import React from "react";
import Separator from "./Separator";

const Heading = ({ heading, subheading, separator = true }) => {
  return (
    <>
      <h4 className="text-yellow uppercase font-semibold text-base mb-2">
        {subheading}
      </h4>
      <h2 className="text-white font-mono text-4xl">{heading}</h2>
      {separator && <Separator />}
    </>
  );
};

export default Heading;
