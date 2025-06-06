import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

const Testimonials = () => {
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    email: '',
    content: '',
    rating: 5
  });

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'María Elena Vargas',
      role: 'Coleccionista de Arte',
      content: 'Las obras de Geenss trascienden lo visual. Cada pieza es un portal hacia dimensiones inexploradas de la conciencia amazónica. La técnica con pigmentos naturales crea una vibración única.',
      rating: 5,
      date: '2024-02-15'
    },
    {
      id: '2',
      name: 'Dr. Carlos Reynoso',
      role: 'Curador de Arte Latinoamericano',
      content: 'El trabajo de Geenss Archenti representa una nueva generación de artistas que logran fusionar tradición ancestral con expresión contemporánea. Su uso de pigmentos naturales es magistral.',
      rating: 5,
      date: '2024-01-28'
    },
    {
      id: '3',
      name: 'Ana Sofia Mueller',
      role: 'Directora Muma Gallery',
      content: 'Geenss tiene la capacidad única de canalizar visiones profundas en obras que hablan directamente al alma. Su arte no solo se observa, se experimenta.',
      rating: 5,
      date: '2024-03-05'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTestimonial.name && newTestimonial.content) {
      toast.success('¡Gracias por tu testimonio! Será revisado antes de publicar.');
      setNewTestimonial({ name: '', email: '', content: '', rating: 5 });
    }
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Testimonios
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lo que dicen coleccionistas, curadores y amantes del arte sobre las obras de Geenss Archenti
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <Quote className="w-8 h-8 text-amber-600 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-2">
                {renderStars(testimonial.rating)}
              </div>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(testimonial.date).toLocaleDateString('es')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Comparte tu Experiencia
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Tu nombre"
                value={newTestimonial.name}
                onChange={(e) => setNewTestimonial({...newTestimonial, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                placeholder="Tu email (opcional)"
                value={newTestimonial.email}
                onChange={(e) => setNewTestimonial({...newTestimonial, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Calificación
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewTestimonial({...newTestimonial, rating: star})}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${star <= newTestimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Comparte tu experiencia con las obras de Geenss..."
              value={newTestimonial.content}
              onChange={(e) => setNewTestimonial({...newTestimonial, content: e.target.value})}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              required
            />

            <button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar Testimonio
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;