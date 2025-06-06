import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Mail } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  readTime: string;
}

const BlogSimple = () => {
  const [email, setEmail] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'El Poder de los Pigmentos Naturales Amazónicos',
      excerpt: 'Descubre cómo los pigmentos tradicionales de la Amazonía dan vida y autenticidad a mi arte visionario.',
      content: 'Los pigmentos naturales de la Amazonía no son solo colores, son la esencia misma de la selva plasmada en cada trazo. Chuchuwasi, sangre de grado, achiote y azafrán se convierten en mis aliados para crear obras que trascienden lo visual y tocan el alma...',
      date: '2024-03-15',
      image: '/images/scrolltelling_1_inicios_pigmentos.png',
      readTime: '5 min'
    },
    {
      id: '2',
      title: 'Los Abuelos de la Selva: Guardianes de la Sabiduría',
      excerpt: 'Una reflexión sobre los personajes centrales de mi obra y su significado en la cosmovisión amazónica.',
      content: 'En cada lienzo emergen figuras ancestrales que he denominado "Abuelos de la Selva". Estos seres no son simples personajes, sino depositarios de milenios de sabiduría amazónica. A través de sus rostros surgen las enseñanzas de plantas maestras y la conexión profunda con la madre tierra...',
      date: '2024-03-08',
      image: '/images/gallery_abuelo_1.png',
      readTime: '7 min'
    },
    {
      id: '3',
      title: 'Arte Visionario: Más Allá de la Realidad Visible',
      excerpt: 'Explorando las dimensiones del arte que trasciende lo físico y se adentra en lo espiritual.',
      content: 'El arte visionario no es solo una técnica o estilo, es una forma de percibir y transmitir realidades que van más allá de lo que nuestros ojos pueden ver. En cada obra busco capturar esas visiones que emergen en estados alterados de conciencia, ya sea a través de la meditación profunda o ceremonias ancestrales...',
      date: '2024-02-28',
      image: '/images/scrolltelling_2_inicios_visiones.png',
      readTime: '8 min'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por suscribirte! Recibirás notificaciones sobre nuevos artículos.');
    setEmail('');
  };

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 flex items-center space-x-2 text-amber-600 hover:text-amber-700 transition-colors"
            >
              <ArrowRight size={20} className="rotate-180" />
              <span>Volver al blog</span>
            </button>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{new Date(selectedPost.date).toLocaleDateString('es-ES')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>Geenss Archenti</span>
                  </div>
                  <span>{selectedPost.readTime} de lectura</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {selectedPost.title}
                </h1>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>{selectedPost.content}</p>
                  <p className="mt-6">
                    Este es solo el comienzo de esta reflexión. El arte visionario amazónico 
                    tiene mucho más que ofrecer y explorar. Cada obra es un portal hacia 
                    dimensiones de consciencia que nos invitan a reconectar con nuestra 
                    esencia más profunda.
                  </p>
                  <p className="mt-4">
                    Te invito a seguir este viaje conmigo, donde el arte se convierte en 
                    medicina para el alma y puente hacia la sabiduría ancestral de nuestros 
                    pueblos originarios.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/avatar_geenss.png"
                      alt="Geenss Archenti"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">Geenss Archenti</h3>
                      <p className="text-gray-600">
                        Artista visionario autodidacta de Tarapoto, especializado en arte 
                        chamánico amazónico usando pigmentos naturales tradicionales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reflexiones sobre arte, creatividad y la conexión espiritual con la naturaleza amazónica
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                      </div>
                      <span>{post.readTime} de lectura</span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-amber-600 hover:text-amber-700 transition-colors">
                      <span className="font-medium">Leer más</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Suscríbete al Blog
              </h3>
              <p className="text-gray-600 mb-6">
                Recibe notificaciones sobre nuevos artículos y reflexiones artísticas.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail size={20} />
                  <span>Suscribirse</span>
                </button>
              </form>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sobre el Artista
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="/images/avatar_geenss.png"
                  alt="Geenss Archenti"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Geenss Archenti</h4>
                  <p className="text-gray-600 text-sm">Artista Visionario</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Artista autodidacta de Tarapoto que fusiona técnicas ancestrales con visión 
                contemporánea, creando obras que conectan con la esencia espiritual amazónica.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSimple;