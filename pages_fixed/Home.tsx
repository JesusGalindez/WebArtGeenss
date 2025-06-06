import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Instagram, Palette } from 'lucide-react';
import Scrolltelling from '../components/Scrolltelling/Scrolltelling';

const Home = () => {

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_banner_geenss.png"
            alt="Geenss Archenti Hero"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${
false 
              ? 'bg-black/50' 
              : 'bg-black/30'
          }`} />
        </div>

        {/* Elementos decorativos eliminados para diseño más limpio */}

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-white drop-shadow-2xl"
          >
            Geenss Archenti
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-amber-200"
          >
            Arte Visionario Amazónico
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
Obras visionarias creadas con pigmentos naturales de la Amazonía peruana
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <button
              onClick={scrollToContent}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 group"
            >
              <span className="flex items-center space-x-2">
                <span>Explorar Arte</span>
                <ArrowDown 
                  size={20} 
                  className="group-hover:translate-y-1 transition-transform" 
                />
              </span>
            </button>

            <Link
              to="/galeria"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Ver Galería
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex items-center justify-center space-x-8 text-sm text-gray-300"
          >
            <a 
              href="https://instagram.com/geenss.af"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-amber-300 transition-colors"
            >
              <Instagram size={16} />
              <span>69K seguidores</span>
            </a>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Galerías Internacionales</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={scrollToContent}
            className="text-white hover:text-amber-300 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </motion.div>
      </section>

      {/* Scrolltelling Content */}
      <Scrolltelling />
    </div>
  );
};

export default Home;
