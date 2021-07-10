import React from "react";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Wrapper>
        <div className="py-20 text-xl text-center flex flex-col items-center">
          <h1 className="text-white font-bold pb-4">
            The page you requested was not found.
          </h1>
          <Button
            variant="yellow"
            size="xl"
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            }
            href="/"
            message="Go to home"
          />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default NotFoundPage;
