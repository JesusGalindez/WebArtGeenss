import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';

const TestimonialsBar = () => {

  const testimonials = [
    {
      text: "Las obras de Geenss me transportan a un estado de contemplación profunda. Es como si pudiera sentir la sabiduría ancestral emanando de cada trazo.",
      author: "María Fernández",
      role: "Coleccionista de Arte",
      rating: 5
    },
    {
      text: "La conexión con la naturaleza y los pigmentos naturales que utiliza Geenss es única. Su arte trasciende lo visual y toca el alma.",
      author: "Carlos Mendoza",
      role: "Curador de Arte",
      rating: 5
    },
    {
      text: "Cada obra es un portal a la cosmovisión amazónica. Geenss ha logrado capturar la esencia espiritual de la selva de manera extraordinaria.",
      author: "Ana Lucía Torres",
      role: "Crítica de Arte",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Testimonios
          </h2>
          <p className="text-xl text-gray-600">
            Lo que dicen quienes han experimentado el arte visionario
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-6 rounded-2xl shadow-xl bg-white border border-gray-100"
            >
              {/* Quote Icon */}
              <Quote 
                className="absolute top-4 right-4 w-8 h-8 opacity-20 text-gray-600"
              />

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg mb-6 leading-relaxed text-gray-700">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
              </div>

              {/* Elemento decorativo removido para diseño más limpio */}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/testimonios"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-gray-900 text-white hover:bg-gray-800"
          >
            <span>Ver Más Testimonios</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsBar;
