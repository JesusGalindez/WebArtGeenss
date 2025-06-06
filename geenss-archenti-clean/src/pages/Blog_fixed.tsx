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
      title: 'El Proceso Creativo: Conectando con los Abuelos de la Selva',
      excerpt: 'Una reflexión profunda sobre cómo los espíritus ancestrales guían mi arte visionario.',
      content: 'En cada trazo, en cada pigmento natural que aplico sobre el lienzo, siento la presencia de los abuelos de la selva. Estas entidades ancestrales que habitan en el corazón de la Amazonía peruana no son solo inspiración; son colaboradores silenciosos en mi proceso creativo.',
      date: '2024-03-15',
      readTime: '8 min',
      image: '/images/geenss_obras_1.jpg'
    },
    {
      id: '2',
      title: 'Pigmentos Sagrados: La Alquimia de la Naturaleza',
      excerpt: 'Descubre los secretos detrás de los pigmentos naturales que dan vida a mis obras.',
      content: 'El chuchuwasi, la sangre de grado, el achiote y el azafrán no son simples colorantes. Son medicina, son historia, son la esencia misma de la tierra que nos nutre. Cada pigmento lleva consigo milenios de sabiduría ancestral.',
      date: '2024-03-08',
      readTime: '6 min',
      image: '/images/scrolltelling_1_inicios_pigmentos.png'
    },
    {
      id: '3',
      title: 'Visiones de Ayahuasca: Arte como Portal Dimensional',
      excerpt: 'Cómo las ceremonias sagradas transforman mi percepción y se reflejan en el arte.',
      content: 'La ayahuasca abre portales hacia dimensiones donde el tiempo se disuelve y los colores cobran vida propia. En estos estados expandidos de conciencia, recibo las visiones que luego se materializan en mis pinturas.',
      date: '2024-02-28',
      readTime: '10 min',
      image: '/images/scrolltelling_2_inicios_visiones.png'
    }
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Por favor ingresa tu email');
      return;
    }
    
    // Simulación de suscripción
    toast.success('¡Gracias por suscribirte! Recibirás nuestras actualizaciones.');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reflexiones profundas sobre el proceso creativo, la conexión espiritual 
              y los secretos del arte visionario amazónico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button
                    onClick={() => setSelectedPost(post.id)}
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Leer más →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Suscríbete a nuestro Newsletter
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Recibe reflexiones exclusivas sobre arte, espiritualidad y el proceso creativo 
              directamente en tu inbox.
            </p>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Suscribirse
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
