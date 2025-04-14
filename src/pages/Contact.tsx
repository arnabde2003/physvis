
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-physics-gradient text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20 pt-32">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-xl mb-8">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <div className="bg-physics-dark p-8 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
                placeholder="Your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
                placeholder="Your message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="px-6 py-3 bg-physics-purple text-white rounded-md hover:bg-opacity-90 transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
