import React from "react";
import Layout from "../components/Layout";
import Heading from "../components/Heading";
import Wrapper from "../components/Wrapper";
import BackgroundImage, {
  BackgroundImageClasses,
} from "../components/BackgroundImage";
import { StaticImage } from "gatsby-plugin-image";
import EmployeeCard from "../components/EmployeeCard";
import SlideShow from "../components/SlideShow";
import Seo from "../components/SEO";

const AboutUs = () => {
  return (
    <Layout>
      <Seo title="About Us" />
      <article>
        <section>
          <BackgroundImage
            image={
              <StaticImage
                src="../images/028.jpg"
                placeholder="blurred"
                alt="Our Story"
                className={BackgroundImageClasses}
              />
            }
            filter="#252525DD"
          >
            <Wrapper>
              <div className="relative flex flex-col w-full text-center items-center z-10 py-24">
                <Heading
                  heading="Our Story"
                  subheading="What makes us so great"
                />
                <p className="text-white text-left pt-4 text-lg">
                  Established in 2000 by good friends, Warren Holt and Bob
                  Leppek, Central Valley Engineering & Asphalt has become a
                  regional construction leader. As a State Board Licensed
                  Professional Engineering Contractor, we hold the highest
                  standard of competence and assurance of quality. <br />
                  <br /> We specialize in asphalt paving, concrete construction,
                  grading, and underground utilities. Our projects range from
                  small driveways to large municipal roadway reconstruction
                  projects. We have a broad range of customers including public,
                  military, commercial, industrial and private construction with
                  a proven track record of customer satisfaction. <br />
                  <br /> We exist to build smooth, long-lasting surfaces that
                  improve the curb appeal and value of your property while
                  adding the durability and practicality your surfaces need.
                  With our own equipment, we are committed to delivering high
                  quality asphalt or concrete solutions at the best rates.{" "}
                  <br />
                  <br />
                  We believe in creating and maintaining long term partnerships
                  with our customers, vendors and our community. We aim to earn
                  and retain their trust year after year through excellent
                  service from a team of talented hard-working individuals. Our
                  company growth has brought life to hundreds of shopping
                  centers, homes, city streets and more. Much of our work comes
                  from the recommendation of our customers who spread their
                  satisfaction to others. These relationships with customers
                  support our pledge and dedication to our work.
                </p>
              </div>
            </Wrapper>
          </BackgroundImage>
        </section>
        <section className="py-16">
          <Wrapper>
            <div className="flex flex-col items-center text-center">
              <Heading
                heading="Our Team"
                subheading="Meet the people that make our business thrive"
              />
              <div className="grid md:grid-cols-4 grid-cols-2 w-full text-white pt-8 gap-10">
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Warren-Holt.jpg"
                      alt="Warren Holt"
                    />
                  }
                  name="Warren Holt"
                  title="President"
                  year={2000}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Bob-Leppek.jpg"
                      alt="Bob Leppek"
                    />
                  }
                  name="Bob Leppek"
                  title="Vice President"
                  year={2000}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/James-Castle.jpg"
                      alt="James Castle"
                    />
                  }
                  name="James Castle"
                  title="Chief Financial Officer"
                  year={2005}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/James-Wagner.jpg"
                      alt="James Wagner"
                    />
                  }
                  name="James Wagner"
                  title="Controller"
                  year={2007}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Jamie-Gruzas.jpg"
                      alt="Jamie Gruzas"
                    />
                  }
                  name="Jamie Gruzas"
                  title="Office Manager"
                  year={2003}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Lisa-Monciardini.jpg"
                      alt="Lisa Monciardini"
                    />
                  }
                  name="Lisa Monciardini"
                  title="Accounts Payable"
                  year={2020}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Paul-Aguirre.jpg"
                      alt="Paul Aguirre"
                    />
                  }
                  name="Paul Aguirre"
                  title="Estimator"
                  year={2001}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Phil-Buffington.jpg"
                      alt="Phil Buffington"
                    />
                  }
                  name="Phil Buffington"
                  title="Estimator"
                  year={2016}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Payton-Thomas.jpg"
                      alt="Payton Thomas"
                    />
                  }
                  name="Payton Thomas"
                  title="Estimator"
                  year={2021}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Shannon-ONeill.jpg"
                      alt="Shannon O'Neill"
                    />
                  }
                  name="Shannon O'Neill"
                  title="Project Manager"
                  year={2006}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Chris-Miller.jpg"
                      alt="Chris Miller"
                    />
                  }
                  name="Chris Miller"
                  title="Project Engineer"
                  year={2020}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Rich-Paul.jpg"
                      alt="Rich Paul"
                    />
                  }
                  name="Rich Paul"
                  title="Dispatcher"
                  year={2016}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Kevin-Spraggins.jpg"
                      alt="Kevin Spraggins"
                    />
                  }
                  name="Kevin Spraggins"
                  title="Equipment Manager"
                  year={2012}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Mark-Reitz.jpg"
                      alt="Mark Reitz"
                    />
                  }
                  name="Mark Reitz"
                  title="Shop Foreman"
                  year={2005}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Paul-Gardiner.jpg"
                      alt="Paul Gardiner"
                    />
                  }
                  name="Paul Gardiner"
                  title="Superintendent"
                  year={2000}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Paul-Medich.jpg"
                      alt="Paul Medich"
                    />
                  }
                  name="Paul Medich"
                  title="Concrete Superintendent"
                  year={2005}
                />
              </div>
            </div>
          </Wrapper>
        </section>
        <section>
          <BackgroundImage
            image={
              <StaticImage
                src="../images/024.jpg"
                placeholder="blurred"
                alt="Our certifications"
                className={BackgroundImageClasses}
              />
            }
            filter="#252525DD"
          >
            <Wrapper>
              <div className="relative flex flex-col w-full text-center items-center z-10 py-16">
                <Heading
                  heading="Our Certifications"
                  subheading="We've put in the work"
                />
                <div className="flex flex-col md:flex-row space-evenly text-white font-semibold w-full space-y-6">
                  <a
                    className="flex-grow"
                    href="https://goldshovelstandard.org/"
                  >
                    <StaticImage
                      src="../images/GSS.png"
                      placeholder="blurred"
                      alt="Gold Shovel Standard"
                      height={250}
                      width={250}
                      layout="constrained"
                    />
                    <p>Gold Shovel Standard Certified</p>
                  </a>
                  <a
                    className="flex-grow"
                    href="https://www.isnetworld.com/en/"
                  >
                    <StaticImage
                      src="../images/ISN.png"
                      placeholder="blurred"
                      alt="ISNetworld"
                      height={250}
                      width={250}
                      layout="constrained"
                    />
                    <p>ISNetworld Member Contractor</p>
                  </a>
                </div>
              </div>
            </Wrapper>
          </BackgroundImage>
        </section>
        <section className="py-16">
          <Wrapper>
            <div className="flex flex-col items-center">
              <Heading
                heading="Our Crew"
                subheading="Meet the people that get the job done"
              />
              <SlideShow
                height={600}
                images={[
                  <StaticImage
                    src="../images/001.jpg"
                    placeholder="blurred"
                    alt=""
                    className="object-contain"
                  />,
                  <StaticImage
                    src="../images/015.jpg"
                    placeholder="blurred"
                    alt=""
                    className="object-contain"
                  />,
                  <StaticImage
                    src="../images/024.jpg"
                    placeholder="blurred"
                    alt=""
                    className="object-contain"
                  />,
                ]}
              />
            </div>
          </Wrapper>
        </section>
      </article>
    </Layout>
  );
};

export default AboutUs;
