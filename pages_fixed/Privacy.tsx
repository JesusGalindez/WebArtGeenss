import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
            Política de Privacidad
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
              <p className="mb-6">
                Recopilamos información que usted nos proporciona directamente, como cuando se suscribe a nuestro boletín, realiza una compra, o se pone en contacto con nosotros. Esto puede incluir su nombre, dirección de correo electrónico, dirección postal y información de pago.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Cómo Utilizamos su Información</h2>
              <p className="mb-6">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Procesar y completar sus pedidos</li>
                <li>Enviar comunicaciones sobre sus pedidos</li>
                <li>Responder a sus consultas y brindar soporte al cliente</li>
                <li>Enviar boletines informativos (si se ha suscrito)</li>
                <li>Mejorar nuestros servicios y sitio web</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">3. Compartir Información</h2>
              <p className="mb-6">
                No vendemos, comercializamos o transferimos a terceros su información personal identificable, excepto cuando sea necesario para completar una transacción (como servicios de envío) o cuando lo requiera la ley.
              </p>

              <h2 className="text-2xl font-bold mb-4">4. Seguridad de los Datos</h2>
              <p className="mb-6">
                Implementamos medidas de seguridad apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
              <p className="mb-6">
                Nuestro sitio web puede utilizar cookies para mejorar su experiencia de navegación. Las cookies son pequeños archivos que se almacenan en su dispositivo y nos ayudan a recordar sus preferencias.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Sus Derechos</h2>
              <p className="mb-6">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Acceder a la información personal que tenemos sobre usted</li>
                <li>Solicitar la corrección de información inexacta</li>
                <li>Solicitar la eliminación de su información personal</li>
                <li>Darse de baja de nuestras comunicaciones en cualquier momento</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4">7. Contacto</h2>
              <p className="mb-6">
                Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos su información personal, puede contactarnos a través de nuestra página de contacto.
              </p>

              <p className="text-sm text-gray-600 border-t pt-6 mt-8">
                Última actualización: Junio 2024
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;