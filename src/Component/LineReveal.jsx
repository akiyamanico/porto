import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LineReveal = ({ children, delay = 0, width = '100%', className = "" }) => {
  const [showLine, setShowLine] = useState(true);

  return (
    <div className={`relative ${className}`} style={{ width }}>
      <motion.div
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 0.7, delay, ease: [0.77, 0, 0.175, 1] }}
      >
        {children}
      </motion.div>
      
      {showLine && (
        <motion.div
          className="absolute top-0 bottom-0 w-[2px] bg-vermillion z-10"
          initial={{ left: '0%', opacity: 1 }}
          animate={{ left: '100%', opacity: 0 }}
          transition={{ 
            left: { duration: 0.7, delay, ease: [0.77, 0, 0.175, 1] },
            opacity: { duration: 0.2, delay: delay + 0.6 }
          }}
          onAnimationComplete={() => setShowLine(false)}
        />
      )}
    </div>
  );
};

export default LineReveal;
