import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Package, Check, Eye, ShoppingBag } from 'lucide-react';
import { useAppStore } from '../stores/useAppStore';
import ImageModal from '../components/ImageModal';
import CartSidebar from '../components/CartSidebar';

interface Product {
  id: string;
  title: string;
  type: 'original' | 'print';
  price: number;
  image: string;
  description: string;
  available: boolean;
  dimensions?: string;
  materials?: string;
  technique?: string;
  year?: string;
  images?: string[]; // Multiple images for the product
}

const ShopAdvanced = () => {
  const { cartItems, addToCart } = useAppStore();
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products: Product[] = [
    {
      id: '1',
      title: 'El Abuelo Sagrado',
      type: 'original',
      price: 2500,
      image: '/images/gallery_abuelo_1.png',
      description: 'Obra original única, pintada con pigmentos naturales amazónicos. Una representación profunda de la sabiduría ancestral.',
      available: true,
      dimensions: '120 x 80 cm',
      materials: 'Pigmentos naturales: chuchuwasi, sangre de grado, achiote',
      technique: 'Pintura sobre lienzo con técnicas ancestrales',
      year: '2023',
      images: ['/images/gallery_abuelo_1.png', '/images/geenss_obras_1.jpg']
    },
    {
      id: '2',
      title: 'Guardiana de las Plantas',
      type: 'original',
      price: 2200,
      image: '/images/gallery_guardiana_plantas.png',
      description: 'Representación de la conexión espiritual con la naturaleza y las plantas maestras.',
      available: true,
      dimensions: '100 x 70 cm',
      materials: 'Pigmentos naturales: azafrán, tierra natural, achiote',
      technique: 'Técnica mixta con pigmentos amazónicos',
      year: '2023',
      images: ['/images/gallery_guardiana_plantas.png', '/images/geenss_obras_2.jpg']
    },
    {
      id: '3',
      title: 'Ceremonia Sagrada',
      type: 'original',
      price: 3500,
      image: '/images/gallery_ceremonia_sagrada.png',
      description: 'Escena ceremonial amazónica con técnicas ancestrales. Obra de gran formato y complejidad.',
      available: false,
      dimensions: '150 x 100 cm',
      materials: 'Pigmentos naturales completos: chuchuwasi, sangre de grado, achiote, azafrán',
      technique: 'Técnica ancestral completa',
      year: '2024',
      images: ['/images/gallery_ceremonia_sagrada.png', '/images/geenss_obras_3.jpeg']
    },
    {
      id: '4',
      title: 'El Abuelo Sagrado - Impresión Premium',
      type: 'print',
      price: 150,
      image: '/images/gallery_abuelo_1.png',
      description: 'Impresión de alta calidad en papel de arte premium con acabado mate.',
      available: true,
      dimensions: '60 x 40 cm',
      materials: 'Papel de arte Hahnemühle, tintas pigmentadas',
      technique: 'Impresión digital de alta calidad',
      year: '2023',
      images: ['/images/gallery_abuelo_1.png']
    },
    {
      id: '5',
      title: 'Guardiana de las Plantas - Impresión',
      type: 'print',
      price: 120,
      image: '/images/gallery_guardiana_plantas.png',
      description: 'Impresión premium con acabado mate, perfecta para coleccionistas.',
      available: true,
      dimensions: '50 x 35 cm',
      materials: 'Papel de arte premium, tintas de archivo',
      technique: 'Impresión giclée de museo',
      year: '2023',
      images: ['/images/gallery_guardiana_plantas.png']
    },
    {
      id: '6',
      title: 'Visiones Amazónicas - Impresión',
      type: 'print',
      price: 95,
      image: '/images/geenss_obras_4.jpg',
      description: 'Serie de visiones inspiradas en la cosmovisión amazónica.',
      available: true,
      dimensions: '40 x 30 cm',
      materials: 'Papel de arte, tintas UV resistentes',
      technique: 'Impresión de alta calidad',
      year: '2023',
      images: ['/images/geenss_obras_4.jpg']
    }
  ];

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      type: product.type
    });
    
    // Feedback visual
    const button = document.getElementById(`add-to-cart-${product.id}`);
    if (button) {
      button.textContent = '¡Agregado!';
      setTimeout(() => {
        button.textContent = 'Agregar al Carrito';
      }, 1500);
    }
  };

  const handleImageClick = (product: Product) => {
    setSelectedImage({
      image: product.image,
      title: product.title,
      description: `${product.description} | ${product.dimensions} | ${product.materials}`
    });
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Cart Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute top-0 right-0">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white px-4 sm:px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl min-h-[48px]"
              >
                <ShoppingBag size={20} />
                <span className="hidden sm:inline">Carrito</span>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tienda Galería
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obras originales e impresiones de alta calidad del arte visionario amazónico de Geenss Archenti
            </p>
          </motion.div>

          {/* Products Grid - Optimizado para móvil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => handleImageClick(product)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <button
                      onClick={() => handleImageClick(product)}
                      className="opacity-0 group-hover:opacity-100 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2"
                    >
                      <Eye size={18} />
                      <span>Ver en detalle</span>
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.type === 'original' 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {product.type === 'original' ? 'Original' : 'Impresión'}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Product Details */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    {product.dimensions && (
                      <div className="flex items-center space-x-2">
                        <Package size={14} />
                        <span>{product.dimensions}</span>
                      </div>
                    )}
                    {product.year && (
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Año:</span>
                        <span>{product.year}</span>
                      </div>
                    )}
                    {product.technique && (
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Técnica:</span>
                        <span className="truncate">{product.technique}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                    <div className={`flex items-center space-x-2 ${
                      product.available ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <Check size={16} />
                      <span className="text-sm font-medium">
                        {product.available ? 'Disponible' : 'Vendido'}
                      </span>
                    </div>
                  </div>

                  <button
                    id={`add-to-cart-${product.id}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.available}
                    className={`w-full py-3 sm:py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 min-h-[48px] ${
                      product.available
                        ? 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white shadow-lg hover:shadow-xl active:scale-95'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart size={20} />
                    <span>
                      {product.available ? 'Agregar al Carrito' : 'No Disponible'}
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Shipping Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Información de Envío y Garantías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="text-amber-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Envío Nacional</h3>
                <p>Envío gratuito en órdenes superiores a $500</p>
                <p>Tiempo de entrega: 3-5 días hábiles</p>
                <p>Embalaje especializado incluido</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Envío Internacional</h3>
                <p>Disponible a todo el mundo</p>
                <p>Tiempo de entrega: 7-14 días hábiles</p>
                <p>Seguimiento incluido</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Garantía</h3>
                <p>Certificado de autenticidad</p>
                <p>30 días para devoluciones</p>
                <p>Soporte post-venta incluido</p>
              </div>
            </div>
          </motion.div>

          {/* Artist Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <img
                src="/images/avatar_geenss.png"
                alt="Geenss Archenti"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nota del Artista</h3>
              <p className="text-gray-700 leading-relaxed">
                "Cada obra es un viaje espiritual que nace de la conexión profunda con los abuelos de la selva. 
                Utilizo pigmentos naturales amazónicos para crear arte que trasciende lo visual y toca el alma. 
                Cuando adquieres una de mis obras, no solo llevas arte a tu hogar, sino una pieza de la 
                sabiduría ancestral amazónica."
              </p>
              <p className="text-amber-600 font-medium mt-4">- Geenss Archenti Flores</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage.image}
          title={selectedImage.title}
          description={selectedImage.description}
        />
      )}

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
};

export default ShopAdvanced;
