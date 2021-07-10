import React, { useState, useEffect } from "react";
import Header from "./Header/index";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useIsMobile from "../util/useIsMobile";
import usePageOffset from "../util/usePageOffset";
import { md } from "../lib/mediaQueries";

const Layout = ({ children }) => {
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const isMobile = useIsMobile(md);
  const { y } = usePageOffset();

  useEffect(() => {
    if (isMobile) {
      if (y >= 0) {
        setStickyNavbar(true);
        return;
      }
    } else {
      if (y >= 100) {
        setStickyNavbar(true);
        return;
      }
    }
    setStickyNavbar(false);
  }, [y, isMobile]);

  return (
    <div className="bg-primary antialiased">
      <Header isMobile={isMobile} />
      <Navbar stickyNavbar={stickyNavbar} isMobile={isMobile} />
      <main
        className={`font-sans bg-primary ${
          stickyNavbar && "md:pt-14 pt-16"
        } overflow-hidden`}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
