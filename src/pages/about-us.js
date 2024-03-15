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
              <div className="relative z-10 flex flex-col items-center w-full py-24 text-center">
                <Heading
                  heading="Our Story"
                  subheading="What makes us so great"
                />
                <p className="pt-4 text-lg text-left text-white">
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
              <div className="grid w-full grid-cols-2 gap-10 pt-8 text-white md:grid-cols-4">
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
                  title="Accounts Payable/Payroll"
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
                  title="Project Manager/Estimator"
                  year={2016}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Rob-Hannah.jpg"
                      alt="Rob Hannah"
                    />
                  }
                  name="Rob Hannah"
                  title="Project Manager/Estimator"
                  year={2022}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/John-Castle.jpg"
                      alt="John Castle"
                    />
                  }
                  name="John Castle"
                  title="Project Manager"
                  year={2022}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Ruben-Huerta.jpg"
                      alt="Ruben Huerta"
                    />
                  }
                  name="Ruben Huerta"
                  title="Project Engineer"
                  year={2005}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Joey-Hannah.jpg"
                      alt="Joey Hannah"
                    />
                  }
                  name="Joey Hannah"
                  title="Project Engineer"
                  year={2022}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Bayley-Follett.jpg"
                      alt="Bayley Follett"
                    />
                  }
                  name="Bayley Follett"
                  title="Project Engineer"
                  year={2022}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Grant-Leppek.jpg"
                      alt="Grant Leppek"
                    />
                  }
                  name="Grant Leppek"
                  title="Project Engineer"
                  year={2022}
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
                      src="../images/Justin-Ferrara.jpg"
                      alt="Justin Ferrara"
                    />
                  }
                  name="Justin Ferrara"
                  title="Superintendent"
                  year={2022}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Paul-Medich.jpg"
                      alt="Paul Medich"
                    />
                  }
                  name="Paul Medich"
                  title="Superintendent"
                  year={2005}
                />
                <EmployeeCard
                  image={
                    <StaticImage
                      src="../images/Isidro-Mercado.jpg"
                      alt="Isidro Mercado"
                    />
                  }
                  name="Isidro Mercado"
                  title="Superintendent"
                  year={2014}
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
                      src="../images/Kali-Spraggins.jpg"
                      alt="Kali Spraggins"
                    />
                  }
                  name="Kali Spraggins"
                  title="Fleet/Safety Coordinator"
                  year={2023}
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
              <div className="relative z-10 flex flex-col items-center w-full py-16 text-center">
                <Heading
                  heading="Our Certifications"
                  subheading="We've put in the work"
                />
                <div className="flex flex-col w-full space-y-6 font-semibold text-white md:flex-row space-evenly">
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
