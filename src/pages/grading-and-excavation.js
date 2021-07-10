import React from "react";
import Service from "../components/Service";
import { StaticImage } from "gatsby-plugin-image";

const GradingAndExcavation = () => {
  return (
    <Service
      title="Grading & Excavation"
      description="Site preparation is an essential project step and there can be a variety of challenging site conditions. Our experienced team is fully equipped with the tools and machinery needed to tackle your site.  Whether you need grading or excavation, our services include space clearing, concrete and asphalt preparation, drainage systems and repairs, trenching, compacting, driveway and road preparation, leveling, ditch work and culverts."
      images={[
        <StaticImage
          src="../images/017.jpg"
          placeholder="blurred"
          alt="Grading and Excavation 1"
          className="object-cover w-full"
        />,
        <StaticImage
          src="../images/018.jpg"
          placeholder="blurred"
          alt="Grading and Excavation 2"
          className="object-cover w-full"
        />,
      ]}
    />
  );
};

export default GradingAndExcavation;
