import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';

const Privacy = () => {
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
            <Shield className="text-amber-500" size={32} />
            <h1 className={`text-3xl lg:text-4xl font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Política de Privacidad
            </h1>
          </div>
          
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Última actualización: Enero 2024
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
          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              1. Información que Recopilamos
            </h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                <strong>Información Personal:</strong> Recopilamos información que nos proporciona voluntariamente, como nombre, email, dirección de envío y teléfono cuando realiza una compra o se suscribe a nuestro newsletter.
              </p>
              <p>
                <strong>Información de Navegación:</strong> Utilizamos cookies para mejorar su experiencia de navegación, recordar preferencias de idioma y tema (modo oscuro/claro).
              </p>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              2. Uso de la Información
            </h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Utilizamos su información personal para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Procesar y enviar sus compras</li>
                <li>Comunicarnos sobre el estado de sus pedidos</li>
                <li>Enviar nuestro newsletter (solo si se suscribe)</li>
                <li>Responder a sus consultas y comentarios</li>
                <li>Mejorar nuestros servicios y sitio web</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              3. Protección de Datos
            </h2>
            <p className={`leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos conexiones SSL para todas las transacciones.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              4. Compartir Información
            </h2>
            <p className={`leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              No vendemos, alquilamos ni compartimos su información personal con terceros, excepto cuando sea necesario para procesar sus pedidos (servicios de envío) o cuando sea requerido por ley.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              5. Cookies
            </h2>
            <p className={`leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Utilizamos cookies para mejorar su experiencia de navegación, mantener sus preferencias de idioma y tema, y recordar elementos en su carrito de compras. Puede desactivar las cookies en su navegador, aunque esto puede afectar la funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              6. Sus Derechos
            </h2>
            <div className={`space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acceder a la información personal que tenemos sobre usted</li>
                <li>Corregir datos inexactos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Darse de baja del newsletter en cualquier momento</li>
                <li>Presentar quejas ante las autoridades de protección de datos</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              7. Contacto
            </h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Para consultas sobre privacidad y protección de datos:</p>
              <p><strong>Email:</strong> geenss.af@gmail.com</p>
              <p><strong>WhatsApp:</strong> +51 987 654 321</p>
              <p><strong>Ubicación:</strong> Tarapoto, San Martín, Perú</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
