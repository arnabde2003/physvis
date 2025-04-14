
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

interface PhysicsCardProps {
  title: string;
  description: string;
  imageSrc: string;
  color: string;
  index: number;
  downloadText: string;
  downloadLink?: string;
}

const PhysicsCard: React.FC<PhysicsCardProps> = ({ 
  title, 
  description, 
  imageSrc, 
  color, 
  index, 
  downloadText, 
  downloadLink 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-lg overflow-hidden bg-physics-dark shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
    >
      <div className={`relative h-56 overflow-hidden`}>
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-physics-dark to-transparent`}></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-2xl font-bold mb-3 text-${color}`}>{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="mt-auto flex flex-col space-y-3">
          <a 
            href={`#${title.toLowerCase()}`} 
            className={`inline-flex items-center text-${color} hover:underline font-medium`}
          >
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          
          {downloadLink ? (
            <a 
              href={downloadLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-4 py-2 bg-${color} bg-opacity-20 rounded-lg text-${color} hover:bg-opacity-30 transition-all`}
            >
              <Download className="h-4 w-4 mr-2" />
              {downloadText}
            </a>
          ) : (
            <button 
              className={`inline-flex items-center justify-center px-4 py-2 bg-${color} bg-opacity-20 rounded-lg text-${color} hover:bg-opacity-30 transition-all`}
            >
              <Download className="h-4 w-4 mr-2" />
              {downloadText}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PhysicsCard;
