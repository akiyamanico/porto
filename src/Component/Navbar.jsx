import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPhase, setScrollPhase] = useState('top');

  useEffect(() => {
    let t1;
    const handleScroll = () => {
      if (window.scrollY > 50 && scrollPhase === 'top') {
        setScrollPhase('merging');
        t1 = setTimeout(() => {
          setScrollPhase('merged');
        }, 500);
      } else if (window.scrollY <= 50 && scrollPhase !== 'top') {
        setScrollPhase('top');
        clearTimeout(t1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(t1);
    };
  }, [scrollPhase]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cream-200/80 backdrop-blur-md">
      <motion.div 
        layout 
        className={`max-w-[1400px] mx-auto flex items-center px-6 md:px-12 lg:px-16 py-4 relative transition-all duration-500 ${
          scrollPhase === 'top' ? 'justify-between' : 'justify-center'
        }`}
      >

        <motion.div layout className="flex items-center gap-3 z-20">
          <AnimatePresence>
            {scrollPhase === 'top' && (
              <motion.span 
                layout 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 0.5, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="text-gallery-dark text-xs select-none overflow-hidden"
              >
                +
              </motion.span>
            )}
          </AnimatePresence>
          <Link to="/porto" className="font-megrim text-2xl md:text-3xl text-gallery-dark tracking-wider hover:text-vermillion transition-colors">
            Hvda
          </Link>
        </motion.div>


        {scrollPhase === 'merging' && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">

            <motion.div
              className="absolute left-1/2 top-1/2 w-16 h-[2px] bg-vermillion origin-center"
              style={{ x: '-50%', y: '-50%' }}
              animate={{ rotate: [0, 180, 360], scale: [0, 1.2, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-[3px] h-[3px]"
                style={{
                  backgroundColor: Math.random() > 0.5 ? '#1A1A1A' : '#C43A31',
                  left: 0, top: 0,
                  x: '-50%', y: '-50%'
                }}
                animate={{
                  x: [(Math.random() - 0.5) * 10 + 'px', (Math.random() - 0.5) * 80 + 'px'],
                  y: [(Math.random() - 0.5) * 10 + 'px', (Math.random() - 0.5) * 80 + 'px'],
                  opacity: [0, 1, 0],
                  scale: [1, 2, 0]
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            ))}
          </div>
        )}

        <AnimatePresence>
          {scrollPhase === 'top' && (
            <motion.div 
              layout
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.3 }}
              className="hidden md:flex items-center gap-8 z-20"
            >
              <Link to="/porto/exhibition" className="link-hover text-sm uppercase tracking-[0.15em] text-gallery-muted hover:text-gallery-dark transition-colors font-medium">
                Exhibition
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {scrollPhase === 'top' && (
            <motion.button
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gallery-dark transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gallery-dark transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gallery-dark transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>


      {isMenuOpen && (
        <div className="md:hidden bg-cream-200/95 backdrop-blur-lg border-t border-gallery-border/50 py-6 px-6">
          <div className="flex flex-col gap-4">
            <Link to="/porto" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] text-gallery-muted hover:text-vermillion transition-colors font-medium py-2">
              Home
            </Link>
            <Link to="/porto/exhibition" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-[0.15em] text-gallery-muted hover:text-vermillion transition-colors font-medium py-2">
              Exhibition
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
