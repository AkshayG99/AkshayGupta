import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, onClick }) => (
  <button
    className="group w-full bg-navy-light rounded-lg p-6 shadow-lg text-left transition transform hover:scale-105 hover:shadow-accent focus:outline-accent focus:scale-105 border-2 border-transparent hover:border-accent"
    onClick={onClick}
    aria-label={`Open details for ${project.title}`}
  >
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-bold text-text-primary mb-1">{project.title}</h3>
      <p className="text-text-secondary text-sm mb-2 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {project.tech.map(tech => (
          <span key={tech} className="text-xs bg-highlight/30 text-accent px-2 py-1 rounded font-mono">{tech}</span>
        ))}
      </div>
      <div className="flex gap-4 mt-2">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-xl" onClick={e => e.stopPropagation()} aria-label="GitHub">
            <FaGithub />
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 text-xl" onClick={e => e.stopPropagation()} aria-label="Live Demo">
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </div>
  </button>
);

export default ProjectCard; 