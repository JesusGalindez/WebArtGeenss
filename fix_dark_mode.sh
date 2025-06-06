#!/bin/bash

# Script para eliminar referencias a isDarkMode en el proyecto React

echo "Eliminando referencias a isDarkMode en archivos TypeScript/JavaScript..."

# Directorios a procesar
directories=("src/pages" "src/components")

for dir in "${directories[@]}"; do
    if [ -d "/workspace/geenss-archenti-website/$dir" ]; then
        echo "Procesando directorio: $dir"
        
        # Buscar archivos .tsx y .ts
        find "/workspace/geenss-archenti-website/$dir" -name "*.tsx" -o -name "*.ts" | while read file; do
            echo "Procesando archivo: $file"
            
            # Remover líneas que contengan solo la destructuración de isDarkMode
            sed -i 's/const { isDarkMode } = useAppStore();//g' "$file"
            sed -i 's/, isDarkMode//g' "$file"
            sed -i 's/isDarkMode,//g' "$file"
            sed -i 's/isDarkMode ? /false ? /g' "$file"
            
            # Simplificar expresiones ternarias comunes
            sed -i "s/isDarkMode ? 'text-white' : 'text-gray-900'/'text-gray-900'/g" "$file"
            sed -i "s/isDarkMode ? 'text-gray-300' : 'text-gray-600'/'text-gray-600'/g" "$file"
            sed -i "s/isDarkMode ? 'text-gray-400' : 'text-gray-600'/'text-gray-600'/g" "$file"
            sed -i "s/isDarkMode ? 'bg-gray-900' : 'bg-white'/'bg-white'/g" "$file"
            sed -i "s/isDarkMode ? 'bg-gray-800' : 'bg-gray-50'/'bg-gray-50'/g" "$file"
            sed -i "s/isDarkMode ? 'bg-gray-700' : 'bg-white'/'bg-white'/g" "$file"
            sed -i "s/isDarkMode ? 'border-gray-700' : 'border-gray-200'/'border-gray-200'/g" "$file"
            
            # Eliminar líneas vacías resultantes
            sed -i '/^[[:space:]]*$/d' "$file"
        done
    fi
done

echo "Script completado."
