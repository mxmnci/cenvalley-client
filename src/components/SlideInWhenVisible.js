import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SlideInWhenVisible = ({ children, direction, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (direction === "top") setTranslateY(100);
    if (direction === "bottom") setTranslateY(-100);
    if (direction === "left") setTranslateX(-100); // default
    if (direction === "right") setTranslateX(100);
  }, [direction]);

  return (
    <>
      {translateX !== 0 || translateY !== 0 ? (
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.7 }}
          variants={{
            visible: { opacity: 1, translateX: 0, translateY: 0 },
            hidden: { opacity: 0, translateX, translateY },
          }}
          className={className}
        >
          {children}
        </motion.div>
      ) : null}
    </>
  );
};

export default SlideInWhenVisible;
