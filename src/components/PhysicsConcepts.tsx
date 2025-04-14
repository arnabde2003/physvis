import React from 'react';
import PhysicsCard from './PhysicsCard';

const PhysicsConcepts = () => {
  const concepts = [
    {
      title: "Projectile",
      description: "Learn about the motion of objects launched into the air and affected by gravity, following a parabolic trajectory.",
      imageSrc: "/lovable-uploads/4a944919-9cd7-4742-9573-a46328768901.png",
      color: "physics-red",
      downloadText: "Simulate Projectile in 2D",
      downloadLink: "https://drive.google.com/file/d/15iXaqvQSKu38KduyBV7xVT8KxCic8K3Z/view?usp=drive_link"
    },
    {
      title: "Collision",
      description: "Explore the physics of objects colliding and exchanging momentum and energy in elastic and inelastic interactions.",
      imageSrc: "/lovable-uploads/49b9feb9-4cbe-4ae6-96c5-13b7c01b960f.png",
      color: "physics-blue",
      downloadText: "Simulate 1D Elastic Collision",
      downloadLink: "https://drive.google.com/file/d/1A5Jkv5zTMs0IOKUBWQCX3kNOlF3f1gHY/view?usp=sharing"
    },
    {
      title: "Logic Gate",
      description: "Discover the fundamental building blocks of digital circuits that perform boolean logical operations.",
      imageSrc: "/lovable-uploads/4f2c468e-834f-40be-a991-904954813e63.png",
      color: "physics-green",
      downloadText: "Simulate the Three Fundamental Gates"
    },
    {
      title: "Circular Motion",
      description: "Understand the physics of objects moving in a circle under the influence of centripetal forces.",
      imageSrc: "/lovable-uploads/8d50c5cf-9665-450c-a8cd-4dca3de76bfb.png",
      color: "physics-purple",
      downloadText: "Simulate Uniform Circular Motion"
    },
    {
      title: "Magnetism",
      description: "Investigate the invisible forces of attraction and repulsion between objects with magnetic properties.",
      imageSrc: "/lovable-uploads/76981f16-f159-4135-8daa-2844599d2cbc.png",
      color: "physics-yellow",
      downloadText: "Simulate Magnetic Interactions"
    },
    {
      title: "Motion on an inclined plane",
      description: "Study how objects move on inclined planes and the relationship between forces on slopes.",
      imageSrc: "/lovable-uploads/c3c04fe9-b528-44c8-be5e-9a6d7a9e2199.png",
      color: "physics-orange",
      downloadText: "Simulate Motion of an Inclined Plane"
    }
  ];

  return (
    <div id="physics-concepts" className="py-20 bg-physics-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Physics Concepts</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dive into the fascinating world of physics with our interactive simulations and explanations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <PhysicsCard
              key={concept.title}
              title={concept.title}
              description={concept.description}
              imageSrc={concept.imageSrc}
              color={concept.color}
              index={index}
              downloadText={concept.downloadText}
              downloadLink={concept.downloadLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhysicsConcepts;
