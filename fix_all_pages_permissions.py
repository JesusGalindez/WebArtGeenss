#!/usr/bin/env python3
"""
Script para corregir todas las páginas que tienen problemas con useTranslation e isDarkMode
"""

import os
import subprocess
import shutil

def create_fixed_pages():
    """Crea versiones corregidas de todas las páginas problemáticas"""
    
    pages_to_fix = [
        'Events.tsx',
        'Testimonials.tsx', 
        'Terms.tsx',
        'Privacy.tsx',
        'Shipping.tsx',
        'Returns.tsx'
    ]
    
    base_path = '/workspace/geenss-archenti-website/src/pages'
    
    for page_file in pages_to_fix:
        page_name = page_file.replace('.tsx', '')
        
        # Crear contenido básico corregido para cada página
        fixed_content = create_page_content(page_name)
        
        # Escribir archivo corregido temporal
        temp_file = f'/workspace/{page_name}_fixed.tsx'
        with open(temp_file, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"✅ Creado contenido corregido para {page_file}")

def create_page_content(page_name):
    """Crea contenido corregido específico para cada página"""
    
    contents = {
        'Events': create_events_content(),
        'Testimonials': create_testimonials_content(),
        'Terms': create_terms_content(),
        'Privacy': create_privacy_content(),
        'Shipping': create_shipping_content(),
        'Returns': create_returns_content()
    }
    
    return contents.get(page_name, create_default_content(page_name))

def create_events_content():
    return """import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  status: 'upcoming' | 'past';
  link?: string;
}

const Events = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');

  const events: Event[] = [
    {
      id: '1',
      title: 'Exposición "Visiones Amazónicas"',
      description: 'Primera exposición individual en Europa mostrando la serie completa de Los Abuelos.',
      date: '2024-07-15',
      location: 'Muma Gallery, Berlín, Alemania',
      image: '/images/gallery_abuelo_1.png',
      status: 'upcoming',
      link: 'https://muma-gallery.com'
    },
    {
      id: '2',
      title: 'Taller "Pigmentos Naturales"',
      description: 'Taller intensivo sobre preparación y uso de pigmentos amazónicos.',
      date: '2024-08-20',
      location: 'Tarapoto, Perú',
      image: '/images/scrolltelling_1_inicios_pigmentos.png',
      status: 'upcoming'
    },
    {
      id: '3',
      title: 'Ceremonia de Arte Visionario',
      description: 'Exposición colectiva con artistas visionarios de América Latina.',
      date: '2024-03-10',
      location: 'LatAm Arte Gallery, Lima, Perú',
      image: '/images/gallery_ceremonia_sagrada.png',
      status: 'past'
    }
  ];

  const filteredEvents = events.filter(event => 
    filter === 'all' || event.status === filter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Eventos y Exposiciones
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Próximas exposiciones, talleres y encuentros relacionados con el arte visionario amazónico
          </p>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-lg transition-colors ${'bg-amber-600 hover:bg-amber-700 text-white'}`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-lg transition-colors ${'bg-green-600 hover:bg-green-700 text-white'}`}
            >
              Próximos
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-lg transition-colors ${'bg-gray-600 hover:bg-gray-700 text-white'}`}
            >
              Pasados
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                  event.status === 'upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {event.status === 'upcoming' ? 'Próximo' : 'Pasado'}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString('es')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Más información
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;"""

def create_testimonials_content():
    return """import React, { useState } from 'react';
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

export default Testimonials;"""

