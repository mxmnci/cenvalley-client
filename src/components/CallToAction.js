import React from "react";
import Button from "./Button";

const CallToAction = ({
  header,
  subheader,
  buttonMessage,
  buttonLink,
  buttonIcon,
  buttonLeft = false,
}) => {
  return (
    <div
      className={`h-full flex flex-col justify-between items-center ${
        buttonLeft ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        className={`flex flex-col text-center pb-4 lg:pb-0 ${
          buttonLeft ? "lg:text-right" : "lg:text-left"
        }`}
      >
        <h2 className="text-2xl font-mono">{header}</h2>
        <h3 className="text-lg">{subheader}</h3>
      </div>
      <Button
        variant="primary"
        size="2xl"
        href={buttonLink}
        icon={buttonIcon}
        message={buttonMessage}
      />
    </div>
  );
};

export default CallToAction;
