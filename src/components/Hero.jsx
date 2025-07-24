import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const roles = [
  'software engineer.',
  'ML engineer.',
  'problem solver.',
  'critical thinker.',
  'leader.',
];

function useTypewriter(words, prefix = 'I am a', typingSpeed = 80, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayed, setDisplayed] = useState(prefix + '');

  useEffect(() => {
    let timeout;
    const currentWord = words[index];
    if (!deleting && subIndex <= currentWord.length) {
      setDisplayed(prefix + ' ' + currentWord.substring(0, subIndex));
      timeout = setTimeout(() => setSubIndex(subIndex + 1), typingSpeed);
    } else if (!deleting && subIndex > currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && subIndex > 0) {
      setDisplayed(prefix + ' ' + currentWord.substring(0, subIndex - 1));
      timeout = setTimeout(() => setSubIndex(subIndex - 1), typingSpeed / 2);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((index + 1) % words.length);
      timeout = setTimeout(() => setSubIndex(1), typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, prefix, typingSpeed, pause]);

  return displayed;
}

const Hero = () => {
  const typewriterText = useTypewriter(roles, 'I am a', 80, 1200);
  return (
    <section id="hero" className="min-h-screen flex items-start justify-start pt-40 pl-8 md:pl-24 lg:pl-40 pr-8 bg-navy">
      <motion.div
        className="flex flex-col gap-6 max-w-2xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="text-accent uppercase text-sm tracking-widest font-mono text-left">Hi, my name is</motion.p>
        <motion.h1 variants={item} className="text-hero font-bold text-text-primary leading-tight text-left">Akshay Gupta</motion.h1>
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-light text-text-secondary mb-2 text-left">
          {typewriterText}
          <span className="blinking-cursor">|</span>
        </motion.h2>
        <motion.p variants={item} className="max-w-xl text-lg text-text-secondary mb-4 text-left">
          I'm a passionate software engineer specializing in building applications centered around AI. I am a grade 12 software engineer interning @ RBC. 
        </motion.p>
        <motion.div variants={item} className="text-left">
          <a
            href="#projects"
            className="inline-block border-2 border-accent text-accent px-8 py-3 rounded transition hover:bg-accent hover:text-navy focus:outline-accent font-mono text-lg shadow-accent animate-glow"
          >
            Check out my work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 