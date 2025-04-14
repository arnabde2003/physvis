
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-physics-gradient text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 pt-32">
        <h1 className="text-4xl font-bold mb-8">About PhysVis</h1>
        <p className="text-xl mb-4">
          Welcome to PhysVis, your interactive platform for exploring the fascinating world of physics.
        </p>
        <p className="mb-4">
          Our mission is to make physics education engaging, interactive, and accessible to everyone.
          Through our simulations and content, we aim to spark curiosity and foster a deeper understanding
          of the physical world around us.
        </p>
        <p>
          Whether you're a student, educator, or just curious about physics, PhysVis offers a unique
          way to visualize and interact with various physics concepts.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
