import React from "react";
import Logo from "../../lib/Logo";
import Wrapper from "../Wrapper";
import ContactInfoButton from "../ContactInfoButton";
import Navigation from "../Navigation";
import Services from "../../lib/Services";
import Pages from "../../lib/Pages";

const Footer = () => {
  return (
    <footer>
      <div className="bg-secondary">
        <Wrapper>
          <div className="flex flex-col lg:flex-row text-white py-10 space-y-4 lg:space-y-0">
            <div className="flex-1">
              <div className="w-44">
                <Logo />
              </div>
              <div className="flex flex-col text-black pt-6">
                <ContactInfoButton
                  type="Email Address"
                  info="info@cenvalley.com"
                  link="mailto:info@cenvalley.com"
                  icon={
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  }
                  small={true}
                />
                <ContactInfoButton
                  type="Call Us"
                  info="(916) 791-1609"
                  link="tel:9167911609"
                  icon={
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                  small={true}
                />
                <ContactInfoButton
                  type="Address"
                  info="216 Kenroy Lane, Roseville, CA 95678"
                  link="https://www.google.com/maps/place/216+Kenroy+Ln,+Roseville,+CA+95678/@38.7332682,-121.2976137,17z"
                  icon={
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                  small={true}
                />
              </div>
            </div>
            <div className="flex-1 px-0 lg:px-2">
              <h3 className="text-2xl font-mono pb-4">Navigation</h3>
              <div className="flex flex-col">
                <Navigation elements={Pages} />
              </div>
            </div>
            <div className="flex-1 px-0 lg:px-2">
              <h3 className="text-2xl font-mono pb-4">Our Services</h3>
              <div className="flex flex-col">
                <Navigation elements={Services} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-mono pb-4">License Information</h3>
              <p className="text-white pb-4">
                California State Contractor’s License Board-CA LIC#{" "}
                <a
                  className="text-yellow"
                  href="https://www.cslb.ca.gov/onlineservices/checklicenseII/LicenseDetail.aspx?LicNum=773404"
                >
                  773404
                </a>
              </p>
              <p className="text-white">
                Nevada State Contractor’s Board-NV LIC#{" "}
                <a
                  className="text-yellow"
                  href="https://app.nvcontractorsboard.com/Clients/NVSCB/Public/Shared/Details.aspx?EntID=3959433&LicNum=297532"
                >
                  0068786
                </a>
              </p>
            </div>
          </div>
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <div className="text-white py-3 font-mono text-sm">
            <p>© 2021 Central Valley Engineering & Asphalt, Inc.</p>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
};

export default Footer;
