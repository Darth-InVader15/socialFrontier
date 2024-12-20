import React from 'react';
import { motion } from 'framer-motion';

const TechButton = ({ children }) => {
  return (
    <motion.div
      className="techButton"
      whileHover={{ scale: 1.2, color: "orange" }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      {children}
    </motion.div>
  );
};

export default TechButton;