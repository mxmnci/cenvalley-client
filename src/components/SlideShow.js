import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (custom) => {
    return {
      x: custom.direction > 0 ? custom.width : -custom.width,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (custom) => {
    return {
      zIndex: 0,
      x: custom.direction < 0 ? custom.width : -custom.width,
      opacity: 0,
    };
  },
};

const SlideShow = ({ images, height }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [width, setWidth] = useState(0);

  const increment = useCallback(() => {
    setDirection(1);
    if (currentImage + 1 < images.length) {
      setCurrentImage((prevState) => prevState + 1);
    } else {
      setCurrentImage(0);
    }
  }, [currentImage, images.length]);

  function decrement() {
    setDirection(-1);
    if (currentImage - 1 >= 0) {
      setCurrentImage((prevState) => prevState - 1);
    } else {
      setCurrentImage(images.length - 1);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      increment();
    }, 5000);
    return () => clearInterval(timer);
  }, [increment]);

  return (
    <>
      {images && (
        <div
          className="w-full relative overflow-hidden"
          style={{ height }}
          ref={(node) => node && setWidth(node.offsetWidth)}
        >
          <AnimatePresence initial={false} custom={{ direction, width }}>
            <motion.div
              key={currentImage}
              className="flex h-full w-full absolute justify-center"
              variants={variants}
              transition={{
                x: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
              initial="enter"
              exit="exit"
              animate="center"
              custom={{ direction, width }}
            >
              {images[currentImage]}
            </motion.div>
          </AnimatePresence>
          <button
            className="absolute text-white top-1/2 left-2 transform-gpu -translate-y-1/2 z-10"
            onClick={decrement}
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute text-white top-1/2 right-2 transform-gpu -translate-y-1/2 z-10"
            onClick={increment}
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default SlideShow;
