// pages/Contact.jsx
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 py-12">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-8 text-indigo-600 dark:text-indigo-400"
      >
        Contact Me
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="text-lg mb-8 max-w-2xl"
      >
        Interested in collaborating or just want to say hi? Feel free to reach out!
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.6 }}
        className="flex space-x-8 text-indigo-600 dark:text-indigo-400 text-3xl"
      >
        <a href="mailto:chiragnateshvijay@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/chiragnvijay/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/PRONGS-CHIRAG" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
