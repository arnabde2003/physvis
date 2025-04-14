
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-physics-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-white mb-4">PlayPhy</h2>
            <p className="text-gray-400 max-w-md">
              Explore the fascinating world of physics through interactive simulations and engaging content.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Physics</h3>
              <ul className="space-y-2">
                <li><Link to="/physics/projectile" className="text-gray-400 hover:text-physics-purple transition-colors">Projectile</Link></li>
                <li><Link to="/physics/collision" className="text-gray-400 hover:text-physics-purple transition-colors">Collision</Link></li>
                <li><Link to="/physics/logic-gate" className="text-gray-400 hover:text-physics-purple transition-colors">Logic Gate</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">More Physics</h3>
              <ul className="space-y-2">
                <li><Link to="/physics/circular-motion" className="text-gray-400 hover:text-physics-purple transition-colors">Circular Motion</Link></li>
                <li><Link to="/physics/magnetism" className="text-gray-400 hover:text-physics-purple transition-colors">Magnetism</Link></li>
                <li><Link to="/physics/inclination" className="text-gray-400 hover:text-physics-purple transition-colors">Inclination</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-physics-purple transition-colors">About</Link></li>
                <li><Link to="/news" className="text-gray-400 hover:text-physics-purple transition-colors">News</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-physics-purple transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 PlayPhy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
