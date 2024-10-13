// LoadingBar.js
import React from 'react';
import { motion } from 'framer-motion';

const LoadingBar = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full bg-blue-500 h-2"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ width: 0 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <span className="text-white">Loading...</span>
    </motion.div>
  );
};

export default LoadingBar;
