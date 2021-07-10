import React from "react";

const TextButton = ({ text, icon, href }) => {
  return (
    <div className="flex flex-row flex-nowrap space-x-1 hover:text-yellow cursor-pointer">
      {icon}
      <a href={href}>{text}</a>
    </div>
  );
};

export default TextButton;
