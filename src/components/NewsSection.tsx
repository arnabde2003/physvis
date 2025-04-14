
import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const NewsSection = () => {
  return (
    <div className="py-20 bg-physics-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest News</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest developments in our physics playground.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-physics-dark border border-gray-800 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="relative h-64">
            <img 
              src="/lovable-uploads/1165e4eb-954b-4a0c-aa2b-d99128385be4.png" 
              alt="Coming Soon" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-physics-dark to-transparent"></div>
          </div>
          
          <div className="p-8">
            <div className="flex items-center mb-4">
              <FileText className="h-5 w-5 text-physics-yellow mr-2" />
              <span className="text-sm text-gray-400">April 14, 2025</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">More Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              We're working on exciting new physics simulations and content to enhance your learning experience. 
              Stay tuned for updates on new features and interactive demonstrations that will bring physics concepts to life.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-physics-yellow hover:underline font-medium"
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsSection;
