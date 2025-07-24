import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import experience from '../data/experience';

const Experience = () => {
  const [active, setActive] = useState(0);
  return (
    <section id="experience" className="bg-navy py-32 px-8 md:px-16 flex justify-center">
      <div className="max-w-3xl w-full">
        <h2 className="text-section font-bold text-text-primary flex items-center mb-10">
          <span className="text-accent font-mono text-lg mr-3">02.</span> Experience
          <span className="ml-4 h-0.5 w-24 bg-highlight rounded" />
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <ul className="md:w-48 flex md:flex-col gap-2 mb-4 md:mb-0">
            {experience.map((job, idx) => (
              <li key={job.company}>
                <button
                  className={`w-full text-left px-4 py-2 font-mono text-sm rounded transition focus:outline-accent ${active === idx ? 'bg-highlight text-accent' : 'text-text-secondary hover:bg-highlight/50'}`}
                  onClick={() => setActive(idx)}
                  aria-selected={active === idx}
                  aria-controls={`exp-panel-${idx}`}
                  id={`exp-tab-${idx}`}
                  role="tab"
                >
                  {job.company}
                </button>
              </li>
            ))}
          </ul>
          {/* Content */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                id={`exp-panel-${active}`}
                aria-labelledby={`exp-tab-${active}`}
                role="tabpanel"
                className="bg-navy rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-text-primary mb-1">
                  {experience[active].role} <span className="text-accent">@ </span>
                  <a href={experience[active].link} target="_blank" rel="noopener noreferrer" className="text-accent underline hover:no-underline">{experience[active].company}</a>
                </h3>
                <p className="text-sm text-text-secondary mb-4 font-mono">{experience[active].dates}</p>
                <ul className="list-disc pl-5 space-y-2 text-text-secondary mb-2">
                  {experience[active].description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {experience[active].tech.map(tech => (
                    <span key={tech} className="text-xs bg-highlight/30 text-accent px-2 py-1 rounded font-mono">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 