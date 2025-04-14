
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhysicsConcepts from '../components/PhysicsConcepts';

const Physics = () => {
  return (
    <div className="min-h-screen bg-physics-gradient text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 pt-32">
        <h1 className="text-4xl font-bold mb-8">Explore Physics</h1>
        <p className="text-xl mb-8">
          Discover interactive simulations and detailed explanations of various physics concepts.
        </p>
        <PhysicsConcepts />
      </div>
      <Footer />
    </div>
  );
};

export default Physics;
