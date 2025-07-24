import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  const overlayRef = useRef();

  // Close on ESC
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Close on outside click
  const handleOverlayClick = e => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-[rgba(10,25,47,0.85)] backdrop-blur flex items-center justify-center"
        onClick={handleOverlayClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <motion.div
          className="relative bg-navy-light rounded-xl shadow-2xl max-w-2xl w-full p-8 text-text-primary"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            className="absolute top-4 right-4 text-accent text-2xl focus:outline-accent"
            onClick={onClose}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          {project.dates && <span className="inline-block bg-highlight text-accent font-mono text-xs px-3 py-1 rounded mb-2">{project.dates}</span>}
          <div className="mb-4">
            <span className="font-semibold text-accent">Role:</span> {project.role}
            {project.tools && (
              <span className="ml-4 font-mono text-xs text-accent">{project.tools.join(', ')}</span>
            )}
          </div>
          <p className="mb-4 text-text-secondary">{project.fullDescription}</p>
          {project.features && (
            <ul className="list-disc pl-5 space-y-1 mb-4 text-text-secondary">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-4 flex gap-2 overflow-x-auto">
              {project.screenshots.map((src, i) => (
                <img key={i} src={src} alt="Screenshot" className="h-32 rounded shadow" />
              ))}
            </div>
          )}
          <div className="flex gap-4 mt-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-xl font-mono" aria-label="GitHub">
                <FaGithub /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-xl font-mono" aria-label="Live Demo">
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal; 