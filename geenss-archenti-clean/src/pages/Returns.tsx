import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { RotateCcw, ArrowLeft, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';

const Returns = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useAppStore();

  return (
    <div className={`min-h-screen py-8 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/"
            className={`inline-flex items-center space-x-2 text-amber-500 hover:text-amber-600 transition-colors`}
          >
            <ArrowLeft size={20} />
            <span>Volver al inicio</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-2xl shadow-xl p-8 mb-8`}
        >
          <div className="flex items-center space-x-3 mb-6">
            <RotateCcw className="text-amber-500" size={32} />
            <h1 className={`text-3xl lg:text-4xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Política de Devoluciones
            </h1>
          </div>
          
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Garantía de satisfacción en todas nuestras compras
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-2xl shadow-xl p-8 space-y-8`}
        >
          {/* Return Policies by Product Type */}
          <section>
            <h2 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Políticas por Tipo de Producto
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg border ${
                isDarkMode ? 'border-red-600 bg-red-900/20' : 'border-red-200 bg-red-50'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <XCircle className="text-red-500" size={24} />
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Obras Originales
                  </h3>
                </div>
                <div className={`space-y-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p className="font-medium text-red-600 dark:text-red-400">
                    NO se aceptan devoluciones
                  </p>
                  <p>
                    Las obras originales son piezas únicas de arte visionario. Todas las ventas son finales debido a la naturaleza exclusiva y personal de cada creación.
                  </p>
                  <p>
                    <strong>Garantía:</strong> Certificado de autenticidad incluido
                  </p>
                </div>
              </div>

              <div className={`p-6 rounded-lg border ${
                isDarkMode ? 'border-green-600 bg-green-900/20' : 'border-green-200 bg-green-50'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="text-green-500" size={24} />
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Impresiones de Arte
                  </h3>
                </div>
                <div className={`space-y-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <p className="font-medium text-green-600 dark:text-green-400">
                    Devoluciones aceptadas
                  </p>
                  <p>
                    <strong>Plazo:</strong> 30 días desde la recepción
                  </p>
                  <p>
                    <strong>Condición:</strong> Estado perfecto, sin daños
                  </p>
                  <p>
                    <strong>Reembolso:</strong> 100% del precio (excluye envío)
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Proceso de Devolución
            </h2>
            <div className={`space-y-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className="grid md:grid-cols-3 gap-6">
                <div className={`text-center p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <div className="text-amber-500 text-2xl font-bold mb-2">1</div>
                  <h4 className="font-semibold mb-2">Contacto</h4>
                  <p className="text-sm">Contacta con nosotros dentro de 30 días por email o WhatsApp</p>
                </div>
                <div className={`text-center p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <div className="text-amber-500 text-2xl font-bold mb-2">2</div>
                  <h4 className="font-semibold mb-2">Autorización</h4>
                  <p className="text-sm">Recibirás un número de autorización y instrucciones de envío</p>
                </div>
                <div className={`text-center p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <div className="text-amber-500 text-2xl font-bold mb-2">3</div>
                  <h4 className="font-semibold mb-2">Reembolso</h4>
                  <p className="text-sm">Procesamos el reembolso dentro de 5-7 días hábiles</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Condiciones para Devolución
            </h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className={`p-4 rounded-lg border-l-4 border-amber-500 ${
                isDarkMode ? 'bg-gray-700/50' : 'bg-amber-50'
              }`}>
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-amber-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold mb-2">Requisitos Importantes</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• La impresión debe estar en condiciones perfectas</li>
                      <li>• Sin dobladuras, rayas, o marcas de cualquier tipo</li>
                      <li>• Embalaje original si es posible</li>
                      <li>• Certificado de impresión incluido</li>
                      <li>• Motivo válido para la devolución</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Motivos Válidos para Devolución
            </h2>
            <div className={`grid md:grid-cols-2 gap-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <div>
                <h4 className="font-semibold text-green-600 mb-2">✓ Motivos Aceptados</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Daños durante el envío</li>
                  <li>• Error en el pedido (nuestro error)</li>
                  <li>• Defectos de impresión</li>
                  <li>• Insatisfacción con la calidad</li>
                  <li>• Cambio de opinión (hasta 30 días)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-2">✗ Motivos No Aceptados</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Daños por mal uso</li>
                  <li>• Exposición a humedad/sol</li>
                  <li>• Modificaciones o alteraciones</li>
                  <li>• Después de 30 días</li>
                  <li>• Sin comunicación previa</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Costos de Devolución
            </h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                <strong>Defectos o Errores Nuestros:</strong> Nosotros cubrimos todos los costos de devolución y reembolsamos el envío original.
              </p>
              <p>
                <strong>Cambio de Opinión:</strong> El cliente es responsable de los costos de devolución. Recomendamos envío asegurado.
              </p>
              <p>
                <strong>Daños durante Envío:</strong> Cubierto por nuestro seguro. No hay costo adicional para el cliente.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Contacto para Devoluciones
            </h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Para iniciar una devolución:</p>
              <p><strong>Email:</strong> geenss.af@gmail.com (Asunto: "Solicitud de Devolución")</p>
              <p><strong>WhatsApp:</strong> +51 987 654 321</p>
              <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM (GMT-5)</p>
              <p className={`text-sm mt-4 p-3 rounded-lg ${
                isDarkMode ? 'bg-amber-900/20 text-amber-200' : 'bg-amber-50 text-amber-800'
              }`}>
                <strong>Importante:</strong> Incluye tu número de pedido y fotos del producto si reportas daños.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Returns;
