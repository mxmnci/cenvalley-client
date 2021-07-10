import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const ServicesButton = ({ title, description, backgroundImage, href }) => {
  const [visibility, setVisibility] = useState(false);

  function onHoverStart() {
    setVisibility(true);
  }

  function onHoverEnd() {
    setVisibility(false);
  }

  function toggleVisibility() {
    setVisibility((prevState) => !prevState);
  }

  return (
    <motion.div
      onTapStart={toggleVisibility}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      whileHover={{
        scale: 1.05,
        cursor: "pointer",
      }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col relative h-64 bg-black rounded-lg overflow-hidden select-none`}
    >
      <div className="relative w-full h-full">
        {backgroundImage}
        <motion.div
          className="absolute left-0 top-0 w-full h-full z-0"
          initial="hidden"
          animate={visibility ? "visible" : "hidden"}
          transition={{ duration: 0.3 }}
          variants={{
            visible: {
              backgroundColor: "#000000BB",
            },
            hidden: {
              backgroundColor: "#00000022",
            },
          }}
        />
        <div className="flex flex-col p-4 z-10 items-baseline text-left h-full">
          <h3 className="text-yellow text-xl font-mono text-shadow z-10">
            {title}
          </h3>
          <motion.p
            initial="hidden"
            animate={visibility ? "visible" : "hidden"}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, translateY: 0 },
              hidden: { opacity: 0, translateY: -20 },
            }}
            className="pb-4 flex-1 z-10"
          >
            {description}
          </motion.p>
          <motion.div
            initial="hidden"
            animate={visibility ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, translateX: 0 },
              hidden: { opacity: 0, translateX: -50 },
            }}
            transition={{ duration: 0.3 }}
            className="z-10"
          >
            <Button
              href={href}
              variant="yellow"
              size="lg"
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
              message="View Service"
              animate={false}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesButton;
