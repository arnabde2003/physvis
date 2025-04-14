
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsSection from '../components/NewsSection';
import GameFeatures from '../components/GameFeatures';

const News = () => {
  return (
    <div className="min-h-screen bg-physics-gradient text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 pt-32">
        <h1 className="text-4xl font-bold mb-8">Latest News</h1>
        <p className="text-xl mb-8">
          Stay updated with the latest developments and additions to PhysVis.
        </p>
        <NewsSection />
        <GameFeatures />
      </div>
      <Footer />
    </div>
  );
};

export default News;
