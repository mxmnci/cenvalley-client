import React from "react";
import { BackgroundImageClasses } from "../components/BackgroundImage";
import { StaticImage } from "gatsby-plugin-image";

const Services = [
  {
    name: "Asphalt Paving",
    description:
      "Our asphalt contractors have decades of experience and a reputation for quality and professionalism.",
    image: (
      <StaticImage
        src="../images/003.jpg"
        placeholder="blurred"
        alt="Asphalt Paving"
        className={`${BackgroundImageClasses} rounded`}
      />
    ),
    link: "/asphalt-paving/",
  },
  {
    name: "Commercial & Residential Construction",
    description:
      "Durable and appealing asphalt paving solutions for your commercial or residential needs.",
    image: (
      <StaticImage
        src="../images/007.jpg"
        placeholder="blurred"
        alt="Commercial & Residential Construction"
        className={`${BackgroundImageClasses} rounded`}
      />
    ),
    link: "/commercial-and-residential-construction/",
  },
  {
    name: "Concrete Construction",
    description:
      "We employ the best concrete craftsmen ensuring that each phase of the project is handled with expertise.",
    image: (
      <StaticImage
        src="../images/008.jpg"
        placeholder="blurred"
        alt="Concrete Construction"
        className={`${BackgroundImageClasses} rounded`}
      />
    ),
    link: "/concrete-construction/",
  },
  {
    name: "Grading & Excavation",
    description:
      "Our experienced team is fully equipped with the tools and machinery needed to tackle your site.",
    image: (
      <StaticImage
        src="../images/004.jpg"
        placeholder="blurred"
        alt="Grading & Excavation"
        className={`${BackgroundImageClasses} rounded`}
      />
    ),
    link: "/grading-and-excavation/",
  },
  {
    name: "Public Works Construction",
    description:
      "We work with a wide range of municipalities to bring quality construction to your city, county or state.",
    image: (
      <StaticImage
        src="../images/006.jpg"
        placeholder="blurred"
        alt="Public Works Construction"
        className={`${BackgroundImageClasses} rounded`}
      />
    ),
    link: "/public-works-construction/",
  },
  {
    name: "Underground Utilities",
    description:
      "The success of your project depends on knowing what is going on underground.",
    image: (
      <StaticImage
        src="../images/005.jpg"
        placeholder="blurred"
        alt="Underground Utilities"
        className={`${BackgroundImageClasses} rounded`}
      />
    ),
    link: "/underground-utilities/",
  },
];

export default Services;
