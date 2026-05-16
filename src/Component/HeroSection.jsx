import React from 'react';
import { motion } from 'framer-motion';
import me from '../Assets/me.jpg';
import ContactCard from './ContactCard';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream-200 px-6 md:px-12 lg:px-16 pt-4 pb-16">

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />


      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-[1400px] mx-auto mt-8 lg:mt-12">
        

        <div className="flex-1 relative z-20 lg:max-w-[55%]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="font-playfair font-black text-vermillion leading-[0.85] select-none">
              <span className="block text-display-md italic">IN THE</span>
              <span className="block text-display-md">QUIET</span>
              <span className="block text-display-md italic">GLOW</span>
            </div>
          </motion.div>


          <motion.div
            className="relative z-30 mt-4 lg:mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <span className="font-playfair italic text-vermillion text-display-md block leading-[1]">
              of my screen, I write
            </span>
            <span className="font-playfair font-black text-vermillion text-display-md block leading-[0.85] mt-1">
              LINES OF CODE
            </span>
            <span className="font-playfair italic text-vermillion text-display-md block mt-1">
              for you,
            </span>
            <p className="font-playfair italic text-gallery-muted text-md md:text-xl mt-4 max-w-md leading-relaxed">
              pouring my unspoken heart into every fragile byte.
            </p>
          </motion.div>


          <motion.div
            className="mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          >
            <ContactCard />
          </motion.div>
        </div>


        <div className="flex-1 relative mt-8 lg:mt-0 lg:max-w-[45%] flex flex-col items-center lg:items-end">

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative w-[280px] md:w-[360px] lg:w-[420px] xl:w-[480px]">
              <img
                src={me}
                alt="Fi Zilalil Huda - Developer Portrait"
                className="w-full h-auto object-cover rounded-sm shadow-2xl"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                }}
              />

              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-vermillion" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-vermillion" />
              <div className="absolute bottom-16 left-0 w-8 h-8 border-b-2 border-l-2 border-vermillion" />
              <div className="absolute bottom-16 right-0 w-8 h-8 border-b-2 border-r-2 border-vermillion" />
            </div>
          </motion.div>


          <motion.div
            className="mt-8 max-w-[340px] text-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          >

            <div className="flex justify-end mb-3">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1" className="opacity-60">
                <polyline points="16,18 22,12 16,6" />
                <polyline points="8,6 2,12 8,18" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-gallery-muted font-light">
              Each line of code is a craft — where logic meets creativity,
              and ideas transform into reality. I invite you to explore my work
              not as mere projects, but as a living portfolio of passion,
              precision, and endless curiosity.
            </p>


            <div className="mt-8 flex flex-col items-end gap-1">
              <span className="text-xs uppercase tracking-[0.2em] text-gallery-muted font-medium">
                Open to Work
              </span>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-sm font-medium text-gallery-dark">Full-Stack</span>
                <span className="text-gallery-muted">—</span>
                <span className="text-sm font-medium text-gallery-dark">Web Developer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
