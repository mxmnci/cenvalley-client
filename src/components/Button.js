import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const Button = ({
  variant = "primary",
  size = "md",
  icon,
  href,
  message,
  iconPosition = "right",
  animate = "true",
  nonGatsbyLink = false,
}) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [sizeValue, setSizeValue] = useState("");

  useEffect(() => {
    switch (variant) {
      case "primary":
        setBackgroundColor("bg-primary");
        setTextColor("text-white");
        break;
      case "secondary":
        setBackgroundColor("bg-secondary");
        setTextColor("text-white");
        break;
      case "yellow":
        setBackgroundColor("bg-yellow");
        setTextColor("text-black");
        break;
      case "text":
        setTextColor("text-yellow");
        break;
      default:
        break;
    }
    switch (size) {
      case "xs":
        setSizeValue("px-2.5 py-1.5 text-xs rounded");
        break;
      case "sm":
        setSizeValue("px-3 py-2 text-sm rounded-md");
        break;
      case "md":
        setSizeValue("px-4 py-2 text-sm rounded-md");
        break;
      case "lg":
        setSizeValue("px-4 py-2 text-base rounded-md");
        break;
      case "xl":
        setSizeValue("px-6 py-3 text-base rounded-md");
        break;
      case "2xl":
        setSizeValue("px-8 py-4 text-lg rounded-md");
        break;
      case "text-xs":
        setSizeValue("py-1.5 text-xs");
        break;
      case "text-sm":
        setSizeValue("py-2 text-sm");
        break;
      case "text-md":
        setSizeValue("py-2 text-sm");
        break;
      case "text-lg":
        setSizeValue("py-2 text-base");
        break;
      case "text-xl":
        setSizeValue("py-3 text-base");
        break;
      case "text-2xl":
        setSizeValue("py-4 text-lg");
        break;
      default:
        break;
    }
  }, [size, variant]);
  return (
    <>
      {href ? (
        nonGatsbyLink ? (
          <motion.a
            href={href}
            whileHover={animate && { scale: 1.05 }}
            whileTap={animate && { scale: 0.95 }}
            className={`${backgroundColor} ${textColor} ${sizeValue} inline-flex flex-row shadow-sm space-x-2 font-bold items-center`}
          >
            {iconPosition === "left" && icon}
            <span>{message}</span>
            {iconPosition === "right" && icon}
          </motion.a>
        ) : (
          <Link to={href}>
            <motion.div
              whileHover={animate && { scale: 1.05 }}
              whileTap={animate && { scale: 0.95 }}
              className={`${backgroundColor} ${textColor} ${sizeValue} inline-flex flex-row shadow-sm space-x-2 font-bold items-center`}
            >
              {iconPosition === "left" && icon}
              <span>{message}</span>
              {iconPosition === "right" && icon}
            </motion.div>
          </Link>
        )
      ) : (
        <motion.button
          whileHover={animate && { scale: 1.05 }}
          whileTap={animate && { scale: 0.95 }}
          className={`${backgroundColor} ${textColor} ${sizeValue} inline-flex flex-row shadow-sm space-x-2 font-bold items-center`}
        >
          {iconPosition === "left" && icon}
          <span>{message}</span>
          {iconPosition === "right" && icon}
        </motion.button>
      )}
    </>
  );
};

export default Button;
