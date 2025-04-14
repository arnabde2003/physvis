
import React from 'react';
import { motion } from 'framer-motion';
import { Box, Activity, Cpu, Book, Users, Layout } from 'lucide-react';

const GameFeatures = () => {
  const features = [
    {
      icon: <Box className="h-10 w-10" />,
      title: "Real Physics Engine",
      description: "Unity Engine provides a realistic and real-time simulation and visualization of the topic."
    },
    {
      icon: <Activity className="h-10 w-10" />,
      title: "Dynamic Inputs",
      description: "Users are to provide their input values such as Mass, Velocity, etc, for the app to run its magic."
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Optimization",
      description: "Software so simple and less demanding that it can be run on the weakest of PCs."
    },
    {
      icon: <Book className="h-10 w-10" />,
      title: "Student's Learning",
      description: "Enhances the user's experience while learning the said topic via visual means."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Educator's Help",
      description: "Educators can use these games to teach these topics, enhancing the teaching experience."
    },
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Visually Clean",
      description: "No Clutter, Simple Aesthetic. Best for Learning and visual purposes."
    }
  ];

  return (
    <div id="game-features" className="py-20 bg-physics-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Game Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience physics like never before with our interactive simulations and games.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-physics-dark p-6 rounded-lg border border-gray-800 hover:border-physics-purple transition-all"
            >
              <div className="text-physics-purple mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameFeatures;
