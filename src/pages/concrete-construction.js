import React from "react";
import Service from "../components/Service";
import { StaticImage } from "gatsby-plugin-image";

const ConcreteConstruction = () => {
  return (
    <Service
      title="Concrete Construction"
      description="Central Valley Engineering & Asphalt provides concrete repair, replacement and installations for homeowners, business owners, municipalities and the industrial sector. We employ the best concrete craftsmen and skilled craft workers ensuring that each phase of the project is handled with expertise. We provide our customers with the highest quality construction-safely, on time and at a competitive price."
      images={[
        <StaticImage
          src="../images/008.jpg"
          placeholder="blurred"
          alt="Concrete Construction 1"
          className="object-cover w-full"
        />,
        <StaticImage
          src="../images/021.jpg"
          placeholder="blurred"
          alt="Concrete Construction 3"
          className="object-cover w-full"
        />,
      ]}
    />
  );
};

export default ConcreteConstruction;
