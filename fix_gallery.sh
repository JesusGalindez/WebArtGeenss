#!/bin/bash

# Script para corregir Gallery.tsx eliminando isDarkMode y traducciones

file="/workspace/geenss-archenti-website/src/pages/Gallery.tsx"

echo "Corrigiendo Gallery.tsx..."

# Reemplazar expresiones comunes de isDarkMode
sed -i "s/isDarkMode ? 'bg-gray-900' : 'bg-gray-50'/'bg-gray-50'/g" "$file"
sed -i "s/isDarkMode ? 'text-white' : 'text-gray-900'/'text-gray-900'/g" "$file"
sed -i "s/isDarkMode ? 'text-gray-300' : 'text-gray-600'/'text-gray-600'/g" "$file"
sed -i "s/isDarkMode ? 'bg-gray-800' : 'bg-white'/'bg-white'/g" "$file"
sed -i "s/isDarkMode ? 'text-gray-300' : 'text-gray-700'/'text-gray-700'/g" "$file"
sed -i "s/isDarkMode ? 'text-gray-400' : 'text-gray-600'/'text-gray-600'/g" "$file"
sed -i "s/isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'/'hover:bg-gray-100'/g" "$file"

# Reemplazar traducciones comunes
sed -i "s/{t('gallery.title')}/Galería de Arte/g" "$file"
sed -i "s/{t('gallery.allYears')}/Todos los años/g" "$file"
sed -i "s/{t('gallery.viewDetails')}/Ver Detalles/g" "$file"
sed -i "s/{t('gallery.year')}/Año/g" "$file"
sed -i "s/{t('gallery.dimensions')}/Dimensiones/g" "$file"
sed -i "s/{t('gallery.technique')}/Técnica/g" "$file"
sed -i "s/{t('gallery.materials')}/Materiales/g" "$file"
sed -i "s/{t('gallery.description')}/Descripción/g" "$file"

# Limpiar líneas con isDarkMode restante
sed -i '/isDarkMode/d' "$file"

echo "Gallery.tsx corregido."
