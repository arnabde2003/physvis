
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PhysicsConcepts from '../components/PhysicsConcepts';
import NewsSection from '../components/NewsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-physics-gradient text-white">
      <Navbar />
      <Hero />
      <PhysicsConcepts />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
