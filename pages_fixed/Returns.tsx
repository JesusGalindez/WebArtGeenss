import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Shield, AlertTriangle, Mail } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Política de Devoluciones
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Información sobre devoluciones, garantías y cuidado de las obras de arte
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <AlertTriangle className="w-12 h-12 text-red-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Obras Originales</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-red-600">No admiten devolución</p>
                <p className="text-sm leading-relaxed">
                  Las obras originales son piezas únicas creadas con pigmentos naturales amazónicos. 
                  Debido a su naturaleza artística y artesanal, no pueden ser reemplazadas ni devueltas.
                </p>
                <p className="text-sm leading-relaxed">
                  Cada obra incluye fotografías detalladas y descripción completa para que puedas 
                  tomar una decisión informada antes de la compra.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <RotateCcw className="w-12 h-12 text-green-500 mb-6" />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Impresiones</h2>
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-green-600">Devolución en 14 días</p>
                <p className="text-sm leading-relaxed">
                  Las impresiones pueden ser devueltas dentro de 14 días naturales desde la fecha 
                  de recepción, siempre que estén en perfecto estado.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Sin daños ni marcas</li>
                  <li>• Embalaje original</li>
                  <li>• Gastos de devolución por cuenta del comprador</li>
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
          >
            <div className="text-center mb-8">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Garantía de Calidad</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Obras Originales</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Garantía de autenticidad</li>
                  <li>• Certificado firmado por el artista</li>
                  <li>• Técnica con pigmentos naturales verificada</li>
                  <li>• Reposición en caso de daño durante envío</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Impresiones</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Papel de alta calidad garantizado</li>
                  <li>• Colores fieles a la obra original</li>
                  <li>• Resistencia a la decoloración</li>
                  <li>• Reimpresión en caso de defectos de calidad</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-amber-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Proceso de Devolución
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contacto</h3>
                <p className="text-sm text-gray-700">
                  Envía un email explicando el motivo de la devolución dentro de los 14 días
                </p>
              </div>
              <div className="text-center">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Autorización</h3>
                <p className="text-sm text-gray-700">
                  Recibirás instrucciones y número de autorización de devolución
                </p>
              </div>
              <div className="text-center">
                <div className="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Envío</h3>
                <p className="text-sm text-gray-700">
                  Empaca cuidadosamente y envía con el número de autorización
                </p>
              </div>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-amber-200">
              <Mail className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <p className="text-gray-700">
                ¿Necesitas iniciar una devolución? 
                <br />
                <span className="font-semibold">Contáctanos para obtener asistencia personalizada</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Returns;