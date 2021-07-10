import React from "react";
import { motion } from "framer-motion";

const TestimonialBubble = ({ message, author, location }) => {
  return (
    <div className="relative w-full">
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", stiffness: 100 },
        }}
      >
        <p className="rounded bg-yellow p-4 text-base">{message}</p>
        <div
          style={{
            border: "21px solid transparent",
            borderTopColor: "#FFFF63",
            marginLeft: -21,
            marginRight: -21,
          }}
          className="absolute text-yellow border-transparent left-1/2 w-0 h-0 border-b-0"
        ></div>
      </motion.div>
      <div className="pt-6 text-center">
        <p className="text-white font-bold">{author}</p>
        <p className="text-grey text-sm">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialBubble;
