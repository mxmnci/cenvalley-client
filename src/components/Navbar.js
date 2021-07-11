import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
import Button from "./Button";
import Pages from "../lib/Pages";
import usePathName from "../util/usePathName";
import { Link } from "gatsby";

const Index = (props) => {
  const { stickyNavbar, isMobile } = props;
  const pathName = usePathName();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={`bg-secondary md:h-14 shadow-lg z-50 h-16 ${
        stickyNavbar && "fixed top-0"
      }`}
    >
      <Wrapper>
        {/* Desktop Navbar */}
        <div className="hidden md:flex flex-row h-full items-center text-white text-xs">
          {Pages.map((page) => (
            <Link key={page.link} to={page.link}>
              <div
                className={`flex h-14 font-mono px-9 transition-all duration-300 hover:bg-yellow hover:text-black ${
                  pathName === page.link ? "bg-yellow text-black" : "text-white"
                }`}
              >
                <span className="self-center">{page.name}</span>
              </div>
            </Link>
          ))}
          <div className="flex flex-row flex-1 justify-end">
            <Button
              variant="yellow"
              size="lg"
              href="/request-a-bid"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              }
              message="Request a Bid"
            />
          </div>
        </div>
        {/* Mobile Navbar */}
        <div className="md:hidden flex flex-row h-full items-center text-white">
          <div className="flex-1">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu((prevState) => !prevState)}
              className="z-10 h-6 w-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
          <Button
            variant="yellow"
            size="lg"
            href="/request-a-bid"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            }
            message="Request a Bid"
          />
        </div>
      </Wrapper>
      <motion.ul
        className="bg-secondary flex flex-col overflow-hidden text-white text-xs font-mono w-screen"
        initial={{ height: 0 }}
        animate={
          isMobile && showMenu
            ? {
                height: "auto",
              }
            : { height: 0 }
        }
      >
        {Pages.map((page, index) => (
          <a key={page.link} href={page.link}>
            <motion.li
              className={`py-3 px-3 ${
                index !== Pages.length - 1 && "border-b-2 border-yellow"
              } hover:bg-yellow hover:text-black cursor-pointer ${
                pathName === page.link ? "bg-yellow text-black" : "text-white"
              }`}
            >
              {page.name}
            </motion.li>
          </a>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Index;
