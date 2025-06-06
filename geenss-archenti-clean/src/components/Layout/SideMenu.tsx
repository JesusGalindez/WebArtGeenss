import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart } from 'lucide-react';

import { Link, useLocation } from 'react-router-dom';
import { useAppStore } from '../../stores/useAppStore';

const SideMenu = () => {
  const location = useLocation();
  const { 
    isSideMenuOpen, 
    setSideMenuOpen, 
    cartItems 
  } = useAppStore();

  const navigationItems = [
    { path: '/', name: 'Historia' },
    { path: '/galeria', name: 'Galería' },
    { path: '/tienda', name: 'Tienda Galería' },
    { path: '/blog', name: 'Blog' },
    { path: '/eventos', name: 'Eventos' },
    { path: '/testimonios', name: 'Testimonios' },
    { path: '/contacto', name: 'Contacto' }
  ];



  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AnimatePresence>
      {isSideMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSideMenuOpen(false)}
          />
          
          {/* Side Menu - Responsivo */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-80 sm:w-80 md:w-96 z-50 bg-black text-white shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white">Geenss Archenti</h2>
              <button
                onClick={() => setSideMenuOpen(false)}
                className="p-3 sm:p-2 rounded-lg hover:bg-gray-800 active:bg-gray-700 transition-colors text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setSideMenuOpen(false)}
                      className={`block p-4 sm:p-3 rounded-lg transition-colors font-medium min-h-[48px] flex items-center ${
                        location.pathname === item.path
                          ? 'bg-amber-500 text-black'
                          : 'text-white hover:bg-gray-800 active:bg-gray-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Instagram Link */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href="https://instagram.com/geenss.af"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 sm:p-3 rounded-lg hover:bg-gray-800 active:bg-gray-700 transition-colors font-medium text-white min-h-[48px] flex items-center"
                >
                  Instagram
                </a>
              </div>
            </nav>

            {/* Cart Summary */}
            {cartItemsCount > 0 && (
              <div className="p-6 border-t border-gray-700">
                <Link
                  to="/tienda"
                  onClick={() => setSideMenuOpen(false)}
                  className="flex items-center justify-between p-4 sm:p-3 bg-amber-500 text-black rounded-lg hover:bg-amber-600 active:bg-amber-700 transition-colors min-h-[48px]"
                >
                  <div className="flex items-center space-x-2">
                    <ShoppingCart size={20} />
                    <span className="font-medium">Carrito</span>
                  </div>
                  <span className="bg-black text-white px-2 py-1 rounded-full text-sm">
                    {cartItemsCount}
                  </span>
                </Link>
              </div>
            )}


          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