def create_terms_content():
    return """import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
            Términos y Condiciones
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
              <p className="mb-6">
                Al acceder y utilizar el sitio web de Geenss Archenti, usted acepta cumplir con estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Uso del Sitio Web</h2>
              <p className="mb-6">
                Este sitio web está destinado a proporcionar información sobre las obras de arte de Geenss Archenti y facilitar la compra de obras originales e impresiones. El uso del sitio debe ser únicamente para fines legales y de acuerdo con estos términos.
              </p>

              <h2 className="text-2xl font-bold mb-4">3. Propiedad Intelectual</h2>
              <p className="mb-6">
                Todas las obras de arte, imágenes, textos y contenido mostrado en este sitio web son propiedad exclusiva de Geenss Archenti. Está prohibida la reproducción, distribución o uso comercial sin autorización expresa por escrito.
              </p>

              <h2 className="text-2xl font-bold mb-4">4. Compras y Pagos</h2>
              <p className="mb-6">
                Los precios mostrados están en dólares estadounidenses e incluyen todos los impuestos aplicables. Los pagos se procesan de forma segura a través de plataformas certificadas. Las obras originales son únicas y no pueden ser reemplazadas.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Envíos y Entregas</h2>
              <p className="mb-6">
                Los tiempos de envío varían según la ubicación y el tipo de obra. Las obras originales requieren cuidados especiales de embalaje y pueden tomar entre 2-4 semanas para entrega internacional. Las impresiones se envían dentro de 7-10 días hábiles.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Política de Devoluciones</h2>
              <p className="mb-6">
                Las obras originales no admiten devolución debido a su naturaleza única. Las impresiones pueden ser devueltas dentro de 14 días si están en perfectas condiciones. Los gastos de envío de devolución corren por cuenta del comprador.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Limitación de Responsabilidad</h2>
              <p className="mb-6">
                Geenss Archenti no será responsable por daños indirectos, incidentales o consecuentes que puedan surgir del uso de este sitio web o de la compra de obras de arte.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Contacto</h2>
              <p className="mb-6">
                Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a través de la página de contacto de este sitio web.
              </p>

              <p className="text-sm text-gray-600 border-t pt-6 mt-8">
                Última actualización: Junio 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;"""

def create_privacy_content():
    return """import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
            Política de Privacidad
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
              <p className="mb-6">
                Recopilamos información que usted nos proporciona directamente, como cuando se suscribe a nuestro boletín, realiza una compra, o se pone en contacto con nosotros. Esto puede incluir su nombre, dirección de correo electrónico, dirección postal y información de pago.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Cómo Utilizamos su Información</h2>
              <p className="mb-6">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Procesar y completar sus pedidos</li>
                <li>Enviar comunicaciones sobre sus pedidos</li>
                <li>Responder a sus consultas y brindar soporte al cliente</li>
                <li>Enviar boletines informativos (si se ha suscrito)</li>
                <li>Mejorar nuestros servicios y sitio web</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Compartir Información</h2>
              <p className="mb-6">
                No vendemos, comercializamos o transferimos a terceros su información personal identificable, excepto cuando sea necesario para completar una transacción (como servicios de envío) o cuando lo requiera la ley.
              </p>

              <h2 className="text-2xl font-bold mb-4">4. Seguridad de los Datos</h2>
              <p className="mb-6">
                Implementamos medidas de seguridad apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
              <p className="mb-6">
                Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos que se almacenan en su dispositivo y nos ayudan a recordar sus preferencias.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Sus Derechos</h2>
              <p className="mb-6">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Acceder a la información personal que tenemos sobre usted</li>
                <li>Solicitar la corrección de información inexacta</li>
                <li>Solicitar la eliminación de su información personal</li>
                <li>Darse de baja de nuestras comunicaciones en cualquier momento</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">7. Contacto</h2>
              <p className="mb-6">
                Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos su información personal, puede contactarnos a través de nuestra página de contacto.
              </p>

              <p className="text-sm text-gray-600 border-t pt-6 mt-8">
                Última actualización: Junio 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;"""

