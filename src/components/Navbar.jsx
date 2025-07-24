import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import resumePDF from '../assets/resume.pdf';

const navLinks = [
  { id: 'about', label: '01. About' },
  { id: 'experience', label: '02. Experience' },
  { id: 'projects', label: '03. Projects' },
  { id: 'contact', label: '04. Contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-[72px] z-50 bg-[rgba(10,25,47,0.85)] backdrop-blur-md px-8 md:px-16 flex items-center justify-between">
      {/* Left: Logo/Initials */}
      <a href="#hero" className="text-accent text-3xl font-bold tracking-widest focus:outline-accent flex items-center h-full">AG</a>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 h-full">
        <ul className="flex gap-8 items-center h-full">
          {navLinks.map(link => (
            <li key={link.id} className="h-full flex items-center">
              <a
                href={`#${link.id}`}
                className="relative px-2 py-1 text-text-secondary hover:text-accent transition focus:outline-accent flex items-center h-full"
              >
                <span className="text-accent mr-1 font-mono text-sm">{link.label.split('.')[0]}.</span>
                {link.label.split('. ')[1]}
                <span className="block h-0.5 bg-accent scale-x-0 hover:scale-x-100 transition-transform origin-left" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-accent text-accent px-6 py-2 rounded-lg transition hover:bg-accent hover:text-navy focus:outline-accent font-mono text-base shadow-accent ml-4 font-semibold tracking-wide"
          style={{ boxShadow: '0 0 0 2px #64ffda, 0 2px 8px 0 #64ffda22' }}
        >
          Resume
        </a>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-accent text-3xl focus:outline-accent z-50"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen(v => !v)}
      >
        {mobileOpen ? <FiX /> : <FiMenu />}
      </button>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[rgba(10,25,47,0.95)] backdrop-blur-lg flex flex-col items-end p-8 transition-transform duration-300 md:hidden z-40 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <ul className="flex flex-col gap-8 mt-20 w-full items-end">
          {navLinks.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-2xl text-accent font-mono focus:outline-accent"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border-2 border-accent text-accent px-8 py-3 rounded transition hover:bg-accent hover:text-navy focus:outline-accent font-mono text-lg shadow-accent"
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 