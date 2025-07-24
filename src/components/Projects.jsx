import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_COUNT = 4;
  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);
  return (
    <section id="projects" className="bg-navy py-32 px-8 md:px-16 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="flex items-center mb-10 justify-between">
          <h2 className="text-section font-bold text-text-primary flex items-center">
            <span className="text-accent font-mono text-lg mr-3">03.</span> Projects
            <span className="ml-4 h-0.5 w-24 bg-highlight rounded" />
          </h2>
          {projects.length > VISIBLE_COUNT && (
            <button
              onClick={() => setShowAll(v => !v)}
              className="ml-6 px-4 py-2 border-2 border-accent text-accent rounded transition hover:bg-accent hover:text-navy focus:outline-accent font-mono text-sm shadow-accent"
              aria-expanded={showAll}
              aria-controls="projects-list"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
        <motion.div
          id="projects-list"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {visibleProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} onClick={() => setSelected(showAll ? idx : idx)} />
          ))}
        </motion.div>
        {selected !== null && (
          <ProjectModal project={projects[selected]} onClose={() => setSelected(null)} />
        )}
      </div>
    </section>
  );
};

export default Projects; 