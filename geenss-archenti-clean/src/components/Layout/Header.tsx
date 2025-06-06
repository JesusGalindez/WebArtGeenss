import React from 'react';
import { Menu, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAppStore } from '../../stores/useAppStore';

const Header = () => {
  const { setSideMenuOpen, cartItems } = useAppStore();
  
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md border-b bg-white/80 border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/images/avatar_geenss.png"
              alt="Geenss Archenti"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-amber-500"
            />
            <div className="hidden xs:block sm:block">
              <h1 className="text-sm sm:text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Geenss Archenti
              </h1>
              <p className="text-xs sm:text-xs text-gray-600 hidden sm:block">
                Arte Visionario Amazónico
              </p>
            </div>
          </Link>

          {/* Right Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Cart Icon with Badge - Optimizado para touch */}
            {cartItemsCount > 0 && (
              <Link
                to="/tienda"
                className="relative p-3 sm:p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <ShoppingCart size={20} className="sm:w-5 sm:h-5" />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 sm:w-5 sm:h-5 flex items-center justify-center font-medium">
                  {cartItemsCount}
                </span>
              </Link>
            )}

            {/* Menu Button - Touch optimizado */}
            <button
              onClick={() => setSideMenuOpen(true)}
              className="p-3 sm:p-2 rounded-lg transition-colors hover:bg-gray-100 active:bg-gray-200 text-gray-700 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Abrir menú"
            >
              <Menu size={24} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
