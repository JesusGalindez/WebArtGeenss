import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin, Clock, ExternalLink, X } from 'lucide-react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useAppStore } from '../stores/useAppStore';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  city: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  ticketUrl?: string;
  image: string;
  type: 'upcoming' | 'past';
}

const Events = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useAppStore();
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [showMap, setShowMap] = useState(false);

  const events: Event[] = [
    {
      id: '1',
      title: 'Exposición: Visiones de la Selva',
      description: 'Una muestra completa del arte visionario amazónico de Geenss Archenti, featuring sus obras más representativas creadas con pigmentos naturales.',
      date: '2024-07-15',
      time: '19:00',
      venue: 'Galería Muma',
      address: 'Kreuzbergstr. 56',
      city: 'Berlín',
      country: 'Alemania',
      coordinates: { lat: 52.4983, lng: 13.4168 },
      ticketUrl: 'https://mumagallery.com/events',
      image: '/images/gallery_abuelo_1.png',
      type: 'upcoming'
    },
    {
      id: '2',
      title: 'Taller: Pigmentos Naturales Amazónicos',
      description: 'Aprende las técnicas ancestrales de preparación de pigmentos naturales y su aplicación en el arte visionario.',
      date: '2024-08-10',
      time: '14:00',
      venue: 'Centro Cultural Amazónico',
      address: 'Jr. Putumayo 245',
      city: 'Iquitos',
      country: 'Perú',
      coordinates: { lat: -3.7437, lng: -73.2516 },
      image: '/images/scrolltelling_1_inicios_pigmentos.png',
      type: 'upcoming'
    },
    {
      id: '3',
      title: 'Arte Sagrado en LatAm ARTE',
      description: 'Participación especial en la feria de arte latinoamericano con una selección de obras chamánicas.',
      date: '2024-09-20',
      time: '10:00',
      venue: 'LatAm ARTE Gallery',
      address: 'Calle de Artistas 123',
      city: 'Buenos Aires',
      country: 'Argentina',
      coordinates: { lat: -34.6037, lng: -58.3816 },
      ticketUrl: 'https://latamarte.com/events',
      image: '/images/gallery_ceremonia_sagrada.png',
      type: 'upcoming'
    },
    {
      id: '4',
      title: 'Retrospectiva: 3 Años de Arte Visionario',
      description: 'Una mirada retrospectiva a los primeros tres años de trabajo artístico de Geenss en El Castillo de Lamas.',
      date: '2024-03-15',
      time: '18:30',
      venue: 'Casa de la Cultura',
      address: 'Plaza de Armas s/n',
      city: 'Tarapoto',
      country: 'Perú',
      coordinates: { lat: -6.4869, lng: -76.3581 },
      image: '/images/scrolltelling_3_inicios_primeras_obras.png',
      type: 'past'
    },
    {
      id: '5',
      title: 'Ceremonia de Arte y Naturaleza',
      description: 'Evento especial combinando arte visionario con ceremonia de conexión con plantas maestras.',
      date: '2024-01-20',
      time: '16:00',
      venue: 'Maloka Sagrada',
      address: 'Comunidad Shipibo Km 15',
      city: 'Pucallpa',
      country: 'Perú',
      coordinates: { lat: -8.3791, lng: -74.5539 },
      image: '/images/gallery_guardiana_plantas.png',
      type: 'past'
    }
  ];

  const filteredEvents = events.filter(event => event.type === activeTab);

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const defaultCenter = {
    lat: -8.3791,
    lng: -74.5539
  };

  return (
    <div className={`min-h-screen py-8 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <LoadScript googleMapsApiKey="AIzaSyBWXNE96Eb23e16DCw7Zfb9rkYwxRiTUfQ">
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
              {t('events.title')}
            </h1>
            <p className={`text-xl ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Exposiciones, talleres y ceremonias de arte visionario
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className={`inline-flex rounded-lg p-1 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-8 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'upcoming'
                    ? 'bg-amber-500 text-white shadow-md'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {t('events.upcoming')}
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-8 py-3 rounded-md font-medium transition-all ${
                  activeTab === 'past'
                    ? 'bg-amber-500 text-white shadow-md'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {t('events.past')}
              </button>
            </div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <AnimatePresence>
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group cursor-pointer ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                  } rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {event.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className={`flex items-center space-x-2 text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar size={16} />
                        <span>{event.date}</span>
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>

                      <div className={`flex items-center space-x-2 text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MapPin size={16} />
                        <span>{event.city}, {event.country}</span>
                      </div>
                    </div>

                    <p className={`text-sm leading-relaxed mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {event.description.substring(0, 120)}...
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-amber-500 font-medium text-sm group-hover:text-amber-600 transition-colors">
                        Ver detalles →
                      </span>
                      
                      {event.ticketUrl && activeTab === 'upcoming' && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Entradas disponibles
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`rounded-2xl shadow-xl overflow-hidden ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className={`text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Ubicaciones de Eventos
              </h2>
              <p className={`mt-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Explora las ubicaciones donde se realizan las exposiciones y talleres
              </p>
            </div>

            <div className="h-96">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={defaultCenter}
                zoom={2}
                options={{
                  styles: isDarkMode ? [
                    {
                      "elementType": "geometry",
                      "stylers": [{ "color": "#242424" }]
                    },
                    {
                      "elementType": "labels.text.stroke",
                      "stylers": [{ "color": "#242424" }]
                    },
                    {
                      "elementType": "labels.text.fill",
                      "stylers": [{ "color": "#746855" }]
                    }
                  ] : []
                }}
              >
                {events.map((event) => (
                  <Marker
                    key={event.id}
                    position={event.coordinates}
                    onClick={() => setSelectedEvent(event)}
                    icon={{
                      url: activeTab === 'upcoming' && event.type === 'upcoming' 
                        ? 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="15" fill="#f59e0b" stroke="#fff" stroke-width="3"/>
                            <text x="20" y="25" text-anchor="middle" fill="white" font-size="12" font-weight="bold">📅</text>
                          </svg>
                        `)
                        : 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                          <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="15" fill="#6b7280" stroke="#fff" stroke-width="3"/>
                            <text x="20" y="25" text-anchor="middle" fill="white" font-size="12" font-weight="bold">📚</text>
                          </svg>
                        `)
                    }}
                  />
                ))}
              </GoogleMap>
            </div>
          </motion.div>
        </div>

        {/* Event Detail Modal */}
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedEvent(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-2xl`}
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Image */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <h2 className={`text-3xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {selectedEvent.title}
                      </h2>
                      <button
                        onClick={() => setSelectedEvent(null)}
                        className={`p-2 rounded-lg transition-colors ${
                          isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                        }`}
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div className={`flex items-center space-x-3 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <Calendar size={20} />
                        <span>{selectedEvent.date} a las {selectedEvent.time}</span>
                      </div>

                      <div className={`flex items-start space-x-3 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <MapPin size={20} className="mt-1" />
                        <div>
                          <p className="font-medium">{selectedEvent.venue}</p>
                          <p className="text-sm">{selectedEvent.address}</p>
                          <p className="text-sm">{selectedEvent.city}, {selectedEvent.country}</p>
                        </div>
                      </div>
                    </div>

                    <p className={`leading-relaxed ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {selectedEvent.description}
                    </p>

                    <div className="flex space-x-4">
                      {selectedEvent.ticketUrl && selectedEvent.type === 'upcoming' && (
                        <a
                          href={selectedEvent.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                        >
                          <ExternalLink size={20} />
                          <span>{t('events.getTickets')}</span>
                        </a>
                      )}
                      
                      <button
                        onClick={() => {
                          const url = `https://maps.google.com/?q=${selectedEvent.coordinates.lat},${selectedEvent.coordinates.lng}`;
                          window.open(url, '_blank');
                        }}
                        className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                          isDarkMode
                            ? 'bg-gray-700 hover:bg-gray-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                        }`}
                      >
                        <MapPin size={20} />
                        <span>{t('events.viewLocation')}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </LoadScript>
    </div>
  );
};

export default Events;
