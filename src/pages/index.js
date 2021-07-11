import React from "react";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import CounterText from "../components/CounterText";
import Button from "../components/Button";
import SlideInWhenVisible from "../components/SlideInWhenVisible";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import CallToAction from "../components/CallToAction";
import { StaticImage } from "gatsby-plugin-image";
import SlideShow from "../components/SlideShow";
import TestimonialBubble from "../components/TestimonialBubble";
import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";
import ServicesGrid from "../components/ServicesGrid";
import { BackgroundImageClasses } from "../components/BackgroundImage";
import Logo from "../lib/Logo";
import Seo from "../components/SEO";

const Index = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <article>
        <section className="text-white relative">
          <div style={{ height: 600 }}>
            <StaticImage
              src="../images/009.jpg"
              alt="Central Valley Engineering & Asphalt, Inc."
              layout="fullWidth"
              className="h-full w-full"
            />
          </div>
          <div
            style={{
              background:
                "linear-gradient(0deg, #00000088 30%, #ffffff44 100%)",
            }}
            className="absolute w-full h-full z-10 top-0 left-0"
          ></div>
          <Wrapper>
            <div
              style={{ top: "50%", transform: "translateY(-50%)" }}
              className="absolute z-20"
            >
              <SlideInWhenVisible direction="left">
                <div className="flex md:hidden w-full pb-4">
                  <div className="w-48">
                    <Logo />
                  </div>
                </div>
                <h1 className="font-mono text-4xl text-shadow-md">
                  A World Class Contractor with a Regional Focus
                </h1>
                <h2 className="text-xl pt-4 pb-4 font-normal">
                  Quality paving and concrete, all done at an affordable price.
                </h2>
                <Button
                  variant="text"
                  size="text-2xl"
                  href="/about-us"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  iconPosition="left"
                  message="Learn more about Central Valley Engineering & Asphalt, Inc."
                  animate={false}
                />
              </SlideInWhenVisible>
            </div>
          </Wrapper>
        </section>
        <section className="bg-yellow py-10 w-full">
          <Wrapper>
            <CallToAction
              nonGatsbyLink
              header="Get Started Today With Your Next Project"
              subheader="Call today for a prompt, competitive bid!"
              buttonMessage="Call Now"
              buttonLink="tel:9167911609"
              buttonIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              }
            />
          </Wrapper>
        </section>
        <section className="py-10 w-full">
          <Wrapper>
            <div className="flex flex-col lg:flex-row items-center justify-evenly space-y-5 lg:space-y-0 lg:space-x-5">
              <SlideInWhenVisible className="w-2/3 lg:w-1/2" direction="left">
                <StaticImage
                  src="../images/001.jpg"
                  placeholder="blurred"
                  alt="about-us"
                />
              </SlideInWhenVisible>
              <SlideInWhenVisible className="w-full lg:w-1/2" direction="right">
                <Heading
                  heading="About Us"
                  subheading="Learn about what makes us so great"
                />
                <p className="text-white mb-4">
                  Established in 2000, Central Valley Engineering & Asphalt is a
                  regional construction leader. We exist to build smooth,
                  long-lasting surfaces that improve the curb appeal and value
                  of your property while adding the durability and practicality
                  your surfaces need. We specialize in asphalt paving, concrete
                  construction, grading, and underground utilities. Our projects
                  range from small driveways to large municipal roadway
                  reconstruction projects. We have a broad range of customers
                  including public, military, commercial, industrial, and
                  private construction with a proven track record of customer
                  satisfaction.
                </p>
                <Button
                  variant="yellow"
                  size="xl"
                  href="/about-us"
                  message="Learn More"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
              </SlideInWhenVisible>
            </div>
          </Wrapper>
        </section>
        <section className="w-full py-16 relative">
          <StaticImage
            src="../images/002.jpg"
            placeholder="blurred"
            alt="Commercial & Residential Construction"
            className={BackgroundImageClasses}
          />
          <div
            className="absolute left-0 top-0 w-full h-full z-0"
            style={{
              backgroundColor: "#00000077",
            }}
          />
          <Wrapper>
            <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 justify-evenly">
              <CounterText title="Clients" to={250} />
              <CounterText title="Projects" to={10000} />
              <CounterText title="Team Members" to={70} />
            </div>
          </Wrapper>
        </section>
        <section className="w-full py-10">
          <Wrapper>
            <ServicesGrid />
          </Wrapper>
        </section>
        <section className="bg-yellow py-10 w-full">
          <Wrapper>
            <CallToAction
              header="Ready to seal the deal?"
              subheader="Request a bid today!"
              buttonMessage="Request a Bid"
              buttonLink="/request-a-bid"
              buttonIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              }
              buttonLeft={true}
            />
          </Wrapper>
        </section>
        <section>
          <Wrapper>
            <div className="flex flex-col lg:flex-row items-center py-10 lg:py-0">
              <SlideInWhenVisible
                direction="left"
                className="w-full lg:w-1/2 pr-12"
              >
                <Heading
                  heading="Our Projects Turn Heads"
                  subheading="What makes us superior?"
                />
                <p className="text-white mb-4">
                  Customer satisfaction is our main concern. We provide the
                  insight, knowledge, and resources needed to turn your concrete
                  and asphalt paving projects into reality. Our commitment is to
                  provide you with a cost-effective solution. Our highly
                  qualified team of estimators is here to give you an accurate
                  estimate with several options on how to address your asphalt
                  or concrete needs.
                </p>
              </SlideInWhenVisible>
              <div className="w-full lg:w-1/2 relative">
                <SlideShow
                  height={500}
                  images={[
                    <StaticImage src="../images/011.jpg" alt="Projects 1" />,
                    <StaticImage src="../images/007.jpg" alt="Projects 2" />,
                    <StaticImage src="../images/008.jpg" alt="Projects 3" />,
                    <StaticImage src="../images/010.jpg" alt="Projects 4" />,
                  ]}
                />
              </div>
            </div>
          </Wrapper>
        </section>
        <section className="bg-secondary py-10">
          <Wrapper>
            <div className="flex flex-col items-center">
              <Heading
                heading="Testimonials"
                subheading="See what our customers have to say"
              />
              <FadeInWhenVisible className="flex lg:flex-row flex-col items-center">
                <div className="w-2/3 lg:w-1/2 lg:px-20 mb-6 lg:mb-0">
                  <TestimonialBubble
                    message="We have worked with Central Valley Engineering & Asphalt for over 20 years. Over the years we have built a great relationship and they have become one of our trusted partners in the Northern California market. They are a quality company with great integrity and always perform at a level that exceeds our expectations. We would highly recommend Central Valley Engineering & Asphalt for your next project."
                    author="J&S Asphalt"
                    location="Company, Rocklin, CA"
                  />
                </div>
                <div className="w-2/3 lg:w-1/2 lg:px-20">
                  <TestimonialBubble
                    message="The Central Valley Engineering & Asphalt crew did a great job on our driveway!  It was in bad condition and made our home appear old and run down.  I received multiple bids but ultimately went with Central Valley as their estimate was fair and they were able to get the job done in the time I needed it.  I am extremely pleased with the final product."
                    author="Richard S."
                    location="Homeowner, Loomis, CA"
                  />
                </div>
              </FadeInWhenVisible>
            </div>
          </Wrapper>
        </section>
        <section className="py-10">
          <Wrapper>
            <ContactForm />
          </Wrapper>
        </section>
      </article>
    </Layout>
  );
};

export default Index;
