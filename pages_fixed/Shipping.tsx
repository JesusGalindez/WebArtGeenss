import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Clock, Globe } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Información de Envíos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre envíos, tiempos de entrega y cuidado de las obras
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <Package className="w-12 h-12 text-amber-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Obras Originales</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Embalaje especial con materiales de conservación</li>
              <li>• Certificado de autenticidad incluido</li>
              <li>• Seguro completo durante el transporte</li>
              <li>• Tiempo de preparación: 5-7 días</li>
              <li>• Envío internacional: 2-4 semanas</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <Truck className="w-12 h-12 text-amber-600 mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Impresiones</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Impresión en papel de alta calidad</li>
              <li>• Embalaje protector estándar</li>
              <li>• Tiempo de preparación: 3-5 días</li>
              <li>• Envío nacional: 5-7 días</li>
              <li>• Envío internacional: 10-14 días</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
        >
          <div className="text-center mb-8">
            <Globe className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Envíos Internacionales</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">América Latina</h3>
              <p className="text-gray-600 mb-2">7-14 días hábiles</p>
              <p className="text-sm text-gray-500">Envío estándar incluido</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">Norteamérica y Europa</h3>
              <p className="text-gray-600 mb-2">10-21 días hábiles</p>
              <p className="text-sm text-gray-500">Costos adicionales aplican</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-3">Asia y Oceanía</h3>
              <p className="text-gray-600 mb-2">14-28 días hábiles</p>
              <p className="text-sm text-gray-500">Consultar disponibilidad</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-amber-50 rounded-2xl p-8"
        >
          <div className="text-center mb-6">
            <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900">Notas Importantes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold mb-3">Cuidado Especial</h3>
              <p className="text-sm leading-relaxed">
                Las obras originales requieren cuidados especiales debido al uso de pigmentos naturales. 
                Cada pieza se embala individualmente con materiales de conservación para garantizar su 
                integridad durante el transporte.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Seguimiento</h3>
              <p className="text-sm leading-relaxed">
                Todos los envíos incluyen número de seguimiento. Recibirás notificaciones por email 
                sobre el estado de tu pedido desde la preparación hasta la entrega final.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Aduanas</h3>
              <p className="text-sm leading-relaxed">
                Para envíos internacionales, pueden aplicar aranceles o impuestos adicionales según 
                la legislación del país de destino. Estos costos no están incluidos en el precio de compra.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contacto</h3>
              <p className="text-sm leading-relaxed">
                ¿Tienes preguntas sobre tu envío? Contáctanos y te ayudaremos a resolver cualquier 
                duda sobre el proceso de entrega de tu obra.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shipping;