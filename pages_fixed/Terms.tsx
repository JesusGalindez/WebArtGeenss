import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
            Términos y Condiciones
          </h1>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
              <p className="mb-6">
                Al acceder y utilizar el sitio web de Geenss Archenti, usted acepta cumplir con estos términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
              </p>

              <h2 className="text-2xl font-bold mb-4">2. Uso del Sitio Web</h2>
              <p className="mb-6">
                Este sitio web está destinado a proporcionar información sobre las obras de arte de Geenss Archenti y facilitar la compra de obras originales e impresiones. El uso del sitio debe ser únicamente para fines legales y de acuerdo con estos términos.
              </p>

              <h2 className="text-2xl font-bold mb-4">3. Propiedad Intelectual</h2>
              <p className="mb-6">
                Todas las obras de arte, imágenes, textos y contenido mostrado en este sitio web son propiedad exclusiva de Geenss Archenti. Está prohibida la reproducción, distribución o uso comercial sin autorización expresa por escrito.
              </p>

              <h2 className="text-2xl font-bold mb-4">4. Compras y Pagos</h2>
              <p className="mb-6">
                Los precios mostrados están en dólares estadounidenses e incluyen todos los impuestos aplicables. Los pagos se procesan de forma segura a través de plataformas certificadas. Las obras originales son únicas y no pueden ser reemplazadas.
              </p>

              <h2 className="text-2xl font-bold mb-4">5. Envíos y Entregas</h2>
              <p className="mb-6">
                Los tiempos de envío varían según la ubicación y el tipo de obra. Las obras originales requieren cuidados especiales de embalaje y pueden tomar entre 2-4 semanas para entrega internacional. Las impresiones se envían dentro de 7-10 días hábiles.
              </p>

              <h2 className="text-2xl font-bold mb-4">6. Política de Devoluciones</h2>
              <p className="mb-6">
                Las obras originales no admiten devolución debido a su naturaleza única. Las impresiones pueden ser devueltas dentro de 14 días si están en perfectas condiciones. Los gastos de envío de devolución corren por cuenta del comprador.
              </p>

              <h2 className="text-2xl font-bold mb-4">7. Limitación de Responsabilidad</h2>
              <p className="mb-6">
                Geenss Archenti no será responsable por daños indirectos, incidentales o consecuentes que puedan surgir del uso de este sitio web o de la compra de obras de arte.
              </p>

              <h2 className="text-2xl font-bold mb-4">8. Contacto</h2>
              <p className="mb-6">
                Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a través de la página de contacto de este sitio web.
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

export default Terms;