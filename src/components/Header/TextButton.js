import React from "react";
import { Link } from "gatsby";

const TextButton = ({ text, icon, href }) => {
  return (
    <div className="flex flex-row flex-nowrap space-x-1 hover:text-yellow cursor-pointer">
      {icon}
      <Link to={href}>{text}</Link>
    </div>
  );
};

export default TextButton;
