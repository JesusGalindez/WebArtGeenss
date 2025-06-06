import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, X, CreditCard, Package } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useAppStore } from '../stores/useAppStore';

interface Product {
  id: string;
  title: string;
  image: string;
  originalPrice: number;
  printPrice: number;
  description: string;
  inStock: boolean;
  originalAvailable: boolean;
}

const Shop = () => {
  const { 
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal 
  } = useAppStore();
  
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const products: Product[] = [
    {
      id: 'abuelo-sagrado',
      title: 'El Abuelo Sagrado',
      image: '/images/gallery_abuelo_1.png',
      originalPrice: 3500,
      printPrice: 150,
      description: 'Una representación de la sabiduría ancestral amazónica con pigmentos naturales.',
      inStock: true,
      originalAvailable: true
    },
    {
      id: 'guardiana-plantas',
      title: 'Guardiana de las Plantas',
      image: '/images/gallery_guardiana_plantas.png',
      originalPrice: 2800,
      printPrice: 120,
      description: 'La protectora de las plantas sagradas en técnica de pigmentos amazónicos.',
      inStock: true,
      originalAvailable: true
    },
    {
      id: 'ceremonia-sagrada',
      title: 'Ceremonia Sagrada',
      image: '/images/gallery_ceremonia_sagrada.png',
      originalPrice: 4200,
      printPrice: 180,
      description: 'Vista íntima de una ceremonia ancestral con pigmentos naturales mixtos.',
      inStock: true,
      originalAvailable: false
    },
    {
      id: 'vision-ancestral',
      title: 'Visión Ancestral I',
      image: '/images/geenss_obras_1.jpg',
      originalPrice: 2200,
      printPrice: 100,
      description: 'Primera exploración en la serie de visiones con pigmentos amazónicos.',
      inStock: true,
      originalAvailable: true
    },
    {
      id: 'espiritu-selva',
      title: 'Espíritu de la Selva',
      image: '/images/geenss_obras_2.jpg',
      originalPrice: 2600,
      printPrice: 110,
      description: 'El espíritu protector de la Amazonía con azafrán y chuchuwasi.',
      inStock: true,
      originalAvailable: true
    }
  ];

  const handleAddToCart = (product: Product, type: 'original' | 'print') => {
    const price = type === 'original' ? product.originalPrice : product.printPrice;
    addToCart({
      id: `${product.id}-${type}`,
      title: `${product.title} - ${type === 'original' ? 'Original' : 'Impresión'}`,
      price,
      image: product.image,
      type
    });
    toast.success(`${product.title} agregado al carrito`);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('El carrito está vacío');
      return;
    }
    setShowCheckout(true);
  };

  const processPayment = () => {
    // Simular procesamiento de pago
    toast.success('¡Compra realizada con éxito!');
    clearCart();
    setShowCheckout(false);
    setShowCart(false);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = getCartTotal();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Tienda Galería
            </h1>
            <p className="text-xl text-gray-600">
              Obras originales e impresiones de alta calidad
            </p>
          </div>

          {/* Cart Button */}
          <button
            onClick={() => setShowCart(true)}
            className="relative p-4 rounded-full bg-white hover:bg-gray-100 text-gray-900 transition-all shadow-lg"
          >
            <ShoppingCart size={24} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </button>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300`}
            >
              {/* Product Image */}
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                      Agotado
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {product.title}
                </h3>
                
                <p className={`text-sm mb-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {product.description}
                </p>

                {/* Pricing Options */}
                <div className="space-y-4">
                  {/* Original Artwork */}
                  {product.originalAvailable && (
                    <div className={`p-4 rounded-lg border ${
                      isDarkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`font-medium ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          Original
                        </span>
                        <span className="text-2xl font-bold text-amber-500">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <button
                        onClick={() => handleAddToCart(product, 'original')}
                        disabled={!product.inStock}
                        className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 text-white py-2 rounded-lg font-medium transition-colors"
                      >
                        Agregar al Carrito
                      </button>
                    </div>
                  )}

                  {/* Print */}
                  <div className={`p-4 rounded-lg border ${
                    isDarkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-medium ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Impresión
                      </span>
                      <span className="text-2xl font-bold text-green-500">
                        ${product.printPrice}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(product, 'print')}
                      disabled={!product.inStock}
                      className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white py-2 rounded-lg font-medium transition-colors"
                    >
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowCart(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`fixed right-0 top-0 h-full w-96 z-50 ${
                isDarkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-2xl overflow-y-auto`}
            >
              {/* Cart Header */}
              <div className={`flex items-center justify-between p-6 border-b ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <h2 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Carrito ({cartItemsCount})
                </h2>
                <button
                  onClick={() => setShowCart(false)}
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                  }`}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="p-6">
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <Package size={48} className={`mx-auto mb-4 ${
                      isDarkMode ? 'text-gray-600' : 'text-gray-400'
                    }`} />
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                      El carrito está vacío
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className={`flex items-center space-x-4 p-4 rounded-lg ${
                          isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h3 className={`font-medium text-sm ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {item.title}
                          </h3>
                          <p className={`text-lg font-bold ${
                            item.type === 'original' ? 'text-amber-500' : 'text-green-500'
                          }`}>
                            ${item.price.toLocaleString()}
                          </p>
                          
                          <div className="flex items-center space-x-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className={`p-1 rounded ${
                                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                              }`}
                            >
                              <Minus size={16} />
                            </button>
                            <span className={`px-2 ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className={`p-1 rounded ${
                                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                              }`}
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 p-1"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4 text-xl font-bold text-gray-900">
                    <span>Total:</span>
                    <span>${cartTotal.toLocaleString()}</span>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <CreditCard size={20} />
                      <span>Proceder al Pago</span>
                    </span>
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className={`max-w-md w-full rounded-2xl p-8 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="text-center">
                <CreditCard size={64} className="mx-auto mb-4 text-amber-500" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Checkout Demo
                </h3>
                <p className={`mb-6 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Total: ${cartTotal.toLocaleString()}
                </p>
                
                <div className="space-y-4">
                  <button
                    onClick={processPayment}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-semibold"
                  >
                    Procesar Pago
                  </button>
                  
                  <button
                    onClick={() => setShowCheckout(false)}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      isDarkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
