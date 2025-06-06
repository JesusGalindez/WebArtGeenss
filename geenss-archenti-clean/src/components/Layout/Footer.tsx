import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { 
  Instagram, 
  MessageSquare, 
  Mail, 
  Send,
  Heart,
  Shield,
  FileText
} from 'lucide-react';
import { toast } from 'react-hot-toast';


const Footer = () => {


  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast.error('Por favor ingresa tu email');
      return;
    }
    toast.success('¡Gracias por suscribirte!');
    setNewsletterEmail('');
  };

  const navigationLinks = [
    { name: 'Historia', path: '/' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Tienda Galería', path: '/tienda' },
    { name: 'Blog', path: '/blog' },
    { name: 'Eventos', path: '/eventos' },
    { name: 'Testimonios', path: '/testimonios' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/geenss.af',
      color: 'text-pink-500 hover:text-pink-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageSquare,
      url: 'https://wa.me/51987654321',
      color: 'text-green-500 hover:text-green-600'
    }
  ];

  const legalLinks = [
    {
      name: 'Términos y Condiciones',
      icon: FileText,
      path: '/terminos'
    },
    {
      name: 'Política de Privacidad',
      icon: Shield,
      path: '/privacidad'
    }
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(/images/background_pattern.png)',
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Separator */}
      <div className={`h-px ${
'bg-gradient-to-r from-transparent via-amber-600 to-transparent'
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content - Completamente responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              Enlaces Rápidos
            </h3>
            
            <nav className="space-y-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-sm transition-colors text-gray-600 hover:text-amber-600 py-1"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Column 2: Social Media + Legal Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Redes Sociales */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Síguenos
              </h3>
              
              <div className="space-y-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-sm transition-colors group text-gray-600 hover:text-gray-900"
                  >
                    <social.icon size={18} className={`${social.color} transition-colors`} />
                    <span className="group-hover:text-amber-600 transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
                
                <a
                  href="mailto:geenss.af@gmail.com"
                  className="flex items-center space-x-3 text-sm transition-colors group text-gray-600 hover:text-gray-900"
                >
                  <Mail size={18} className="text-blue-500 hover:text-blue-600 transition-colors" />
                  <span className="group-hover:text-amber-600 transition-colors">
                    Email
                  </span>
                </a>
              </div>
            </div>
            
            {/* Información Legal */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                Información Legal
              </h3>
              <div className="space-y-1">
                {legalLinks.map((legal) => (
                  <Link
                    key={legal.name}
                    to={legal.path}
                    className="block text-sm text-gray-600 hover:text-amber-600 transition-colors"
                  >
                    {legal.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Column 3: Newsletter Compacto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Newsletter Atractivo */}
            <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center">
                🎨 Únete a mi círculo artístico
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Descubre nuevas obras antes que nadie y recibe inspiración directa desde la Amazonía
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors bg-white text-gray-900 placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-2 text-sm rounded-md font-medium transition-all duration-200 flex items-center justify-center space-x-1"
                >
                  <span>🌟</span>
                  <span>Suscribirme Ahora</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Copyright Prominente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 pt-4 border-t border-gray-200 text-center"
        >
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-900">
              © 2024 Geenss Archenti. Todos los derechos reservados.
            </p>
            <p className="text-sm font-semibold text-amber-700">
              Arte Visionario Amazónico
            </p>
            <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
              Hecho con <Heart size={12} className="text-red-500 fill-red-500" /> para preservar la sabiduría ancestral
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
