import React from "react";
import usePathName from "../util/usePathName";

const Navigation = ({ elements }) => {
  const pathName = usePathName();

  return (
    <div className="flex flex-col">
      {elements.map((element) => (
        <a
          key={element.link}
          className={`w-full text-left p-3 transition duration-200 ${
            pathName === element.link
              ? "bg-primary text-yellow"
              : "bg-secondary text-white hover:bg-primary"
          }`}
          href={element.link}
        >
          {element.name}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
