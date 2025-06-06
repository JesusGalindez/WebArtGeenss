import React from 'react';
import ScrolltellingSection from './ScrolltellingSection';
import GalleryPreview from './GalleryPreview';
import TestimonialsBar from './TestimonialsBar';

const Scrolltelling = () => {

  const scrolltellingSections = [
    {
      sectionKey: 'inicios',
      title: 'Los Inicios',
      images: [
        '/images/scrolltelling_1_inicios_pigmentos.png',
        '/images/scrolltelling_2_inicios_visiones.png',
        '/images/scrolltelling_3_inicios_primeras_obras.png'
      ],
      texts: [
        'En El Castillo de Lamas, cerca de Tarapoto, comenzó todo. Los pigmentos naturales de la selva llamaron mi atención como una vocación sagrada.',
        'Las primeras visiones llegaron a través de la medicina ancestral, mostrándome mundos que nunca había imaginado, universos de color y forma.',
        'Mis primeras obras nacieron de esta conexión profunda con los abuelos de la selva, usando chuchuwasi, sangre de grado y tierra natural.'
      ],
      backgroundColor: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
      textColor: '#92400E'
    },
    {
      sectionKey: 'camino',
      title: 'El Camino',
      images: [
        '/images/scrolltelling_4_camino_exploracion.png',
        '/images/scrolltelling_5_camino_evolucion.png'
      ],
      texts: [
        'La exploración artística me llevó por senderos desconocidos, experimentando con técnicas ancestrales y materiales que la naturaleza ofrecía generosamente.',
        'Cada obra era una evolución, un diálogo entre mi alma y los espíritus de la selva, perfeccionando la técnica de los pigmentos naturales.'
      ],
      backgroundColor: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)',
      textColor: '#065F46'
    },
    {
      sectionKey: 'maestria',
      title: 'La Maestría',
      images: ['/images/scrolltelling_6_maestria.png'],
      texts: ['Tres años de trabajo continuo me llevaron a dominar la alquimia de los pigmentos naturales, creando un estilo único que rescata técnicas culturales ancestrales mientras explora nuevos horizontes del arte visionario.'],
      backgroundColor: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)',
      textColor: '#5B21B6'
    },
    {
      sectionKey: 'presente',
      title: 'El Presente',
      images: ['/images/scrolltelling_7_presente.png'],
      texts: ['Hoy, con representación internacional en galerías como Muma Gallery en Alemania y presencia en LatAm ARTE, mi arte sigue siendo un puente entre la sabiduría ancestral amazónica y la expresión contemporánea.'],
      backgroundColor: 'linear-gradient(135deg, #FEF2F2 0%, #FECACA 100%)',
      textColor: '#991B1B'
    }
  ];

  return (
    <div className="relative">
      {/* Scrolltelling Sections */}
      {scrolltellingSections.map((section, index) => (
        <div key={section.sectionKey} className="relative">
          <div
            style={{
              background: section.backgroundColor
            }}
            className="relative z-10"
          >
            <ScrolltellingSection
              sectionKey={section.sectionKey}
              title={section.title}
              images={section.images}
              texts={section.texts}
              textColor={section.textColor}
            />
          </div>
          
          {/* Separador entre secciones */}
          {index < scrolltellingSections.length - 1 && (
            <div className="h-20 bg-gradient-to-b from-transparent via-gray-50 to-transparent relative z-5" />
          )}
        </div>
      ))}

      {/* Gallery Preview Section */}
      <GalleryPreview />

      {/* Testimonials Bar */}
      <TestimonialsBar />
    </div>
  );
};

export default Scrolltelling;
