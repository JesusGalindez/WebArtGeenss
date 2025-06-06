import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Shop from './pages/ShopAdvanced';
import Blog from './pages/BlogSimple';
import Contact from './pages/ContactSimple';
import Testimonials from './pages/TestimonialsSimple';
// import Events from './pages/Events';
import Terms from './pages/Terms';
// import Privacy from './pages/Privacy';
// import Shipping from './pages/Shipping';
// import Returns from './pages/Returns';


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/testimonios" element={<Testimonials />} />
          <Route path="/eventos" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Eventos - Próximamente</h1></div>} />
          <Route path="/terminos" element={<Terms />} />
          <Route path="/privacidad" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Política de Privacidad - Próximamente</h1></div>} />
          <Route path="/envios" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Política de Envíos - Próximamente</h1></div>} />
          <Route path="/devoluciones" element={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><h1 className="text-4xl font-bold text-gray-900">Política de Devoluciones - Próximamente</h1></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
