import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current || !sectionRef.current) return;

    const words = textRef.current.querySelectorAll('.word');

    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const summary = `Results-driven Frontend Developer with 2.4 years of experience specializing in React.js, Next.js, TypeScript, and modern CSS frameworks. Proven expertise in building fast, scalable, and interactive web applications with strong focus on performance optimization, UI consistency, and clean code practices. Experienced in full-stack development with containerized deployments and database integration. Passionate about delivering pixel-perfect user interfaces and maintainable codebases in Agile environments.`;

  const words = summary.split(' ').map((word, index) => (
    <span key={index} className="word inline-block mr-1">
      {word}
    </span>
  ));

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-container"
      data-aos="fade-up"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Professional Summary</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <p
              ref={textRef}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              {words}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {[
              { value: '2.4+', label: 'Years Experience' },
              { value: '10+', label: 'Projects Completed' },
              { value: '15+', label: 'Technologies' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 glass-effect rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
