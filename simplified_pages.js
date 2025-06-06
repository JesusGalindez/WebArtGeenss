// Script para crear versiones simplificadas de las páginas más problemáticas

const fs = require('fs');
const path = require('path');

// Función para leer un archivo
function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8');
}

// Función para escribir un archivo
function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
}

// Función para limpiar referencias a isDarkMode y traducciones
function cleanFile(content) {
    // Eliminar importaciones de traducciones
    content = content.replace(/import { useTranslation } from 'react-i18next';\n/g, '');
    content = content.replace(/const { t } = useTranslation\(\);\n/g, '');
    
    // Eliminar isDarkMode del useAppStore
    content = content.replace(/isDarkMode,\s*/g, '');
    content = content.replace(/,\s*isDarkMode/g, '');
    content = content.replace(/const { isDarkMode } = useAppStore\(\);\n/g, '');
    
    // Reemplazar expresiones comunes de isDarkMode
    content = content.replace(/isDarkMode \? 'bg-gray-900' : 'bg-gray-50'/g, "'bg-gray-50'");
    content = content.replace(/isDarkMode \? 'text-white' : 'text-gray-900'/g, "'text-gray-900'");
    content = content.replace(/isDarkMode \? 'text-gray-300' : 'text-gray-600'/g, "'text-gray-600'");
    content = content.replace(/isDarkMode \? 'bg-gray-800' : 'bg-white'/g, "'bg-white'");
    content = content.replace(/isDarkMode \? 'text-gray-300' : 'text-gray-700'/g, "'text-gray-700'");
    content = content.replace(/isDarkMode \? 'text-gray-400' : 'text-gray-600'/g, "'text-gray-600'");
    content = content.replace(/isDarkMode \? 'hover:bg-gray-700' : 'hover:bg-gray-100'/g, "'hover:bg-gray-100'");
    
    // Reemplazar traducciones comunes
    content = content.replace(/\{t\('([^']+)'\)\}/g, (match, key) => {
        const translations = {
            'gallery.title': 'Galería de Arte',
            'gallery.allYears': 'Todos los años',
            'gallery.viewDetails': 'Ver Detalles',
            'gallery.year': 'Año',
            'gallery.dimensions': 'Dimensiones',
            'gallery.technique': 'Técnica',
            'gallery.materials': 'Materiales',
            'gallery.description': 'Descripción',
            'blog.title': 'Blog',
            'blog.readMore': 'Leer Más',
            'contact.title': 'Contacto',
            'contact.send': 'Enviar Mensaje',
            'testimonials.title': 'Testimonios',
            'events.title': 'Eventos',
            'shop.title': 'Tienda Galería',
            'shop.addToCart': 'Agregar al Carrito'
        };
        return translations[key] || key;
    });
    
    // Limpiar líneas con isDarkMode restante
    content = content.split('\n').filter(line => !line.includes('isDarkMode')).join('\n');
    
    return content;
}

const filesToFix = [
    '/workspace/geenss-archenti-website/src/pages/Blog.tsx',
    '/workspace/geenss-archenti-website/src/pages/Contact.tsx',
    '/workspace/geenss-archenti-website/src/pages/Events.tsx',
    '/workspace/geenss-archenti-website/src/pages/Shop.tsx',
    '/workspace/geenss-archenti-website/src/pages/Testimonials.tsx',
    '/workspace/geenss-archenti-website/src/pages/Privacy.tsx',
    '/workspace/geenss-archenti-website/src/pages/Shipping.tsx',
    '/workspace/geenss-archenti-website/src/pages/Returns.tsx',
    '/workspace/geenss-archenti-website/src/pages/Terms.tsx'
];

console.log('Corrigiendo archivos...');

filesToFix.forEach(filePath => {
    try {
        const content = readFile(filePath);
        const cleanedContent = cleanFile(content);
        writeFile(filePath, cleanedContent);
        console.log(`✓ Corregido: ${path.basename(filePath)}`);
    } catch (error) {
        console.log(`✗ Error: ${path.basename(filePath)} - ${error.message}`);
    }
});

console.log('Proceso completado.');