def create_shipping_content():
    return """import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Clock, Globe } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Información de Envíos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre envíos, tiempos de entrega y cuidado de las obras
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <Package className="w-12 h-12 text-amber-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Obras Originales</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Embalaje especial con materiales de conservación</li>
              <li>• Certificado de autenticidad incluido</li>
              <li>• Seguro completo durante el transporte</li>
              <li>• Tiempo de preparación: 5-7 días</li>
              <li>• Envío internacional: 2-4 semanas</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <Truck className="w-12 h-12 text-amber-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Impresiones</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Impresión en papel de alta calidad</li>
              <li>• Embalaje protector estándar</li>
              <li>• Tiempo de preparación: 3-5 días</li>
              <li>• Envío nacional: 5-7 días</li>
              <li>• Envío internacional: 10-14 días</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="text-center mb-8">
            <Globe className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Envíos Internacionales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">América Latina</h3>
              <p className="text-gray-600 mb-2">7-14 días hábiles</p>
              <p className="text-sm text-gray-500">Envío estándar incluido</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">Norteamérica y Europa</h3>
              <p className="text-gray-600 mb-2">10-21 días hábiles</p>
              <p className="text-sm text-gray-500">Costos adicionales aplican</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">Asia y Oceanía</h3>
              <p className="text-gray-600 mb-2">14-28 días hábiles</p>
              <p className="text-sm text-gray-500">Consultar disponibilidad</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-amber-50 rounded-2xl p-8"
        >
          <div className="text-center mb-6">
            <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Notas Importantes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold mb-3">Cuidado Especial</h3>
              <p className="text-sm leading-relaxed">
                Las obras originales requieren cuidados especiales debido al uso de pigmentos naturales. 
                Cada pieza se embala individualmente con materiales de conservación para garantizar su 
                integridad durante el transporte.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Seguimiento</h3>
              <p className="text-sm leading-relaxed">
                Todos los envíos incluyen número de seguimiento. Recibirás notificaciones por email 
                sobre el estado de tu pedido desde la preparación hasta la entrega final.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Aduanas</h3>
              <p className="text-sm leading-relaxed">
                Para envíos internacionales, pueden aplicar aranceles o impuestos adicionales según 
                la legislación del país de destino. Estos costos no están incluidos en el precio de compra.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contacto</h3>
              <p className="text-sm leading-relaxed">
                ¿Tienes preguntas sobre tu envío? Contáctanos y te ayudaremos a resolver cualquier 
                duda sobre el proceso de entrega de tu obra.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shipping;"""

def create_returns_content():
    return """import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Shield, AlertTriangle, Mail } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Política de Devoluciones
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Información sobre devoluciones, garantías y cuidado de las obras de arte
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <AlertTriangle className="w-12 h-12 text-red-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Obras Originales</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-red-600">No admiten devolución</p>
                <p className="text-sm leading-relaxed">
                  Las obras originales son piezas únicas creadas con pigmentos naturales amazónicos. 
                  Debido a su naturaleza artística y artesanal, no pueden ser reemplazadas ni devueltas.
                </p>
                <p className="text-sm leading-relaxed">
                  Cada obra incluye fotografías detalladas y descripción completa para que puedas 
                  tomar una decisión informada antes de la compra.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <RotateCcw className="w-12 h-12 text-green-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Impresiones</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-green-600">Devolución en 14 días</p>
                <p className="text-sm leading-relaxed">
                  Las impresiones pueden ser devueltas dentro de 14 días naturales desde la fecha 
                  de recepción, siempre que estén en perfecto estado.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Sin daños ni marcas</li>
                  <li>• Embalaje original</li>
                  <li>• Gastos de devolución por cuenta del comprador</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
          >
            <div className="text-center mb-8">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Garantía de Calidad</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Obras Originales</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Garantía de autenticidad</li>
                  <li>• Certificado firmado por el artista</li>
                  <li>• Técnica con pigmentos naturales verificada</li>
                  <li>• Reposición en caso de daño durante envío</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Impresiones</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Papel de alta calidad garantizado</li>
                  <li>• Colores fieles a la obra original</li>
                  <li>• Resistencia a la decoloración</li>
                  <li>• Reimpresión en caso de defectos de calidad</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-amber-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Proceso de Devolución
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contacto</h3>
                <p className="text-sm text-gray-700">
                  Envía un email explicando el motivo de la devolución dentro de los 14 días
                </p>
              </div>
              <div className="text-center">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Autorización</h3>
                <p className="text-sm text-gray-700">
                  Recibirás instrucciones y número de autorización de devolución
                </p>
              </div>
              <div className="text-center">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Envío</h3>
                <p className="text-sm text-gray-700">
                  Empaca cuidadosamente y envía con el número de autorización
                </p>
              </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-amber-200">
              <Mail className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <p className="text-gray-700">
                ¿Necesitas iniciar una devolución? 
                <br />
                <span className="font-semibold">Contáctanos para obtener asistencia personalizada</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Returns;"""

def create_default_content(page_name):
    return f"""import React from 'react';
import {{ motion }} from 'framer-motion';

const {page_name} = () => {{
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            {page_name}
          </h1>
          <p className="text-xl text-gray-600">
            Página en desarrollo
          </p>
        </motion.div>
      </div>
    </div>
  );
}};

export default {page_name};"""

if __name__ == "__main__":
    create_fixed_pages()
    print("\n🎯 Todos los archivos corregidos creados exitosamente")
    print("📁 Archivos disponibles en /workspace/ con prefijo [nombre]_fixed.tsx")
