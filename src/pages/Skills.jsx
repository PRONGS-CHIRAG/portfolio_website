// pages/Skills.jsx
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub } from 'react-icons/fa';

const skills = [
  { name: "React", icon: <FaReact size={50} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} /> },
  { name: "HTML5", icon: <FaHtml5 size={50} /> },
  { name: "CSS3", icon: <FaCss3Alt size={50} /> },
  { name: "JavaScript", icon: <FaJsSquare size={50} /> },
  { name: "GitHub", icon: <FaGithub size={50} /> },
];

const Skills = () => {
  return (
    <section className="px-6 py-12 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-12"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
        {skills.map((skill, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="text-indigo-600 dark:text-indigo-400 mb-2">{skill.icon}</div>
            <p className="text-lg">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
