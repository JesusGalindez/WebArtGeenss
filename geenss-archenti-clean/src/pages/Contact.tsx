import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, Phone, Instagram, Globe } from 'lucide-react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor completa todos los campos requeridos');
      return;
    }

    setIsSubmitting(true);
    
    // Simular envío de formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('¡Mensaje enviado exitosamente! Te responderemos pronto.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Error al enviar el mensaje. Inténtalo nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Directo',
      description: 'geenss.af@gmail.com',
      action: () => window.location.href = 'mailto:geenss.af@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: '+51 987 654 321',
      action: () => window.open('https://wa.me/51987654321', '_blank'),
      color: 'text-green-500'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: '@geenss.af',
      action: () => window.open('https://instagram.com/geenss.af', '_blank'),
      color: 'text-pink-500'
    },
    {
      icon: Globe,
      title: 'Galería Online',
      description: 'Muma Gallery',
      action: () => window.open('https://mumagallery.com', '_blank'),
      color: 'text-purple-500'
    }
  ];

  return (
    <div className={`min-h-screen py-8 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
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
            {t('contact.title')}
          </h1>
          <p className={`text-xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Conecta conmigo para consultas sobre arte, exposiciones y colaboraciones
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl shadow-xl p-8`}
          >
            <h2 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Envíame un Mensaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {t('contact.name')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors ${
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
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('contact.subject')}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Ej: Consulta sobre obras disponibles"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {t('contact.message')} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Escribe tu mensaje aquí... Déjame saber si estás interesado en una obra específica, quieres más información sobre mi proceso creativo, o tienes alguna propuesta de colaboración."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:shadow-xl'
                } text-white`}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Send size={20} />
                  <span>
                    {isSubmitting ? 'Enviando...' : t('contact.send')}
                  </span>
                </span>
              </button>
            </form>

            {/* Security Note */}
            <div className={`mt-6 p-4 rounded-lg ${
              isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
            }`}>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <span className="font-medium">Nota:</span> Tu información está protegida y solo será utilizada para responder a tu consulta. Respondo personalmente a todos los mensajes.
              </p>
            </div>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl shadow-xl p-8`}>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Otras Formas de Contacto
              </h2>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.button
                    key={index}
                    onClick={method.action}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-colors ${
                      isDarkMode 
                        ? 'hover:bg-gray-700 border border-gray-700' 
                        : 'hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className={`p-3 rounded-full ${
                      isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <method.icon size={24} className={method.color} />
                    </div>
                    <div className="text-left">
                      <h3 className={`font-semibold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {method.title}
                      </h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {method.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Artist Info */}
            <div className={`${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl shadow-xl p-8`}>
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src="/images/avatar_geenss.png"
                  alt="Geenss Archenti"
                  className="w-20 h-20 rounded-full object-cover border-4 border-amber-500"
                />
                <div>
                  <h3 className={`text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Geenss Archenti Flores
                  </h3>
                  <p className={`${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Artista Visionario Amazónico
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className={`flex items-center space-x-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <MapPin size={20} className="text-amber-500" />
                  <span>Tarapoto, San Martín, Perú</span>
                </div>

                <div className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <p className="mb-3">
                    Especializado en arte visionario y chamánico, trabajo con pigmentos naturales de la Amazonía peruana para crear obras que conectan con la sabiduría ancestral.
                  </p>
                  <p>
                    Estoy disponible para consultas sobre obras disponibles, encargos especiales, talleres de pigmentos naturales, y colaboraciones artísticas.
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className={`${
              isDarkMode ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-amber-50 to-orange-50'
            } rounded-2xl p-6`}>
              <h3 className={`font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Tiempo de Respuesta
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Respondo a todos los mensajes dentro de 24-48 horas. Para consultas urgentes, contáctame directamente por WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
