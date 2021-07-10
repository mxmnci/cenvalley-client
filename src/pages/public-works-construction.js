import React from "react";
import Service from "../components/Service";
import { StaticImage } from "gatsby-plugin-image";

const PublicWorksConstruction = () => {
  return (
    <Service
      title="Public Works Construction"
      description="We perform a large quantity of work for our regional public agencies and municipal utilities and take great pride in the work we have done for our Northern California communities.  We have the engineering knowledge and skills to deal with the complexities and challenges of public works projects.  We know these projects are funded by taxpayers and put a great deal of time and effort into ensuring that our bids are fair and competitive."
      images={[
        <StaticImage
          src="../images/002.jpg"
          placeholder="blurred"
          alt="Public Works Construction 1"
          className="object-cover w-full"
        />,
        <StaticImage
          src="../images/030.jpg"
          placeholder="blurred"
          alt="Public Works Construction 2"
          className="object-cover w-full"
        />,
      ]}
    />
  );
};

export default PublicWorksConstruction;
