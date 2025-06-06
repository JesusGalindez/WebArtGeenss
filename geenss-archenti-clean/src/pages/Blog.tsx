import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Mail, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}

const Blog = () => {
  const [email, setEmail] = useState('');
  const [selectedPost, setSelectedPost] = useState<string | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'La Alquimia de los Pigmentos Naturales',
      excerpt: 'Reflexiones sobre el proceso de transformación de los elementos de la selva en colores vivos que narran historias ancestrales.',
      content: `En cada gota de sangre de grado, en cada partícula de chuchuwasi, existe una historia milenaria esperando ser contada. El proceso de creación comienza mucho antes de que el pincel toque el lienzo.

La preparación de los pigmentos es un ritual en sí mismo. Caminar por la selva en busca de los árboles adecuados, sentir su energía, pedirles permiso para tomar parte de su esencia. Este respeto hacia la naturaleza se convierte en la base energética de cada obra.

Cuando muelo el achiote entre mis manos, puedo sentir las generaciones de artistas indígenas que han usado este mismo pigmento. Es una conexión que trasciende el tiempo y el espacio, una conversación silenciosa con los antepasados.

El arte visionario no es solo una técnica, es una forma de vida. Cada color que extraigo de la selva lleva consigo la sabiduría de los abuelos, los secretos de las plantas maestras, y la energía vital de la Pachamama.

Esta búsqueda constante de autenticidad en mis materiales me ha llevado a desarrollar una paleta única, donde cada tono tiene su propia vibración, su propia medicina. El resultado no es solo una pintura, sino un portal hacia la cosmovisión amazónica.`,
      date: '2024-05-15',
      readTime: '5 min',
      image: '/images/scrolltelling_1_inicios_pigmentos.png'
    },
    {
      id: '2',
      title: 'El Silencio Creativo de la Selva',
      excerpt: 'Cómo el silencio profundo de la Amazonía se convierte en el lienzo invisible donde nacen las visiones más poderosas.',
      content: `Existe un silencio en la selva que no es ausencia de sonido, sino plenitud de presencia. Es en este espacio sagrado donde las visiones más profundas emergen, donde los colores adquieren vida propia y las formas se revelan como mensajes ancestrales.

Durante mis estancias en lo profundo de la Amazonía, he aprendido que el verdadero arte visionario nace del silencio interior. No es un silencio vacío, sino uno lleno de escucha, de receptividad hacia las voces sutiles de la naturaleza.

Las plantas maestras han sido mis guías en este proceso. Cada ceremonia es una lección de humildad, una invitación a dejar que fluya a través de mí algo más grande que mi personalidad individual. En estos momentos, no soy yo quien pinta, sino que me convierto en un canal para que la sabiduría ancestral se exprese.

He descubierto que las mejores obras nacen cuando logro alcanzar este estado de silencio activo, donde la mente analítica se aquieta y permite que emerja la intuición profunda. Es ahí donde los colores eligen sus propias combinaciones y las formas se organizan según una geometría sagrada que escape a la lógica ordinaria.

Este proceso me ha enseñado que el arte verdadero no es una creación del ego, sino una revelación del alma colectiva, una expresión de la consciencia universal que conecta todas las formas de vida.`,
      date: '2024-04-28',
      readTime: '7 min',
      image: '/images/scrolltelling_2_inicios_visiones.png'
    },
    {
      id: '3',
      title: 'Geometrías Sagradas en la Cosmovisión Amazónica',
      excerpt: 'Explorando los patrones matemáticos universales que se revelan en las visiones chamánicas y su manifestación en el arte.',
      content: `Los patrones geométricos que emergen en mis visiones no son casuales. Son expresiones de un orden cósmico que los pueblos amazónicos han reconocido durante milenios. Estas geometrías sagradas son el lenguaje visual del espíritu, la manera en que la consciencia universal se comunica con nosotros.

Cuando trabajo con plantas maestras, frecuentemente aparecen mandalas complejos, espirales infinitas, y fractales que se extienden hacia dimensiones invisibles. Estos patrones no son alucinaciones, sino revelaciones de la estructura profunda de la realidad.

En la tradición shipibo, estos diseños se conocen como 'kené', y se consideran los caminos visuales de la energía. Cada línea, cada curva, tiene un propósito específico: guiar, sanar, proteger o conectar con diferentes aspectos de la consciencia.

Mi trabajo como artista visionario consiste en traducir estas experiencias multidimensionales al lenguaje bidimensional del lienzo. Es un desafío constante: ¿cómo capturar la infinitud en un espacio limitado? ¿Cómo hacer que los colores vibren con la misma intensidad que tienen en la visión?

He desarrollado técnicas específicas para esto, trabajando con capas de pigmentos que crean profundidades ópticas, utilizando la repetición de patrones para sugerir movimiento, y empleando contrastes cromáticos que activan diferentes centros energéticos en quien observa la obra.

El resultado es un arte que no solo se ve, sino que se siente, que no solo decora, sino que transforma el espacio y la consciencia de quienes interactúan con él.`,
      date: '2024-04-10',
      readTime: '6 min',
      image: '/images/scrolltelling_6_maestria.png'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Por favor ingresa tu email');
      return;
    }
    toast.success('¡Suscripción exitosa! Recibirás nuestras reflexiones creativas.');
    setEmail('');
  };

  const selectedPostData = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null;

  return (
    <div className={`min-h-screen py-8 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {t('blog.title')}
          </h1>
          <p className={`text-xl mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Reflexiones sobre el proceso creativo y la sabiduría ancestral
          </p>

          {/* Newsletter Subscription */}
          <div className={`max-w-md mx-auto p-6 rounded-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <div className="flex items-center justify-center mb-4">
              <Mail className="text-amber-500 mr-2" size={24} />
              <h3 className={`text-lg font-semibold ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {t('blog.subscribe')}
              </h3>
            </div>
            <p className={`text-sm mb-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('blog.subscribeText')}
            </p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('blog.email')}
                className={`flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        {!selectedPost ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`group cursor-pointer ${
                  isDarkMode ? 'bg-gray-800' : 'bg-white'
                } rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300`}
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className={`flex items-center space-x-4 mb-3 text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className={`text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h2>

                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {post.excerpt}
                  </p>

                  <div className="mt-4 text-amber-500 font-medium text-sm group-hover:text-amber-600 transition-colors">
                    Leer más →
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          // Single Post View
          selectedPostData && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className={`mb-8 flex items-center space-x-2 text-amber-500 hover:text-amber-600 transition-colors`}
              >
                ← Volver a todos los posts
              </button>

              <article className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-2xl shadow-xl overflow-hidden`}>
                <div className="aspect-[21/9] overflow-hidden">
                  <img
                    src={selectedPostData.image}
                    alt={selectedPostData.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8">
                  <div className={`flex items-center space-x-4 mb-6 text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{selectedPostData.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{selectedPostData.readTime}</span>
                    </div>
                  </div>

                  <h1 className={`text-3xl lg:text-4xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedPostData.title}
                  </h1>

                  <div className={`prose prose-lg max-w-none ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {selectedPostData.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-6 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Author Bio */}
                  <div className={`mt-12 pt-8 border-t flex items-center space-x-4 ${
                    isDarkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <img
                      src="/images/avatar_geenss.png"
                      alt="Geenss Archenti"
                      className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                    />
                    <div>
                      <h3 className={`font-bold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Geenss Archenti
                      </h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Artista visionario amazónico especializado en arte chamánico y sagrado
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Blog;
