import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-gallery-dark/60 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal content */}
        <motion.div
          className="relative bg-cream-100 rounded-lg shadow-2xl z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-cream-200 hover:bg-vermillion hover:text-cream-100 text-gallery-dark transition-colors z-10"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div className="w-full h-56 md:h-72 overflow-hidden">
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ))}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <span className="text-xs uppercase tracking-[0.2em] text-vermillion font-medium">
              Project
            </span>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gallery-dark mt-1 mb-2">
              {project.title}
            </h2>
            <div className="section-divider" />

            <p className="text-gallery-muted text-sm leading-relaxed mt-4">
              {project.description}
            </p>

            <div className="mt-6 pt-4 border-t border-gallery-border">
              <span className="text-xs uppercase tracking-[0.15em] text-gallery-muted font-medium">
                Technologies
              </span>
              <p className="text-gallery-dark font-medium text-sm mt-1">
                {project.techstack}
              </p>
            </div>

            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 bg-vermillion text-cream-100 text-sm font-medium rounded hover:bg-vermillion-dark transition-colors uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Modal;
