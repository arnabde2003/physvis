
import React from 'react';

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
                <li><a href="#" className="text-gray-400 hover:text-physics-purple transition-colors">Projectile</a></li>
                <li><a href="#" className="text-gray-400 hover:text-physics-purple transition-colors">Collision</a></li>
                <li><a href="#" className="text-gray-400 hover:text-physics-purple transition-colors">Logic Gate</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">More Physics</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-physics-purple transition-colors">Circular Motion</a></li>
                <li><a href="#" className="text-gray-400 hover:text-physics-purple transition-colors">Magnetism</a></li>
                <li><a href="#" className="text-gray-400 hover:text-physics-purple transition-colors">Inclination</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-physics-purple transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-physics-purple transition-colors">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-physics-purple transition-colors">Contact</a></li>
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
