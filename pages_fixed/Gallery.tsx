import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { X, Calendar, Ruler, Palette, Info } from 'lucide-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useAppStore } from '../stores/useAppStore';

interface Artwork {
  id: string;
  title: string;
  year: string;
  image: string;
  dimensions: string;
  technique: string;
  materials: string;
  description: string;
}

const Gallery = () => {
  const { selectedGalleryYear, setSelectedGalleryYear } = useAppStore();
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const artworks: Artwork[] = [
    {
      id: '1',
      title: 'El Abuelo Sagrado',
      year: '2024',
      image: '/images/gallery_abuelo_1.png',
      dimensions: '120 x 80 cm',
      technique: 'Pigmentos naturales sobre lienzo',
      materials: 'Chuchuwasi, sangre de grado, achiote',
      description: 'Una representación de la sabiduría ancestral amazónica, donde el Abuelo emerge como guardián de los conocimientos milenarios de la selva.'
    },
    {
      id: '2',
      title: 'Guardiana de las Plantas',
      year: '2024',
      image: '/images/gallery_guardiana_plantas.png',
      dimensions: '100 x 70 cm',
      technique: 'Pigmentos amazónicos sobre lienzo',
      materials: 'Chuchuwasi, sangre de grado, tierra natural',
      description: 'La guardiana protege y nutre las plantas sagradas, simbolizando la conexión profunda entre la humanidad y la naturaleza.'
    },
    {
      id: '3',
      title: 'Ceremonia Sagrada',
      year: '2023',
      image: '/images/gallery_ceremonia_sagrada.png',
      dimensions: '150 x 100 cm',
      technique: 'Pigmentos naturales mixtos',
      materials: 'Achiote, azafrán, tierra de la región',
      description: 'Una vista íntima de una ceremonia ancestral, capturando el momento de comunión entre los participantes y los espíritus de la selva.'
    },
    {
      id: '4',
      title: 'Visión Ancestral I',
      year: '2023',
      image: '/images/geenss_obras_1.jpg',
      dimensions: '90 x 60 cm',
      technique: 'Pigmentos amazónicos',
      materials: 'Chuchuwasi, sangre de grado',
      description: 'Primera exploración en la serie de visiones ancestrales, donde los colores naturales revelan verdades ocultas.'
    },
    {
      id: '5',
      title: 'Espíritu de la Selva',
      year: '2023',
      image: '/images/geenss_obras_2.jpg',
      dimensions: '110 x 75 cm',
      technique: 'Pigmentos naturales sobre lienzo',
      materials: 'Azafrán, chuchuwasi, tierra natural',
      description: 'El espíritu protector de la Amazonía se manifiesta a través de formas orgánicas y colores que vibran con energía vital.'
    },
    {
      id: '6',
      title: 'Conexión Cósmica',
      year: '2022',
      image: '/images/geenss_obras_3.jpeg',
      dimensions: '80 x 60 cm',
      technique: 'Pigmentos tradicionales',
      materials: 'Achiote, sangre de grado, azafrán',
      description: 'Una exploración de la interconexión entre el microcosmos y el macrocosmos a través de la perspectiva chamánica.'
    },
    {
      id: '7',
      title: 'Renacimiento Vegetal',
      year: '2022',
      image: '/images/geenss_obras_4.jpg',
      dimensions: '95 x 65 cm',
      technique: 'Pigmentos naturales mixtos',
      materials: 'Chuchuwasi, tierra natural, achiote',
      description: 'La regeneración constante de la vida en la selva, representada a través de formas que emergen y se transforman continuamente.'
    }
  ];

  const years = ['2024', '2023', '2022'];
  
  const filteredArtworks = selectedGalleryYear 
    ? artworks.filter(artwork => artwork.year === selectedGalleryYear)
    : artworks;

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Galería de Arte
          </h1>
          <p className="text-xl text-gray-600">
            Obras visionarias que revelan la sabiduría ancestral amazónica
          </p>
        </motion.div>

        {/* Year Filter */}
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
              onClick={() => setSelectedGalleryYear(null)}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                !selectedGalleryYear
                  ? 'bg-amber-500 text-white shadow-md'
                  : isDarkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Todos los años
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedGalleryYear(year)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  selectedGalleryYear === year
                    ? 'bg-amber-500 text-white shadow-md'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group cursor-pointer ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300`}
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <Zoom>
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Zoom>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                    <button
                      onClick={() => setSelectedArtwork(artwork)}
                      className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    >
                      <Info size={20} />
                    </button>
                  </div>
                </div>

                {/* Artwork Info */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {artwork.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className={`flex items-center space-x-2 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Calendar size={16} />
                      <span>{artwork.year}</span>
                    </div>
                    
                    <div className={`flex items-center space-x-2 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Ruler size={16} />
                      <span>{artwork.dimensions}</span>
                    </div>
                    
                    <div className={`flex items-center space-x-2 text-sm ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Palette size={16} />
                      <span>{artwork.technique}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedArtwork(artwork)}
                    className="mt-4 text-amber-500 hover:text-amber-600 font-medium transition-colors"
                  >
                    {t('gallery.viewDetails')}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Artwork Detail Modal */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArtwork(null)}
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
                <div className="aspect-[4/5] rounded-xl overflow-hidden">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <h2 className={`text-3xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {selectedArtwork.title}
                    </h2>
                    <button
                      onClick={() => setSelectedArtwork(null)}
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
                      <span className="font-medium">{t('gallery.year')}:</span>
                      <span>{selectedArtwork.year}</span>
                    </div>

                    <div className={`flex items-center space-x-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <Ruler size={20} />
                      <span className="font-medium">{t('gallery.dimensions')}:</span>
                      <span>{selectedArtwork.dimensions}</span>
                    </div>

                    <div className={`flex items-center space-x-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <Palette size={20} />
                      <span className="font-medium">{t('gallery.technique')}:</span>
                      <span>{selectedArtwork.technique}</span>
                    </div>

                    <div className={`space-y-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <p className="font-medium">{t('gallery.materials')}:</p>
                      <p>{selectedArtwork.materials}</p>
                    </div>

                    <div className={`space-y-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <p className="font-medium">{t('gallery.description')}:</p>
                      <p className="leading-relaxed">{selectedArtwork.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
