// components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
        Chirag
      </div>
      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</Link>
        <Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</Link>
        <Link to="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">Projects</Link>
        <Link to="/skills" className="hover:text-indigo-600 dark:hover:text-indigo-400">Skills</Link>
        <Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>
      </div>
    </nav>
  );
};

export { Navbar };
