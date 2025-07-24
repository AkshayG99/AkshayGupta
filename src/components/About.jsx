import React from 'react';
import profileImg from '../assets/profile.jpg';

const skills = [
  'Python', 'JavaScript', 'Java', 'TensorFlow', 'React', 'Next.js', 'Node.js', 'AWS',
  'SQL', 'Flask', 'GraphQL', 'MongoDB',
];

const About = () => (
  <section id="about" className="bg-navy py-32 px-8 md:px-16 flex justify-center">
    <div className="max-w-3xl w-full grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Text */}
      <div>
        <h2 className="text-section font-bold text-text-primary flex items-center mb-6">
          <span className="text-accent font-mono text-lg mr-3">01.</span> About Me
          <span className="ml-4 h-0.5 w-16 bg-highlight rounded" />
        </h2>
        <div className="space-y-4 text-text-secondary text-base max-w-md mb-8">
          <p>I’m Akshay, a software engineer with a love for building AI applications. My journey started with curiosity and a drive to solve real-world problems through code.</p>
          <p>I enjoy building smart systems, whether it's training machine learning models or designing the robust backend architectures that bring them to life. I thrive in collaborative environments and love learning new technologies.</p>
          <p>When I'm not coding, you'll catch me on the ice playing hockey or on the court spiking a volleyball.</p>
        </div>
        <h3 className="mt-8 mb-4 text-accent font-mono text-sm">Skills:</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-xs">
          {skills.map(skill => (
            <li key={skill} className="text-accent bg-highlight/40 rounded-full px-5 py-2 text-xs font-mono text-center shadow-md border border-accent/20">
              {skill}
            </li>
          ))}
        </ul>
      </div>
      {/* Right: Image */}
      <div className="flex justify-center md:justify-end">
        <div className="relative group w-56 h-56 md:w-72 md:h-72 rounded-lg overflow-hidden shadow-lg">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover grayscale rounded-lg group-hover:scale-105 group-hover:grayscale-0 group-hover:shadow-accent transition duration-300"
          />
          <div className="absolute inset-0 rounded-lg border-2 border-accent opacity-0 group-hover:opacity-100 transition" />
        </div>
      </div>
    </div>
  </section>
);

export default About; 