import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socials = [
  { href: 'https://github.com/AkshayG99', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/akshay-m-gupta/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'mailto:akshaymgupta2008@gmail.com', icon: <FaEnvelope />, label: 'Email' },
];

const Footer = () => (
  <footer className="bg-navy py-12 text-center text-text-secondary text-sm flex flex-col items-center gap-4">
    <div className="flex gap-6 justify-center mb-2">
      {socials.map(s => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-text-secondary hover:text-accent transition focus:outline-accent hover:shadow-accent"
          aria-label={s.label}
        >
          {s.icon}
        </a>
      ))}
    </div>
    <div className="mt-2">
      © 2025 Akshay Gupta.
    </div>
  </footer>
)

export default Footer; 