
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
        <h3 className="text-2xl font-semibold mb-4">What is a Projectile?</h3>
        <p className="mb-4">A projectile is any object that is thrown, launched, or otherwise projected through the air and is subject only to the forces of gravity and air resistance (if present). In physics, projectile motion refers to the curved path (trajectory) that an object follows when it is projected near the Earth's surface and moves along a curved path under the action of gravity alone.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Key Characteristics of Projectile Motion</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Two-dimensional motion: Can be analyzed separately in horizontal and vertical components</li>
          <li>Parabolic trajectory: Forms a symmetrical parabola under ideal conditions (no air resistance)</li>
          <li>Independent motions: Horizontal motion is constant velocity, vertical motion is accelerated motion</li>
          <li>Initial velocity: Determines the projectile's range, height, and time of flight</li>
        </ul>
        
        <p className="mb-4">Projectiles are fundamental in various fields including physics, engineering, ballistics, sports science, and even space exploration.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Real-World Use Cases & Examples</h3>
        
        <h4 className="text-lg font-semibold mb-2">1. Sports & Recreation</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Basketball: A ball arcing toward the hoop</li>
          <li>Golf: A golf ball following a trajectory after being hit</li>
          <li>Archery: An arrow flying toward a target</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">2. Military & Defense</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Cannonballs, missiles, bullets following ballistic paths</li>
          <li>Artillery fire requiring angle and force calculations</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">3. Space Exploration</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Rocket launches (before entering orbit)</li>
          <li>Spacecraft re-entry into Earth's atmosphere</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">4. Everyday Life</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Throwing a paper ball into a trash can</li>
          <li>Water fountains creating parabolic streams</li>
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
        <h3 className="text-2xl font-semibold mb-4">What are Collisions in Physics?</h3>
        <p className="mb-4">In physics, collisions between objects are events where forces are applied to the objects for a relatively short time, resulting in changes to their velocities. Collisions are fundamental phenomena that showcase the principles of conservation of momentum and energy.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Types of Collisions</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">Elastic Collision:</span> Both kinetic energy and momentum are conserved. These are idealized collisions where no energy is lost to heat, sound, or deformation.</li>
          <li><span className="font-semibold">Inelastic Collision:</span> Momentum is conserved but kinetic energy is not. Some energy is converted to heat, sound, or deformation.</li>
          <li><span className="font-semibold">Completely Inelastic Collision:</span> Objects stick together after collision, and maximum kinetic energy is lost while momentum remains conserved.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Real-World Applications</h3>
        
        <h4 className="text-lg font-semibold mb-2">1. Transportation and Safety</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Vehicle crash testing and design of safety features</li>
          <li>Analysis of traffic accidents</li>
          <li>Design of impact-absorbing structures</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">2. Sports and Recreation</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Billiards and pool (nearly elastic collisions)</li>
          <li>Tennis, baseball, and other ball sports</li>
          <li>Design of sports equipment for optimal performance</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">3. Industrial Applications</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Manufacturing processes involving impact</li>
          <li>Material testing and quality control</li>
          <li>Design of particle accelerators</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Conservation Laws</h3>
        <p className="mb-4">Collisions are governed by fundamental conservation laws:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-semibold">Conservation of Momentum:</span> The total momentum of objects before collision equals the total momentum after collision.</li>
          <li><span className="font-semibold">Conservation of Energy:</span> In elastic collisions, the total kinetic energy before collision equals the total kinetic energy after collision.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Mathematical Formulations</h3>
        <p className="mb-4">For collisions between two objects with masses m₁ and m₂:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Conservation of momentum: m₁v₁ₐ + m₂v₂ₐ = m₁v₁ᵦ + m₂v₂ᵦ</li>
          <li>For elastic collisions: 1/2 m₁v₁ₐ² + 1/2 m₂v₂ₐ² = 1/2 m₁v₁ᵦ² + 1/2 m₂v₂ᵦ²</li>
          <li>For completely inelastic collisions: v₁ᵦ = v₂ᵦ</li>
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
        <h3 className="text-2xl font-semibold mb-4">What are Logic Gates?</h3>
        <p className="mb-4">Logic gates are the basic building blocks of digital circuits. They implement Boolean functions, performing logical operations on one or more binary inputs to produce a single binary output. They are the foundation of all digital systems, from simple calculators to complex computers.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Fundamental Logic Gates</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">AND Gate:</span> Output is true (1) only when all inputs are true (1). Symbol: ∧</li>
          <li><span className="font-semibold">OR Gate:</span> Output is true (1) when at least one input is true (1). Symbol: ∨</li>
          <li><span className="font-semibold">NOT Gate (Inverter):</span> Output is the complement of the input. Symbol: ¬</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Derived Logic Gates</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">NAND Gate:</span> Combination of AND followed by NOT. Universal gate able to implement any Boolean function.</li>
          <li><span className="font-semibold">NOR Gate:</span> Combination of OR followed by NOT. Also a universal gate.</li>
          <li><span className="font-semibold">XOR Gate:</span> Output is true (1) when inputs differ (one is true, one is false).</li>
          <li><span className="font-semibold">XNOR Gate:</span> Output is true (1) when inputs are the same (both true or both false).</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Real-World Applications</h3>
        
        <h4 className="text-lg font-semibold mb-2">1. Computing Systems</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Central Processing Units (CPUs) and microprocessors</li>
          <li>Memory circuits (RAM, ROM, etc.)</li>
          <li>Arithmetic Logic Units (ALUs) for mathematical operations</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">2. Digital Electronics</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Control systems in consumer electronics</li>
          <li>Digital signal processing</li>
          <li>Data transmission and error correction</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">3. Specialized Fields</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Cryptography and security systems</li>
          <li>Medical equipment control systems</li>
          <li>Automotive electronic control units</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Boolean Algebra Foundation</h3>
        <p className="mb-4">Logic gates implement Boolean algebra operations, which are fundamental to digital design:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>AND operation: A ∧ B</li>
          <li>OR operation: A ∨ B</li>
          <li>NOT operation: ¬A</li>
          <li>These can be combined to create any logical function</li>
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
        <h3 className="text-2xl font-semibold mb-4">What is Circular Motion?</h3>
        <p className="mb-4">Circular motion describes the movement of an object along a circular path. This type of motion requires a force directed towards the center of the circle, called centripetal force. It's a fundamental concept in physics that explains numerous natural phenomena and technological applications.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Types of Circular Motion</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">Uniform Circular Motion:</span> Motion with constant speed but continuously changing direction, requiring constant centripetal acceleration.</li>
          <li><span className="font-semibold">Non-uniform Circular Motion:</span> Motion where both speed and direction change, involving both tangential and centripetal acceleration.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Key Concepts in Circular Motion</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">Angular Velocity (ω):</span> The rate of change of angular position per unit time, measured in radians per second.</li>
          <li><span className="font-semibold">Period (T):</span> The time taken to complete one full revolution, T = 2π/ω.</li>
          <li><span className="font-semibold">Frequency (f):</span> The number of revolutions per unit time, f = 1/T.</li>
          <li><span className="font-semibold">Centripetal Acceleration:</span> The acceleration directed toward the center of the circular path, a = v²/r = ω²r.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Real-World Applications</h3>
        
        <h4 className="text-lg font-semibold mb-2">1. Natural Phenomena</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Planetary orbits around the sun</li>
          <li>Electrons orbiting atomic nuclei</li>
          <li>Weather systems like cyclones and hurricanes</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">2. Engineering Applications</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Centrifuges for separating mixtures</li>
          <li>Curved roads and railway tracks</li>
          <li>Artificial satellites in orbit</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">3. Daily Life Examples</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Spinning clothes in a washing machine</li>
          <li>Vehicles turning on curved roads</li>
          <li>Amusement park rides like carousels and roller coasters</li>
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
        <h3 className="text-2xl font-semibold mb-4">What is Magnetism?</h3>
        <p className="mb-4">Magnetism is a fundamental force of nature that arises from the motion of electric charges. It manifests as an invisible field that can attract certain materials like iron, cobalt, and nickel. Magnetism and electricity are closely related aspects of the electromagnetic force, one of the four fundamental forces in physics.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Magnetic Fields and Forces</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Magnetic fields are vector fields that describe the magnetic influence on moving electric charges, currents, and magnetic materials.</li>
          <li>Field lines always form closed loops, flowing from the north to the south pole outside the magnet and south to north inside.</li>
          <li>The strength of a magnetic field decreases with distance from the source, typically as an inverse square law.</li>
          <li>Magnetic force on a moving charged particle: F = qvB sin θ, where q is charge, v is velocity, B is magnetic field strength, and θ is the angle between v and B.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Types of Magnetic Materials</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">Ferromagnetic:</span> Materials like iron, nickel, and cobalt that can be permanently magnetized.</li>
          <li><span className="font-semibold">Paramagnetic:</span> Materials weakly attracted to magnetic fields, like aluminum and platinum.</li>
          <li><span className="font-semibold">Diamagnetic:</span> Materials weakly repelled by magnetic fields, like copper and water.</li>
          <li><span className="font-semibold">Antiferromagnetic:</span> Materials with atoms aligned in alternating patterns, like chromium and manganese oxides.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Real-World Applications</h3>
        
        <h4 className="text-lg font-semibold mb-2">1. Technology</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Electric motors and generators</li>
          <li>Hard disk drives and magnetic storage media</li>
          <li>Magnetic resonance imaging (MRI) in medicine</li>
          <li>Magnetic levitation trains (maglev)</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">2. Navigation and Orientation</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Compasses using Earth's magnetic field</li>
          <li>Animal navigation (birds, sea turtles, etc.)</li>
          <li>Spacecraft orientation systems</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">3. Scientific Research</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Particle accelerators</li>
          <li>Plasma containment in fusion reactors</li>
          <li>Material science and quantum physics research</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Electromagnetism</h3>
        <p className="mb-4">Electricity and magnetism are intimately connected:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Moving electric charges create magnetic fields</li>
          <li>Changing magnetic fields induce electric currents</li>
          <li>This relationship is described by Maxwell's equations</li>
          <li>The unification of electricity and magnetism was a major breakthrough in 19th-century physics</li>
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
        <h3 className="text-2xl font-semibold mb-4">What is an Inclined Plane?</h3>
        <p className="mb-4">An inclined plane is a flat surface set at an angle to the horizontal. It's one of the six classical simple machines, used to reduce the force needed to raise an object by increasing the distance over which the force acts. Inclined planes are fundamental in understanding how objects move on slopes and how forces are distributed in non-horizontal situations.</p>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Forces on an Inclined Plane</h3>
        <p className="mb-4">When an object rests on an inclined plane, gravity acts vertically downward. This gravitational force can be decomposed into two components:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">Force parallel to the plane (Fg sin θ):</span> Causes the object to slide down the plane.</li>
          <li><span className="font-semibold">Force perpendicular to the plane (Fg cos θ):</span> Presses the object against the plane, contributing to normal force and friction.</li>
          <li><span className="font-semibold">Normal Force (N):</span> Perpendicular to the surface, equal in magnitude to Fg cos θ.</li>
          <li><span className="font-semibold">Friction Force (f):</span> Acts parallel to the surface in the opposite direction of motion or potential motion.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Types of Motion on Inclined Planes</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><span className="font-semibold">Sliding without friction:</span> Object accelerates down the plane at a = g sin θ.</li>
          <li><span className="font-semibold">Sliding with friction:</span> Acceleration is reduced by friction, a = g sin θ - μk g cos θ.</li>
          <li><span className="font-semibold">Static equilibrium:</span> Object remains stationary when static friction balances the parallel component of weight.</li>
          <li><span className="font-semibold">Rolling without slipping:</span> Combines translational and rotational motion.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3 mt-6">Real-World Applications</h3>
        
        <h4 className="text-lg font-semibold mb-2">1. Transportation and Infrastructure</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Road and railway design on hills</li>
          <li>Wheelchair ramps and accessibility features</li>
          <li>Loading ramps for trucks and vehicles</li>
          <li>Ski slopes and toboggan runs</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">2. Engineering and Construction</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Roof design and water runoff systems</li>
          <li>Screw threads (helical inclined planes)</li>
          <li>Conveyor belts in industrial settings</li>
          <li>Ancient techniques for moving heavy objects (e.g., pyramid construction)</li>
        </ul>
        
        <h4 className="text-lg font-semibold mb-2">3. Natural Phenomena</h4>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Landslides and avalanches</li>
          <li>Erosion patterns on hillsides</li>
          <li>River flow dynamics on slopes</li>
          <li>Animal movement on varying terrain</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-3">Mathematical Analysis</h3>
        <p className="mb-4">For an object on an inclined plane with angle θ:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Weight component parallel to plane: Fg‖ = mg sin θ</li>
          <li>Weight component perpendicular to plane: Fg⊥ = mg cos θ</li>
          <li>Acceleration down the plane (no friction): a = g sin θ</li>
          <li>Minimum coefficient of static friction to prevent sliding: μs = tan θ</li>
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
            <p className="mb-4">Experience this concept in action with our interactive simulation.</p>
            
            <h4 className="text-xl font-semibold mb-3">How to Download from Google Drive</h4>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
              <li><span className="font-semibold">Open the Drive Link:</span> Click the button below to open the Google Drive link</li>
              <li><span className="font-semibold">Get Access (If Needed):</span> Sign in with Google if prompted</li>
              <li><span className="font-semibold">Download the File:</span> Click the download icon (↓) at the top of the page</li>
              <li><span className="font-semibold">Run the Simulation:</span> Extract the contents if it's a compressed file, then open the simulation application</li>
            </ol>
            
            <div className="bg-black bg-opacity-20 p-4 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-2">Troubleshooting Tips</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>If download is slow, try a different browser</li>
                <li>For large files, ensure you have stable internet connection</li>
                <li>Scan downloaded files with antivirus software for safety</li>
              </ul>
            </div>
            
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
