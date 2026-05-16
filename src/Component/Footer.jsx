import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gallery-dark text-cream-300 py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-[1400px] mx-auto">

        <motion.div
          className="flex flex-col lg:flex-row justify-between gap-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="max-w-md">
            <h2 className="font-megrim text-4xl md:text-5xl text-cream-100 mb-4">
              Hvda
            </h2>
            <p className="text-cream-400 text-sm leading-relaxed mb-6">
              If you are interested in hiring me, feel free to reach out via
              LinkedIn or any of my social media listed here. I will send you my CV ASAP!
            </p>
            <div className="section-divider" style={{ background: '#C43A31' }} />
          </div>


          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-cream-500 font-medium mb-4">
                Social
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/akiyamanico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream-300 hover:text-vermillion transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/fi-zilalil-huda-90371324a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream-300 hover:text-vermillion transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://instagram.com/fizilalilhuda_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream-300 hover:text-vermillion transition-colors"
                >
                  Instagram — @fizilalilhuda_
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-cream-500 font-medium mb-4">
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:fizi8889@gmail.com"
                  className="text-sm text-cream-300 hover:text-vermillion transition-colors"
                >
                  fizi8889@gmail.com
                </a>
                <a
                  href="mailto:akiyamanico2@outlook.com"
                  className="text-sm text-cream-300 hover:text-vermillion transition-colors"
                >
                  akiyamanico2@outlook.com
                </a>
                <span className="text-sm text-cream-400">
                  Discord: sandaranpangsit
                </span>
              </div>
            </div>
          </div>
        </motion.div>


        <div className="border-t border-cream-500/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream-500">
            Made with love by Fi Zilalil Huda · {new Date().getFullYear()}
          </p>
          <p className="text-xs text-cream-500 font-megrim tracking-wider">
            Hvda Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;