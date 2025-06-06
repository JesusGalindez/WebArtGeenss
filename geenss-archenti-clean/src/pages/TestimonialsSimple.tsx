import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, User, MapPin, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

const TestimonialsSimple = () => {
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    email: '',
    location: '',
    rating: 5,
    comment: ''
  });

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'María González',
      location: 'Lima, Perú',
      rating: 5,
      comment: 'Las obras de Geenss tienen una energía increíble. Cada vez que miro "El Abuelo Sagrado" siento una conexión profunda con la naturaleza. Es arte que trasciende lo visual.',
      date: '2024-03-10',
      verified: true
    },
    {
      id: '2',
      name: 'Carlos Ramírez',
      location: 'Madrid, España',
      rating: 5,
      comment: 'Compré una impresión de "Guardiana de las Plantas" y la calidad es excepcional. El arte de Geenss transmite la esencia mística de la Amazonía de manera única.',
      date: '2024-03-05',
      verified: true
    },
    {
      id: '3',
      name: 'Ana Lucía Torres',
      location: 'Bogotá, Colombia',
      rating: 5,
      comment: 'Como coleccionista de arte latinoamericano, puedo decir que el trabajo de Geenss es extraordinario. Sus pigmentos naturales crean texturas y colores únicos.',
      date: '2024-02-28',
      verified: true
    },
    {
      id: '4',
      name: 'James Mitchell',
      location: 'New York, USA',
      rating: 5,
      comment: 'I discovered Geenss\'s work through Instagram and immediately fell in love. The spiritual depth and technical mastery are remarkable. Highly recommended!',
      date: '2024-02-20',
      verified: true
    },
    {
      id: '5',
      name: 'Sophie Dubois',
      location: 'Paris, France',
      rating: 5,
      comment: 'L\'art de Geenss est magique. Ses œuvres capturent l\'essence de l\'Amazonie d\'une manière que je n\'avais jamais vue auparavant. Un artiste vraiment talentueux.',
      date: '2024-02-15',
      verified: true
    },
    {
      id: '6',
      name: 'Roberto Silva',
      location: 'São Paulo, Brasil',
      rating: 5,
      comment: 'A arte visionária do Geenss me tocou profundamente. Suas obras são pontes entre mundos, conectando o ancestral com o contemporâneo de forma sublime.',
      date: '2024-02-10',
      verified: true
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu testimonio! Será revisado y publicado pronto.');
    setNewTestimonial({
      name: '',
      email: '',
      location: '',
      rating: 5,
      comment: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewTestimonial({
      ...newTestimonial,
      [e.target.name]: e.target.value
    });
  };

  const averageRating = testimonials.reduce((acc, test) => acc + test.rating, 0) / testimonials.length;
  const uniqueCountries = new Set(testimonials.map(t => t.location.split(', ')[1])).size;

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Testimonios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Lo que dicen coleccionistas y amantes del arte sobre mi trabajo
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Star className="text-yellow-400 fill-current" size={24} />
                <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
              </div>
              <p className="text-gray-600">Calificación Promedio</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-gray-900 mb-2">{testimonials.length}+</div>
              <p className="text-gray-600">Testimonios Verificados</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-2xl font-bold text-gray-900 mb-2">{uniqueCountries}</div>
              <p className="text-gray-600">Países Representados</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Testimonials Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <User className="text-amber-600" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin size={14} />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                    {testimonial.verified && (
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Verificado
                      </div>
                    )}
                  </div>

                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-amber-200" size={20} />
                    <p className="text-gray-700 leading-relaxed pl-4">
                      {testimonial.comment}
                    </p>
                  </div>

                  <div className="mt-4 text-sm text-gray-500">
                    {new Date(testimonial.date).toLocaleDateString('es-ES')}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Add Testimonial Form */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 sticky top-20"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Comparte tu Experiencia
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={newTestimonial.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email (privado)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={newTestimonial.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                    Ubicación
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={newTestimonial.location}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Ciudad, País"
                  />
                </div>

                <div>
                  <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                    Calificación
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    value={newTestimonial.rating}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ Excelente</option>
                    <option value={4}>⭐⭐⭐⭐ Muy Bueno</option>
                    <option value={3}>⭐⭐⭐ Bueno</option>
                    <option value={2}>⭐⭐ Regular</option>
                    <option value={1}>⭐ Malo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                    Tu Testimonio
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={newTestimonial.comment}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Comparte tu experiencia con el arte de Geenss..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Enviar Testimonio
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                Tu testimonio será revisado antes de ser publicado. No compartimos tu email.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSimple;