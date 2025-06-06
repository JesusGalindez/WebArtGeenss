import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Truck, ArrowLeft, Package, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';

const Shipping = () => {
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
            <Truck className="text-amber-500" size={32} />
            <h1 className={`text-3xl lg:text-4xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Política de Envíos
            </h1>
          </div>
          
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Información detallada sobre envíos nacionales e internacionales
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
          {/* Shipping Options */}
          <section>
            <h2 className={`text-2xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Opciones de Envío
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg border ${
                isDarkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <Package className="text-green-500" size={24} />
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Impresiones de Arte
                  </h3>
                </div>
                <div className={`space-y-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span><strong>Nacional:</strong> 3-7 días hábiles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span><strong>Internacional:</strong> 7-14 días hábiles</span>
                  </div>
                  <p><strong>Costo:</strong> $15 USD (nacional) / $25 USD (internacional)</p>
                </div>
              </div>

              <div className={`p-6 rounded-lg border ${
                isDarkMode ? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="text-amber-500" size={24} />
                  <h3 className={`text-lg font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Obras Originales
                  </h3>
                </div>
                <div className={`space-y-3 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span><strong>Nacional:</strong> 5-10 días hábiles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span><strong>Internacional:</strong> 10-21 días hábiles</span>
                  </div>
                  <p><strong>Costo:</strong> $50 USD (nacional) / $150 USD (internacional)</p>
                  <p><strong>Incluye:</strong> Seguro completo y embalaje especializado</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Procesamiento de Pedidos
            </h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                <strong>Tiempo de Procesamiento:</strong> Todos los pedidos se procesan dentro de 1-3 días hábiles después de la confirmación del pago.
              </p>
              <p>
                <strong>Preparación Especial:</strong> Las obras originales requieren preparación especial para el envío, incluyendo documentación para aduanas y embalaje artístico profesional.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Embalaje y Protección
            </h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                <strong>Obras Originales:</strong> Utilizamos embalaje especializado para arte con materiales de conservación, protección contra humedad y sistema de amortiguación multiple. Cada obra se embala individualmente por expertos.
              </p>
              <p>
                <strong>Impresiones:</strong> Se envían en tubos rígidos o envases planos dependiendo del tamaño, con protección contra dobleces y humedad.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Seguimiento y Entrega
            </h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                Todos los envíos incluyen número de seguimiento que se enviará por email una vez que el paquete sea despachado. Para obras originales, también proporcionamos actualizaciones durante el proceso de envío.
              </p>
              <p>
                <strong>Entrega:</strong> Se requiere firma para la entrega de obras originales. Si no está presente, el paquete será dejado en la oficina postal local para recogida.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Restricciones y Aduanas
            </h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                <strong>Documentación:</strong> Todas las obras incluyen certificado de origen y documentación artística requerida para el paso por aduanas.
              </p>
              <p>
                <strong>Impuestos y Aranceles:</strong> Los impuestos de importación y aranceles en el país de destino son responsabilidad del comprador.
              </p>
              <p>
                <strong>Restricciones:</strong> Verificamos las restricciones de importación antes del envío. Algunos países pueden requerir documentación adicional.
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Contacto para Envíos
            </h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Para consultas sobre envíos específicos:</p>
              <p><strong>Email:</strong> geenss.af@gmail.com</p>
              <p><strong>WhatsApp:</strong> +51 987 654 321</p>
              <p><strong>Horario:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM (GMT-5)</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Shipping;
