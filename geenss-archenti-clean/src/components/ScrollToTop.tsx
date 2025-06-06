import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Asegurar que se ejecute después del render con múltiples intentos
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    };

    // Ejecutar inmediatamente
    scrollToTop();
    
    // Ejecutar después de un pequeño delay para asegurar
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 50);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
