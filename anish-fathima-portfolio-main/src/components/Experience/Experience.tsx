import { motion } from 'framer-motion';

const Experience = () => {
  const achievements = [
    'Developed and maintained responsive, high-performance web applications using React.js, Next.js, and TypeScript, serving cross-functional teams of 12 members',
    'Architected and deployed a full-stack Electronic Polling Audit System using Next.js and TypeScript with Oracle Database integration, enabling real-time audit capabilities across dual database environments',
    'Implemented secure and scalable containerized deployments using Docker with advanced port forwarding and environment configuration management for production scalability',
    'Built dynamic, animation-rich web interfaces using React 19, Vite, Tailwind CSS, and Framer Motion, reducing build time by 30% and enhancing user experience',
    'Led front-end architecture and performance optimization for Scrap_Sale marketplace platform, improving page load speed by 40% through code splitting and lazy loading techniques',
    'Created and maintained modular, reusable component libraries ensuring cross-browser compatibility and responsive design across all device sizes',
    'Integrated RESTful APIs with frontend applications, ensuring seamless data flow and optimal application performance',
    'Collaborated closely with backend, DevOps, and QA teams to ensure smooth integrations, clean handoffs, and scalable feature delivery',
    'Followed Agile development workflows with Git-based version control, Jira for sprint tracking, and participated in regular code reviews to maintain code quality',
  ];

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title" data-aos="fade-up">
          Professional Experience
        </h2>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card"
            data-aos="fade-right"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gradient mb-2">
                  Junior Software Engineer
                </h3>
                <p className="text-xl text-gray-300 font-semibold mb-1">
                  Fulcrum ALM Solutions
                </p>
                <p className="text-gray-400">
                  📍 Coimbatore, Tamil Nadu
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-sm font-semibold">
                  October 2023 – February 2026
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-start space-x-3 group"
                  data-aos="fade-left"
                  data-aos-delay={index * 50}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
