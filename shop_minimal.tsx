import React from 'react';

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Tienda Galería</h1>
        <p className="text-xl text-gray-600 mb-8">
          Obras originales e impresiones de alta calidad disponibles próximamente
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-gray-900 mb-2">Obras Originales</h3>
            <p className="text-gray-600">Piezas únicas con pigmentos naturales</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-gray-900 mb-2">Impresiones</h3>
            <p className="text-gray-600">Reproducciones de alta calidad</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-gray-900 mb-2">Envío Mundial</h3>
            <p className="text-gray-600">Entrega segura internacionalmente</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
