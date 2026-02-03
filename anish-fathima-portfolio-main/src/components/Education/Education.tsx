import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title" data-aos="fade-up">
          Education
        </h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card hover:border-primary/50"
            data-aos="zoom-in"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gradient mb-2">
                  Master of Computer Applications (MCA)
                </h3>
                <p className="text-xl text-gray-300 font-semibold mb-2">
                  KGISL Institute for Information Management
                </p>
                <p className="text-gray-400 mb-3">
                  📍 Coimbatore, Tamil Nadu
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-primary text-sm font-semibold">
                    Graduated: 2023
                  </span>
                  <span className="px-4 py-2 bg-secondary/20 border border-secondary/50 rounded-full text-secondary text-sm font-semibold">
                    Specialization: Computer Science
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
