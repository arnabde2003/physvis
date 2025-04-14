
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-physics-gradient">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">404</h1>
          <p className="text-2xl text-gray-300 mb-8">Oops! Page not found</p>
          <a href="/" className="px-6 py-3 bg-physics-purple text-white rounded-full hover:bg-opacity-90 transition-all">
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
