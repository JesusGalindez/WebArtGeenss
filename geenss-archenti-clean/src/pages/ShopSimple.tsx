import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Package, Check } from 'lucide-react';
import { useAppStore } from '../stores/useAppStore';

interface Product {
  id: string;
  title: string;
  type: 'original' | 'print';
  price: number;
  image: string;
  description: string;
  available: boolean;
  dimensions?: string;
}

const ShopSimple = () => {
  const { cartItems, addToCart } = useAppStore();

  const products: Product[] = [
    {
      id: '1',
      title: 'El Abuelo Sagrado',
      type: 'original',
      price: 2500,
      image: '/images/gallery_abuelo_1.png',
      description: 'Obra original única, pintada con pigmentos naturales amazónicos.',
      available: true,
      dimensions: '120 x 80 cm'
    },
    {
      id: '2',
      title: 'Guardiana de las Plantas',
      type: 'original',
      price: 2200,
      image: '/images/gallery_guardiana_plantas.png',
      description: 'Representación de la conexión espiritual con la naturaleza.',
      available: true,
      dimensions: '100 x 70 cm'
    },
    {
      id: '3',
      title: 'Ceremonia Sagrada',
      type: 'original',
      price: 3500,
      image: '/images/gallery_ceremonia_sagrada.png',
      description: 'Escena ceremonial amazónica con técnicas ancestrales.',
      available: false,
      dimensions: '150 x 100 cm'
    },
    {
      id: '4',
      title: 'El Abuelo Sagrado - Impresión',
      type: 'print',
      price: 150,
      image: '/images/gallery_abuelo_1.png',
      description: 'Impresión de alta calidad en papel de arte.',
      available: true,
      dimensions: '60 x 40 cm'
    },
    {
      id: '5',
      title: 'Guardiana de las Plantas - Impresión',
      type: 'print',
      price: 120,
      image: '/images/gallery_guardiana_plantas.png',
      description: 'Impresión premium con acabado mate.',
      available: true,
      dimensions: '50 x 35 cm'
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
  };

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
            Tienda Galería
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obras originales e impresiones de alta calidad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
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

                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                {product.dimensions && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <Package size={16} />
                    <span>{product.dimensions}</span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
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
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.available}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                    product.available
                      ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg hover:shadow-xl'
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Información de Envío
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nacional</h3>
                <p>Envío gratuito en órdenes superiores a $500</p>
                <p>Tiempo de entrega: 3-5 días hábiles</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Internacional</h3>
                <p>Envío disponible a todo el mundo</p>
                <p>Tiempo de entrega: 7-14 días hábiles</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Embalaje</h3>
                <p>Embalaje especializado para obras de arte</p>
                <p>Protección garantizada durante el transporte</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ShopSimple;