import React from "react";
import Layout from "./Layout";
import Navigation from "./Navigation";
import SlideShow from "./SlideShow";
import Wrapper from "./Wrapper";
import Services from "../lib/Services";
import ServicesGrid from "./ServicesGrid";
import Button from "./Button";
import Seo from "./SEO";

const Service = ({ title, description, images }) => {
  return (
    <Layout>
      <Seo title={title} />
      <div className="py-10">
        <Wrapper>
          <div className="flex flex-row md:space-x-8">
            <aside className="hidden md:block">
              <div className="bg-secondary p-4 rounded self-start">
                <h1 className="text-3xl text-yellow font-mono pb-2">
                  Our Services
                </h1>
                <Navigation elements={Services} />
              </div>
              <div className="bg-yellow p-4 rounded self-start mt-6 text-center">
                <h1 className="text-xl text-secondary font-mono pb-2">
                  Ready to seal the deal?
                </h1>
                <Button
                  variant="primary"
                  size="xl"
                  href="/"
                  icon={
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
                  message={"Request a Bid"}
                />
              </div>
            </aside>
            <article className="flex-1">
              <h1 className="text-white text-4xl font-mono pb-4">{title}</h1>
              <SlideShow height={400} images={images} />
              <p className="text-white pt-6">{description}</p>
            </article>
          </div>
          <section className="py-16">
            <ServicesGrid />
          </section>
        </Wrapper>
      </div>
    </Layout>
  );
};

export default Service;
