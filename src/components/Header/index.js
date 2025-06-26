import React from "react";
import Wrapper from "../Wrapper";
import TextButton from "./TextButton";
import Logo from "../../lib/Logo";

const Header = () => {
  return (
    <header>
      {/* Hiring Banner - Desktop */}
      <div className="hidden md:flex w-full bg-secondary text-yellow text-center py-2 px-2 justify-center items-center">
        <a
          href="https://central-valley-engineering-and-asphalt-inc.viewpointhr-ats.com/job/933438/laborer-operator-driver-cement-mason"
          className="font-mono flex items-center justify-center space-x-2 hover:underline"
        >
          <span>Central Valley is hiring, apply now!</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-4m-1-9h5m0 0v5m0-5L10 14"
            />
          </svg>
        </a>
      </div>

      {/* Hiring Banner - Mobile (fixed bottom) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-secondary text-yellow text-center py-3 px-3 z-50">
        <a
          href="https://central-valley-engineering-and-asphalt-inc.viewpointhr-ats.com/job/933438/laborer-operator-driver-cement-mason"
          className="font-mono flex items-center justify-center space-x-2 text-sm hover:underline"
        >
          <span>We're hiring! Apply now!</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-4m-1-9h5m0 0v5m0-5L10 14"
            />
          </svg>
        </a>
      </div>
      <div
        className="hidden md:block w-full overflow-hidden"
        style={{ height: 100 }}
      >
        <Wrapper>
          <div className="flex flex-row items-center justify-between h-full">
            <div className="w-44">
              <Logo />
            </div>
            <div className="text-white text-lg font-extralight flex flex-row space-x-4">
              <TextButton
                text="(916) 791-1609"
                href="tel:9167911609"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 self-center"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                }
              />
              <TextButton
                text="info@cenvalley.com"
                href="mailto:info@cenvalley.com"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 self-center"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                }
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </header>
  );
};

export default Header;
