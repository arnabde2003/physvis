
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from './ui/button';
import { Download, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface LearnDetails {
  title: string;
  description: string;
  extendedDescription: React.ReactNode;
  downloadLink?: string;
  downloadText: string;
  imageSrc: string;
}

const concepts: Record<string, LearnDetails> = {
  'projectile': {
    title: 'Projectile Motion',
    description: 'Learn about the motion of objects launched into the air and affected by gravity, following a parabolic trajectory.',
    extendedDescription: (
      <>
        <p className="mb-4">Projectile motion is a form of motion where an object moves in a bilaterally symmetrical, parabolic path. The path followed by a projectile is called its trajectory.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Key Concepts</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>A projectile is any object that is given an initial velocity and then follows a path determined entirely by gravity</li>
          <li>The only acceleration acting on a projectile is in the vertical direction, caused by gravity</li>
          <li>Horizontal velocity remains constant (neglecting air resistance)</li>
          <li>Vertical velocity changes due to gravity's constant acceleration</li>
          <li>The trajectory forms a perfect parabola in the absence of air resistance</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Mathematical Formulation</h3>
        <p className="mb-4">For a projectile launched with initial velocity v₀ at angle θ:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Horizontal position: x = (v₀ cos θ)t</li>
          <li>Vertical position: y = (v₀ sin θ)t - (1/2)gt²</li>
          <li>Maximum height: h = (v₀ sin θ)²/(2g)</li>
          <li>Range: R = (v₀² sin 2θ)/g</li>
        </ul>
      </>
    ),
    downloadLink: 'https://drive.google.com/file/d/15iXaqvQSKu38KduyBV7xVT8KxCic8K3Z/view?usp=drive_link',
    downloadText: 'Simulate Projectile in 2D',
    imageSrc: '/lovable-uploads/4a944919-9cd7-4742-9573-a46328768901.png'
  },
  'collision': {
    title: 'Collision Physics',
    description: 'Explore the physics of objects colliding and exchanging momentum and energy in elastic and inelastic interactions.',
    extendedDescription: (
      <>
        <p className="mb-4">In physics, collisions between objects are events where forces are applied to the objects for a relatively short time, resulting in changes to their velocities.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Types of Collisions</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">Elastic Collision:</span> Both kinetic energy and momentum are conserved. These are idealized collisions where no energy is lost to heat, sound, or deformation.</li>
          <li><span className="font-semibold">Inelastic Collision:</span> Momentum is conserved but kinetic energy is not. Some energy is converted to heat, sound, or deformation.</li>
          <li><span className="font-semibold">Completely Inelastic Collision:</span> Objects stick together after collision, and maximum kinetic energy is lost while momentum remains conserved.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Conservation Laws</h3>
        <p className="mb-4">Collisions are governed by fundamental conservation laws:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-semibold">Conservation of Momentum:</span> The total momentum of objects before collision equals the total momentum after collision.</li>
          <li><span className="font-semibold">Conservation of Energy:</span> In elastic collisions, the total kinetic energy before collision equals the total kinetic energy after collision.</li>
        </ul>
      </>
    ),
    downloadLink: 'https://drive.google.com/file/d/1A5Jkv5zTMs0IOKUBWQCX3kNOlF3f1gHY/view?usp=sharing',
    downloadText: 'Simulate 1D Elastic Collision',
    imageSrc: '/lovable-uploads/49b9feb9-4cbe-4ae6-96c5-13b7c01b960f.png'
  },
  'logic-gate': {
    title: 'Logic Gates',
    description: 'Discover the fundamental building blocks of digital circuits that perform boolean logical operations.',
    extendedDescription: (
      <>
        <p className="mb-4">Logic gates are the basic building blocks of digital circuits. They implement Boolean functions, performing logical operations on one or more binary inputs to produce a single binary output.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Fundamental Logic Gates</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">AND Gate:</span> Output is true only when all inputs are true.</li>
          <li><span className="font-semibold">OR Gate:</span> Output is true when at least one input is true.</li>
          <li><span className="font-semibold">NOT Gate (Inverter):</span> Output is the complement of the input.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Derived Logic Gates</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">NAND Gate:</span> Combination of AND followed by NOT. Universal gate.</li>
          <li><span className="font-semibold">NOR Gate:</span> Combination of OR followed by NOT. Universal gate.</li>
          <li><span className="font-semibold">XOR Gate:</span> Output is true when inputs differ (one is true, one is false).</li>
          <li><span className="font-semibold">XNOR Gate:</span> Output is true when inputs are the same.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Applications</h3>
        <p className="mb-4">Logic gates are used to create:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Arithmetic circuits (adders, subtractors)</li>
          <li>Memory elements (flip-flops, registers)</li>
          <li>Multiplexers and demultiplexers</li>
          <li>Entire digital processing systems and computers</li>
        </ul>
      </>
    ),
    downloadLink: 'https://drive.google.com/file/d/1iWuktXLmHu4zbKox0l6uPUwE96xnzgjT/view?usp=sharing',
    downloadText: 'Simulate the Three Fundamental Gates',
    imageSrc: '/lovable-uploads/4f2c468e-834f-40be-a991-904954813e63.png'
  },
  'circular-motion': {
    title: 'Circular Motion',
    description: 'Understand the physics of objects moving in a circle under the influence of centripetal forces.',
    extendedDescription: (
      <>
        <p className="mb-4">Circular motion describes the movement of an object along a circular path. This type of motion requires a force directed towards the center of the circle, called centripetal force.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Uniform Circular Motion</h3>
        <p className="mb-4">In uniform circular motion, an object moves around a circle at a constant speed. Though the speed is constant, the velocity changes continuously because the direction of motion changes.</p>
        
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">Angular Velocity (ω):</span> The rate of change of angular position per unit time.</li>
          <li><span className="font-semibold">Period (T):</span> The time taken to complete one full revolution.</li>
          <li><span className="font-semibold">Frequency (f):</span> The number of revolutions per unit time.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Centripetal Force</h3>
        <p className="mb-4">The force required to keep an object moving in a circular path is called centripetal force. It's always directed toward the center of the circle.</p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Centripetal force: F = mv²/r = mω²r</li>
          <li>Where m is mass, v is tangential velocity, r is radius, and ω is angular velocity</li>
          <li>This force can be provided by gravity, tension, friction, or other forces</li>
        </ul>
      </>
    ),
    downloadLink: '#',
    downloadText: 'Simulate Uniform Circular Motion',
    imageSrc: '/lovable-uploads/8d50c5cf-9665-450c-a8cd-4dca3de76bfb.png'
  },
  'magnetism': {
    title: 'Magnetism',
    description: 'Investigate the invisible forces of attraction and repulsion between objects with magnetic properties.',
    extendedDescription: (
      <>
        <p className="mb-4">Magnetism is a fundamental force of nature that arises from the motion of electric charges. It manifests as an invisible field that can attract certain materials like iron, cobalt, and nickel.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Magnetic Fields</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Magnetic fields are vector fields that describe the magnetic influence on moving electric charges, currents, and magnetic materials.</li>
          <li>Field lines always form closed loops, flowing from the north to the south pole outside the magnet.</li>
          <li>The strength of a magnetic field decreases with distance from the source.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Magnetic Dipoles</h3>
        <p className="mb-4">Each magnet has two poles - north and south:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Like poles repel each other.</li>
          <li>Unlike poles attract each other.</li>
          <li>Magnetic monopoles (single poles) have never been observed in nature.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Electromagnetism</h3>
        <p className="mb-4">Electricity and magnetism are intimately connected:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Moving electric charges create magnetic fields.</li>
          <li>Changing magnetic fields induce electric currents.</li>
          <li>This relationship is described by Maxwell's equations and forms the basis of many technologies from electric motors to MRI machines.</li>
        </ul>
      </>
    ),
    downloadLink: 'https://drive.google.com/file/d/1g1JonFRuOux-LgIOuu0SiflrH0FPhqTN/view?usp=sharing',
    downloadText: 'Simulate Magnetic Interactions',
    imageSrc: '/lovable-uploads/76981f16-f159-4135-8daa-2844599d2cbc.png'
  },
  'motion-on-an-inclined-plane': {
    title: 'Motion on an Inclined Plane',
    description: 'Study how objects move on inclined planes and the relationship between forces on slopes.',
    extendedDescription: (
      <>
        <p className="mb-4">An inclined plane is a flat surface set at an angle to the horizontal. It's one of the six classical simple machines, used to reduce the force needed to raise an object by increasing the distance over which the force acts.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Forces on an Inclined Plane</h3>
        <p className="mb-4">When an object rests on an inclined plane, gravity acts vertically downward. This force can be decomposed into two components:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">Force parallel to the plane (Fg sin θ):</span> Causes the object to slide down.</li>
          <li><span className="font-semibold">Force perpendicular to the plane (Fg cos θ):</span> Presses the object against the plane.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Motion Analysis</h3>
        <p className="mb-4">For an object on an inclined plane with angle θ:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">With no friction:</span> The object accelerates down the plane at a = g sin θ.</li>
          <li><span className="font-semibold">With static friction:</span> The object remains stationary if the component of gravity parallel to the plane is less than or equal to the maximum static friction force.</li>
          <li><span className="font-semibold">With kinetic friction:</span> The object's acceleration is reduced by friction: a = g sin θ - μk g cos θ.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Applications</h3>
        <p className="mb-4">Inclined planes are used in:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Ramps for loading/unloading</li>
          <li>Roads and walkways on hills</li>
          <li>Screws and wedges (which are modified inclined planes)</li>
          <li>Various machine components</li>
        </ul>
      </>
    ),
    downloadLink: '#',
    downloadText: 'Simulate Motion of an Inclined Plane',
    imageSrc: '/lovable-uploads/c3c04fe9-b528-44c8-be5e-9a6d7a9e2199.png'
  }
};

const LearnTemplate: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const concept = slug ? concepts[slug] : null;
  
  if (!concept) {
    return <div className="min-h-screen flex items-center justify-center">Concept not found</div>;
  }

  return (
    <div className="min-h-screen bg-physics-gradient text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="max-w-4xl mx-auto">
          <Link to="/physics" className="inline-flex items-center text-physics-purple hover:underline mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Physics Concepts
          </Link>
          
          <div className="relative h-72 md:h-96 overflow-hidden rounded-xl mb-8">
            <img 
              src={concept.imageSrc} 
              alt={concept.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-physics-dark to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h1 className="text-4xl md:text-5xl font-bold">{concept.title}</h1>
            </div>
          </div>
          
          <Card className="bg-physics-dark border-none text-white mb-8">
            <CardContent className="p-6">
              <div className="prose prose-invert max-w-none">
                {concept.extendedDescription}
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-physics-dark rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">Download Simulation</h3>
            <p className="mb-4">Experience this concept in action with our interactive simulation. Follow these steps:</p>
            
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li>Click the download button below</li>
              <li>Save the file to your computer</li>
              <li>Extract the contents if it's a compressed file</li>
              <li>Open the simulation application and follow the in-app instructions</li>
            </ol>
            
            {concept.downloadLink && (
              <a 
                href={concept.downloadLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-physics-purple rounded-lg text-white hover:bg-opacity-90 transition-all"
              >
                <Download className="h-5 w-5 mr-2" />
                {concept.downloadText}
              </a>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LearnTemplate;
