// components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="bg-white shadow-lg p-4 flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    );
  }

export default Navbar;
