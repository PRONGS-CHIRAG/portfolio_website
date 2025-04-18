// pages/Projects.jsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects and skills.",
    link: "https://github.com/yourgithubusername/portfolio",
  },
  {
    title: "AI Chatbot",
    description: "Built a smart chatbot using NLP technologies to assist users with instant answers.",
    link: "https://github.com/yourgithubusername/ai-chatbot",
  },
  {
    title: "E-commerce Platform",
    description: "Developed a full-stack e-commerce web app with Node.js, React, and MongoDB.",
    link: "https://github.com/yourgithubusername/ecommerce-platform",
  },
];

function Projects(){
  return (
    <section className="px-6 py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
