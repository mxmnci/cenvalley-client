import React, { useEffect } from "react";
import ServicesButton from "../components/ServicesButton";
import Heading from "../components/Heading";
import services from "../lib/Services";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesGrid = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const grid = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const button = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="text-center flex flex-col items-center">
      <Heading
        heading="Our Services"
        subheading="Find the service to suit your needs"
      />
      <motion.div
        ref={ref}
        variants={grid}
        animate={controls}
        initial="hidden"
        className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3  md:grid-rows-2 text-white gap-4"
      >
        {services.map((service) => (
          <motion.div variants={button} key={service.link}>
            <ServicesButton
              title={service.name}
              description={service.description}
              backgroundImage={service.image}
              href={service.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesGrid;
