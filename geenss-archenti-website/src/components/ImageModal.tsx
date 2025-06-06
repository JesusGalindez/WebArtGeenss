import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  description?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ 
  isOpen, 
  onClose, 
  image, 
  title, 
  description 
}) => {
  const [zoom, setZoom] = React.useState(1);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setZoom(1);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-[90vh] mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent p-6">
              <div className="flex items-center justify-between text-white">
                <div>
                  <h2 className="text-2xl font-bold">{title}</h2>
                  {description && (
                    <p className="text-gray-200 mt-1">{description}</p>
                  )}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-6 right-6 z-10 flex items-center space-x-2 bg-black/70 rounded-lg p-2">
              <button
                onClick={handleZoomOut}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                disabled={zoom <= 0.5}
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={resetZoom}
                className="px-3 py-2 text-white text-sm hover:bg-white/20 rounded-lg transition-colors"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                disabled={zoom >= 3}
              >
                <ZoomIn size={20} />
              </button>
            </div>

            {/* Image Container */}
            <div className="overflow-auto max-h-[90vh] flex items-center justify-center p-16">
              <motion.img
                src={image}
                alt={title}
                className="max-w-full max-h-full object-contain cursor-pointer"
                style={{ transform: `scale(${zoom})` }}
                transition={{ duration: 0.2 }}
                onClick={resetZoom}
                onDoubleClick={handleZoomIn}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
