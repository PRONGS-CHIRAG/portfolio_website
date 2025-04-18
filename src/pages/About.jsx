// pages/About.jsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-6 text-indigo-600 dark:text-indigo-400"
      >
        About Me
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="text-lg md:text-xl max-w-3xl"
      >
        I'm Chirag Natesh Vijay, a passionate engineer with a love for innovation, problem-solving, and continuous learning.
        My journey spans across engineering, creativity, and entrepreneurship, fueled by curiosity and a drive to make a difference.
      </motion.p>
    </section>
  );
};

export default About;
