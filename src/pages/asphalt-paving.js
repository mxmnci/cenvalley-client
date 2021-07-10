import React from "react";
import Service from "../components/Service";
import { StaticImage } from "gatsby-plugin-image";

const AsphaltPaving = () => {
  return (
    <Service
      title="Asphalt Paving"
      description="Specializing in all types of asphalt paving jobs, we have the equipment and the expertise to execute your project in a professional and affordable manner. Our rates are competitive, and we do it all with the goal of meeting your expectations.  We work as quickly as possible without compromising on the quality of the finished product. With our project, you will get the best return on investment out of your parking lot, driveway and other pavements. At Central Valley Engineering & Asphalt, we believe in doing it right the first time around."
      images={[
        <StaticImage
          src="../images/009.jpg"
          placeholder="blurred"
          alt="Asphalt Paving 1"
          className="object-cover w-full"
        />,
        <StaticImage
          src="../images/026.jpg"
          placeholder="blurred"
          alt="Asphalt Paving 2"
          className="object-cover w-full"
        />,
        <StaticImage
          src="../images/028.jpg"
          placeholder="blurred"
          alt="Asphalt Paving 3"
          className="object-cover w-full"
        />,
      ]}
    />
  );
};

export default AsphaltPaving;
