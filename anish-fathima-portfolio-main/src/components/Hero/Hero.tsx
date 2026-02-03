import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: [
        'Frontend Developer',
        'React.js Expert',
        'TypeScript Enthusiast',
        'UI/UX Designer',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ThreeBackground />
      
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-sm font-semibold mb-4">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-4"
        >
          <span className="text-gradient">Anish Fathima J</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 h-16 sm:h-20"
        >
          <span className="text-gray-300">I'm a </span>
          <span ref={typedRef} className="text-gradient"></span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-4 max-w-2xl mx-auto"
        >
          📍 Coimbatore, Tamil Nadu
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Specializing in building fast, scalable, and interactive web applications
          with React.js, Next.js, and TypeScript
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('#projects')}
            className="btn-primary w-full sm:w-auto"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-secondary w-full sm:w-auto text-center"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 animate-bounce"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Scroll to about section"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark pointer-events-none" />
    </section>
  );
};

export default Hero;
