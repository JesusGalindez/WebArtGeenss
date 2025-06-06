import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GalleryPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  const galleryImages = [
    {
      src: '/images/gallery_abuelo_1.png',
      title: 'El Abuelo Sagrado',
      year: '2023',
      technique: 'Pigmentos naturales sobre lienzo'
    },
    {
      src: '/images/gallery_guardiana_plantas.png',
      title: 'Guardiana de las Plantas',
      year: '2023',
      technique: 'Chuchuwasi y sangre de grado'
    },
    {
      src: '/images/gallery_ceremonia_sagrada.png',
      title: 'Ceremonia Sagrada',
      year: '2024',
      technique: 'Achiote y tierra natural'
    },
    {
      src: '/images/geenss_obras_1.jpg',
      title: 'Visión Ancestral',
      year: '2022',
      technique: 'Pigmentos amazónicos'
    },
    {
      src: '/images/geenss_obras_2.jpg',
      title: 'Espíritu de la Selva',
      year: '2023',
      technique: 'Azafrán y chuchuwasi'
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="py-20 overflow-hidden bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Galería de Arte
          </h2>
          <p className="text-xl text-gray-600">
            Explora las obras visionarias que conectan con la sabiduría ancestral
          </p>
        </motion.div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative">
          <motion.div
            style={{ x }}
            className="flex space-x-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className={`relative overflow-hidden rounded-2xl shadow-xl ${
'bg-white'
                }`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.year}</p>
                      <p className="text-xs opacity-75">{image.technique}</p>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-4">
                    <h3 className={`text-lg font-bold mb-1 ${
'text-gray-900'
                    }`}>
                      {image.title}
                    </h3>
                    <p className={`text-sm ${
'text-gray-600'
                    }`}>
                      {image.year} • {image.technique}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/galeria"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 group"
          >
            <span>Ver Galería Completa</span>
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
