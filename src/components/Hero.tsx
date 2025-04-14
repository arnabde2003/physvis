
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-physics-gradient">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/lovable-uploads/76981f16-f159-4135-8daa-2844599d2cbc.png')` }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-physics-dark"></div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Welcome to <span className="text-physics-purple">PhysVis</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10"
        >
          Explore the fascinating world of physics through interactive simulations and engaging content.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a href="#physics-concepts" className="px-8 py-3 bg-physics-purple text-white font-medium rounded-full hover:bg-opacity-90 transition-all">
            Explore Physics
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
