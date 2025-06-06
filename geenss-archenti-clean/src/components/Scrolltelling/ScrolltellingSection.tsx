import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
interface ScrolltellingSectionProps {
  sectionKey: string;
  images: string[];
  texts: string[];
  title: string;
  backgroundColor?: string;
  textColor?: string;
}

const ScrolltellingSection: React.FC<ScrolltellingSectionProps> = ({
  sectionKey,
  images,
  texts,
  title,
  backgroundColor = 'transparent',
  textColor
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const isInView = useInView(containerRef, { 
    margin: "-10% 0px -10% 0px",
    once: true,
    amount: 0.3
  });

  // Eliminamos la transformación Y para evitar overlaps
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  useEffect(() => {
    if (isInView && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView, images.length]);

  return (
    <motion.section
      ref={containerRef}
      style={{ 
        backgroundColor
      }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: 'url(/images/background_pattern.png)',
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Images Section */}
          <motion.div 
            style={{ opacity }}
            className="relative h-96 lg:h-[500px] z-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`${title} - ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ 
                  scale: index === currentImageIndex ? 1 : 1.05,
                  opacity: index === currentImageIndex ? 1 : 0 
                }}
                transition={{ duration: 1 }}
              />
            ))}
            
            {/* Image Dots Indicator */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex 
                        ? 'bg-amber-500' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Elementos decorativos removidos para diseño más limpio */}
          </motion.div>

          {/* Text Section */}
          <motion.div 
            style={{ opacity }}
            className="space-y-6 z-30 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-4xl lg:text-5xl font-bold mb-8 ${
                textColor || 'text-gray-900'
              }`}
            >
              {title}
            </motion.h2>

            {texts.map((text, index) => (
              <motion.p
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className={`text-lg lg:text-xl leading-relaxed ${
                  textColor || 'text-gray-700'
                }`}
              >
                {text}
              </motion.p>
            ))}

            {/* Quote Decoration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center space-x-4 pt-6 relative z-30"
            >
              <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
              <span className={`text-sm font-medium ${
                textColor || 'text-amber-600'
              }`}>
                Geenss Archenti
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ScrolltellingSection;
