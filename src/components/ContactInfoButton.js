import React from "react";
import { motion } from "framer-motion";

const ContactInfoButton = ({ type, info, link, icon, small = false }) => {
  return (
    <div className={`inline-flex items-center ${small ? "mb-4" : "mb-6"}`}>
      <motion.a
        href={link}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`bg-yellow ${small ? "p-2" : "p-3"} rounded mr-4`}
      >
        {icon}
      </motion.a>
      <div className="flex flex-col text-white">
        <h5 className={`font-bold ${small ? "text-md" : "text-xl"}`}>{type}</h5>
        <span className={small ? "text-sm" : "text-lg"}>{info}</span>
      </div>
    </div>
  );
};

export default ContactInfoButton;
