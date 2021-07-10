import React from "react";

const EmployeeCard = ({ image, name, title, year }) => {
  return (
    <div className="text-center">
      {image}
      <h3 className="text-2xl font-mono">{name}</h3>
      <h4 className="text-lg font-semibold pb-1">{title}</h4>
      <p className="italic text-sm">Since {year}</p>
    </div>
  );
};

export default EmployeeCard;
