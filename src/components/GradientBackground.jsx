import React, { useEffect, useRef } from 'react';

const ACCENT = '#00ff88';
const NAVY = '#0a192f';

const GradientBackground = () => {
  const bgRef = useRef();
  const mouse = useRef({ x: 0.5, y: 0.5 });
  const anim = useRef();

  useEffect(() => {
    const update = e => {
      let x, y;
      if (e.touches && e.touches.length) {
        x = e.touches[0].clientX / window.innerWidth;
        y = e.touches[0].clientY / window.innerHeight;
      } else {
        x = e.clientX / window.innerWidth;
        y = e.clientY / window.innerHeight;
      }
      mouse.current = { x, y };
    };
    window.addEventListener('mousemove', update);
    window.addEventListener('touchmove', update);
    return () => {
      window.removeEventListener('mousemove', update);
      window.removeEventListener('touchmove', update);
    };
  }, []);

  useEffect(() => {
    let last = { x: 0.5, y: 0.5 };
    const animate = () => {
      // Smoothly interpolate
      last.x += (mouse.current.x - last.x) * 0.15;
      last.y += (mouse.current.y - last.y) * 0.15;
      if (bgRef.current) {
        bgRef.current.style.background = `radial-gradient(600px at ${last.x * 100}% ${last.y * 100}%, ${ACCENT}40 0%, transparent 80%), ${NAVY}`;
      }
      anim.current = requestAnimationFrame(animate);
    };
    anim.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(anim.current);
  }, []);

  return (
    <div
      ref={bgRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none transition-colors duration-500"
      style={{ background: NAVY }}
    />
  );
};

export default GradientBackground; 