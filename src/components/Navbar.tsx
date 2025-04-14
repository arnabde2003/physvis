
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-white">
          PlayPhy
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/about" className="text-white hover:text-physics-purple transition-colors">
            About
          </Link>
          <Link to="/physics" className="text-white hover:text-physics-purple transition-colors">
            Physics
          </Link>
          <Link to="/news" className="text-white hover:text-physics-purple transition-colors">
            News
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
