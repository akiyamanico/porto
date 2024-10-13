import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 text-black">
      <div
        className="fixed inset-0 "
        onClick={onClose}
      ></div>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg z-10 w-11/12 md:w-3/4 lg:w-1/2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <div className="mb-4">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt={project.title} className="mb-2 w-full rounded-lg" />
          ))}
        </div>
        <p className="text-sm">{project.description}</p>
        <button
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
