import React from "react";
import Service from "../components/Service";
import { StaticImage } from "gatsby-plugin-image";

const UndergroundUtilities = () => {
  return (
    <Service
      title="Underground Utilities"
      description="Successfully executing the underground utilities of a project is vital. Our services include pipeline installation, pipe procurement and trenching. We specialize in storm, sewer and water drainage as well as drainage utility installation and repair."
      images={[
        <StaticImage
          src="../images/023.jpg"
          placeholder="blurred"
          alt="Underground Utilities 1"
          className="object-cover w-full"
        />,
        <StaticImage
          src="../images/024.jpg"
          placeholder="blurred"
          alt="Underground Utilities 2"
          className="object-cover w-full"
        />,
        <StaticImage
          src="../images/005.jpg"
          placeholder="blurred"
          alt="Underground Utilities 3"
          className="object-cover w-full"
        />,
        <StaticImage
          src="../images/011.jpg"
          placeholder="blurred"
          alt="Underground Utilities 4"
          className="object-cover w-full"
        />,
      ]}
    />
  );
};

export default UndergroundUtilities;
