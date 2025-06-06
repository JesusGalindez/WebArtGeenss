import React, { useState } from 'react';
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

export default Events;