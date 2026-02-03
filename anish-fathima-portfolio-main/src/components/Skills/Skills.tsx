import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';

interface SkillCardProps {
  title: string;
  skills: string[];
  index: number;
}

const SkillCard = ({ title, skills, index }: SkillCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const currentCard = cardRef.current;

    VanillaTilt.init(currentCard, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
      scale: 1.05,
    });

    return () => {
      const instance = (currentCard as HTMLElement & { vanillaTilt?: { destroy: () => void } }).vanillaTilt;
      if (instance) {
        instance.destroy();
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      ref={cardRef}
      className="card hover:border-primary/50 cursor-pointer"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      <h3 className="text-xl md:text-2xl font-heading font-semibold text-gradient mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-gray-300 hover:bg-primary/20 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'],
    },
    {
      title: 'Build Tools & Runtime',
      skills: ['Vite', 'npm', 'Docker'],
    },
    {
      title: 'Databases',
      skills: ['Oracle Database', 'PostgreSQL'],
    },
    {
      title: 'Development Tools',
      skills: ['Git', 'Visual Studio Code', 'Jira'],
    },
    {
      title: 'Other Skills',
      skills: ['RESTful APIs', 'Responsive Design', 'Cross-Browser Compatibility', 'Agile/Scrum', 'CI/CD Workflows'],
    },
  ];

  return (
    <section id="skills" className="section-container bg-dark-light/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title" data-aos="fade-up">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
