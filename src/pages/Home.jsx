// pages/Home.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-indigo-600 dark:text-indigo-400"
      >
        Hi, I'm Chirag Natesh Vijay
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-lg md:text-2xl mb-8 max-w-2xl"
      >
        A dynamic, passionate, and driven engineer — exploring the intersection of creativity and technology.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1.2 }}
      >
        <Link 
          to="/projects" 
          className="px-6 py-3 bg-indigo-600 text-white rounded-2xl text-lg font-semibold hover:bg-indigo-700 transition"
        >
          See My Work
        </Link>
      </motion.div>
    </section>
  );
};

export default Home;
