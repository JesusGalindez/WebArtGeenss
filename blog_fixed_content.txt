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
      title: 'El Arte de los Pigmentos Naturales',
      excerpt: 'Una exploración profunda sobre el uso de pigmentos amazónicos en mi proceso creativo.',
      content: `Los pigmentos naturales han sido mi compañía constante en este viaje artístico. Desde los primeros días en El Castillo de Lamas, donde descubrí la magia del chuchuwasi y la sangre de grado, hasta hoy, donde cada color cuenta una historia ancestral.

      El chuchuwasi, conocido como el árbol de la juventud, me proporciona tonos terrosos que hablan de la profundidad de la selva. Su corteza, macerada y preparada con paciencia, se convierte en un pigmento que no solo colorea, sino que transmite la energía misma del bosque.

      La sangre de grado, esa resina rojiza que brota del árbol herido como lágrimas de curación, ha sido mi color de la pasión y la transformación. En mis obras, representa la fuerza vital que conecta todas las formas de vida en la Amazonía.

      Cada pigmento requiere un ritual de preparación. No es solo mezclar colores; es invocar espíritus, conectar con ancestros, y permitir que la naturaleza guíe mi mano. Este proceso lento y meditativo es tan importante como el resultado final.`,
      date: '2024-01-15',
      readTime: '8 min',
      image: '/images/scrolltelling_1_inicios_pigmentos.png'
    },
    {
      id: '2',
      title: 'Visiones de la Ayahuasca en el Arte',
      excerpt: 'Cómo las ceremonias sagradas influencian y guían mi proceso artístico.',
      content: `Las ceremonias de ayahuasca han sido portales hacia dimensiones donde el arte cobra vida propia. En estos espacios sagrados, he recibido visiones que luego se materializan en mis lienzos como mapas de mundos paralelos.

      Durante una ceremonia particularmente intensa, vi claramente la serie "Los Abuelos". Eran seres ancestrales que me mostraban geometrías sagradas, patrones que contenían la sabiduría de miles de años. Estas visiones no son alucinaciones; son enseñanzas directas de los maestros vegetales.

      El proceso de traducir estas visiones al lienzo requiere un estado alterado de conciencia que mantengo a través de la meditación y el trabajo con plantas maestras. Cada pincelada es una oración, cada color una invocación.

      He aprendido que el arte visionario no es crear algo bonito para decorar paredes. Es un acto chamánico, una forma de sanación que transmite frecuencias específicas a quien observa la obra. Mis pinturas son portales, ventanas hacia los reinos que pocos han tenido el privilegio de visitar.`,
      date: '2024-02-01',
      readTime: '12 min',
      image: '/images/scrolltelling_2_inicios_visiones.png'
    },
    {
      id: '3',
      title: 'La Geometría Sagrada Amazónica',
      excerpt: 'Descubriendo los patrones matemáticos ocultos en la cosmovisión indígena.',
      content: `La geometría sagrada amazónica es un lenguaje universal que trasciende culturas y épocas. En mis obras, estos patrones emergen naturalmente, como si fueran códigos ancestrales esperando ser revelados.

      Los shipibo han sido mis maestros en este arte. Sus diseños, aparentemente decorativos, son en realidad mapas de conciencia, representaciones visuales de canciones sagradas llamadas icaros. Cada línea, cada curva, tiene un significado específico en el cosmos shamánico.

      En mi serie más reciente, he explorado cómo estos patrones se manifiestan durante los estados visionarios. Las serpientes cósmicas, los árboles de la vida, las escaleras celestiales - todos aparecen con una precisión matemática que desafía la lógica occidental.

      Lo fascinante es descubrir que estos mismos patrones aparecen en culturas de todo el mundo: en los mandalas tibetanos, en la arquitectura islámica, en el arte celta. Esto sugiere que existe un código universal de conciencia, accesible a través de los estados expandidos que las plantas maestras facilitan.`,
      date: '2024-02-20',
      readTime: '10 min',
      image: '/images/scrolltelling_6_maestria.png'
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('¡Suscrito al blog exitosamente!');
      setEmail('');
    }
  };

  const selectedPostData = selectedPost ? blogPosts.find(post => post.id === selectedPost) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {!selectedPost ? (
        // Blog List View
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Blog Artístico
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Reflexiones sobre el proceso creativo, las plantas maestras y el arte visionario amazónico
            </p>

            {/* Newsletter Subscription */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="text-center mb-6">
                <Mail className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Suscríbete al Blog
                </h3>
                <p className="text-gray-600">
                  Recibe nuevos artículos directamente en tu correo
                </p>
              </div>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Suscribirse
                </button>
              </form>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('es')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} lectura</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-amber-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      ) : (
        // Blog Post Detail View
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-8 text-amber-600 hover:text-amber-700 transition-colors"
            >
              ← Volver al blog
            </button>

            {selectedPostData && (
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={selectedPostData.image}
                    alt={selectedPostData.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedPostData.date).toLocaleDateString('es')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPostData.readTime} lectura</span>
                    </div>
                  </div>
                  
                  <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                    {selectedPostData.title}
                  </h1>
                  
                  <div className="prose prose-lg max-w-none text-gray-700">
                    {selectedPostData.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-6 leading-relaxed">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900 mb-2">
                        ¿Te gustó este artículo?
                      </p>
                      <p className="text-gray-600">
                        Suscríbete para recibir más contenido sobre arte visionario
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Blog;