import React from 'react';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Testimonios
        </h1>
        <p className="text-xl text-gray-600">
          Página en desarrollo
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {t('testimonials.title')}
          </h1>
          <p className={`text-xl mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experiencias y reflexiones de quienes han conectado con el arte visionario
          </p>

          <button
            onClick={() => setShowAddForm(true)}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 group"
          >
            <span className="flex items-center space-x-2">
              <MessageSquare size={20} />
              <span>{t('testimonials.addTestimonial')}</span>
            </span>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className={`text-center p-6 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <div className="text-3xl font-bold text-amber-500 mb-2">50+</div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Testimonios Recibidos
            </div>
          </div>
          <div className={`text-center p-6 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <div className="text-3xl font-bold text-amber-500 mb-2">5.0</div>
            <div className={`flex justify-center mb-2`}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Calificación Promedio
            </div>
          </div>
          <div className={`text-center p-6 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <div className="text-3xl font-bold text-amber-500 mb-2">12</div>
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Países Representados
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-100'
              }`}
            >
              {/* Quote Icon */}
              <Quote 
                className={`absolute top-4 right-4 w-8 h-8 opacity-20 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
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

              {/* Message */}
              <p className={`text-lg mb-6 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                "{testimonial.message}"
              </p>

              {/* Author */}
              <div className={`border-t pt-4 ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
                    <User size={20} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
                  </div>
                  <div>
                    <p className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {testimonial.role}
                    </p>
                    <p className={`text-xs ${
                      isDarkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {testimonial.location} • {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 opacity-10">
                <img 
                  src="/images/decorative_pigment_dots.png" 
                  alt="Decorative"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add Testimonial Modal */}
      <AnimatePresence>
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAddForm(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-md w-full rounded-2xl p-8 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-2xl`}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('testimonials.addTestimonial')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('testimonials.name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Profesión/Rol
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Ej: Artista, Coleccionista, etc."
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Ubicación
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Ciudad, País"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('testimonials.message')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Comparte tu experiencia con el arte de Geenss..."
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Send size={20} />
                      <span>{t('testimonials.submit')}</span>
                    </span>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonials;
