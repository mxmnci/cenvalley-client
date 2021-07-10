import React from "react";
import Service from "../components/Service";
import { StaticImage } from "gatsby-plugin-image";

const AsphaltPaving = () => {
  return (
    <Service
      title="Commerical & Residential Construction"
      description="Your parking lot or driveway is the first impression that visitors have of your business or home. A well-maintained surface is a sound investment in the curb appeal of your property. We are experts in all areas of commercial and residential asphalt paving, asphalt patching, seal coating, resurfacing, and new construction. Our professional estimators can evaluate your needs and provide you with guidance and a proposal to meet your needs."
      images={[
        <StaticImage
          src="../images/007.jpg"
          placeholder="blurred"
          alt="Commercial and Residential Construction 1"
          className="object-cover w-full"
        />,
        <StaticImage
          src="../images/014.jpg"
          placeholder="blurred"
          alt="Commercial and Residential Construction 2"
          className="object-cover w-full"
        />,
        <StaticImage
          src="../images/026.jpg"
          placeholder="blurred"
          alt="Commercial and Residential Construction 3"
          className="object-cover w-full"
        />,
      ]}
    />
  );
};

export default AsphaltPaving;
