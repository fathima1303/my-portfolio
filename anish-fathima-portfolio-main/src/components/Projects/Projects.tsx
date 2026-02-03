import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const currentCard = cardRef.current;

    VanillaTilt.init(currentCard, {
      max: 8,
      speed: 400,
      glare: true,
      'max-glare': 0.15,
      scale: 1.02,
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
      transition={{ delay: index * 0.2, duration: 0.6 }}
      ref={cardRef}
      className="card hover:border-primary/50 h-full flex flex-col"
      data-aos="flip-left"
      data-aos-delay={index * 100}
    >
      <h3 className="text-2xl font-heading font-bold text-gradient mb-3">
        {project.title}
      </h3>

      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-primary mb-2">
          Technologies:
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-secondary/10 border border-secondary/30 rounded-full text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <h4 className="text-sm font-semibold text-primary mb-2">
          Key Highlights:
        </h4>
        <ul className="space-y-2">
          {project.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-2 text-sm text-gray-400"
            >
              <span className="text-secondary mt-0.5">▸</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Electronic Polling Audit System',
      description:
        'A comprehensive full-stack auditing platform for real-time polling audit capabilities with dual database environment support.',
      technologies: ['Next.js', 'TypeScript', 'Oracle Database', 'Docker'],
      highlights: [
        'Real-time audit capabilities across dual database environments',
        'Secure environment configurations and database port-forwarding',
        'Containerized deployment with Docker for consistency',
      ],
    },
    {
      title: 'AIDT Website Development',
      description:
        'A modern, responsive web interface featuring rich animations and fluid user experience for enhanced engagement.',
      technologies: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      highlights: [
        'Responsive design with rich animations',
        'Client-side routing with optimized build performance',
        'Smooth animations using Framer Motion',
      ],
    },
    {
      title: 'Scrap_Sale Marketplace',
      description:
        'A comprehensive marketplace platform for listing, buying, and selling scrap materials with focus on user experience.',
      technologies: ['TypeScript', 'React.js', 'REST APIs', 'PostgreSQL'],
      highlights: [
        'User-centered UX design for seamless navigation',
        'Modular API integrations for scalability',
        'Performance optimization and responsive design',
      ],
    },
  ];

  return (
    <section id="projects" className="section-container bg-dark-light/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title" data-aos="fade-up">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
