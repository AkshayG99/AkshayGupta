import React from 'react';

const Contact = () => (
  <section id="contact" className="bg-navy py-48 px-8 flex justify-center">
    <div className="max-w-xl w-full text-center">
      <p className="text-accent font-mono text-sm mb-2">04. What’s Next?</p>
      <h2 className="text-section font-bold mb-4">Get In Touch</h2>
      <p className="text-text-secondary mb-8 text-lg">
        I’m currently open to new opportunities and collaborations. If you’d like to chat or have a project in mind, feel free to email me!
      </p>
      <a
        href="mailto:akshaymgupta2008@gmail.com"
        className="inline-block border-2 border-accent text-accent px-8 py-3 rounded transition hover:bg-accent hover:text-navy focus:outline-accent font-mono text-lg shadow-accent hover:scale-105"
      >
        Say Hello
      </a>
    </div>
  </section>
);

export default Contact; 