#!/usr/bin/env python3
import os
import re

# Rutas de archivos a corregir
files_to_fix = [
    '/workspace/geenss-archenti-website/src/pages/Blog.tsx',
    '/workspace/geenss-archenti-website/src/pages/Contact.tsx', 
    '/workspace/geenss-archenti-website/src/pages/Events.tsx',
    '/workspace/geenss-archenti-website/src/pages/Gallery.tsx',
    '/workspace/geenss-archenti-website/src/pages/Privacy.tsx',
    '/workspace/geenss-archenti-website/src/pages/Shipping.tsx',
    '/workspace/geenss-archenti-website/src/pages/Testimonials.tsx',
    '/workspace/geenss-archenti-website/src/pages/Returns.tsx',
    '/workspace/geenss-archenti-website/src/pages/Terms.tsx',
    '/workspace/geenss-archenti-website/src/pages/Shop.tsx'
]

def fix_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Eliminar importaciones de traducciones
        content = re.sub(r"import { useTranslation } from 'react-i18next';\n", '', content)
        content = re.sub(r"const { t } = useTranslation\(\);\n", '', content)
        
        # Eliminar isDarkMode del destructuring
        content = re.sub(r"const { isDarkMode } = useAppStore\(\);\n", '', content)
        content = re.sub(r", isDarkMode", '', content)
        content = re.sub(r"isDarkMode, ", '', content)
        content = re.sub(r"isDarkMode,\s*", '', content)
        
        # Reemplazar expresiones de isDarkMode
        replacements = [
            (r"isDarkMode \? 'bg-gray-900' : 'bg-gray-50'", "'bg-gray-50'"),
            (r"isDarkMode \? 'bg-gray-800' : 'bg-white'", "'bg-white'"),
            (r"isDarkMode \? 'text-white' : 'text-gray-900'", "'text-gray-900'"),
            (r"isDarkMode \? 'text-gray-300' : 'text-gray-600'", "'text-gray-600'"),
            (r"isDarkMode \? 'text-gray-300' : 'text-gray-700'", "'text-gray-700'"),
            (r"isDarkMode \? 'text-gray-400' : 'text-gray-600'", "'text-gray-600'"),
            (r"isDarkMode \? 'hover:bg-gray-700' : 'hover:bg-gray-100'", "'hover:bg-gray-100'"),
            (r"isDarkMode \? 'border-gray-700' : 'border-gray-200'", "'border-gray-200'"),
        ]
        
        for pattern, replacement in replacements:
            content = re.sub(pattern, replacement, content)
        
        # Reemplazar traducciones comunes
        translations = {
            r"\{t\('gallery\.title'\)\}": 'Galería de Arte',
            r"\{t\('gallery\.allYears'\)\}": 'Todos los años', 
            r"\{t\('gallery\.viewDetails'\)\}": 'Ver Detalles',
            r"\{t\('gallery\.year'\)\}": 'Año',
            r"\{t\('gallery\.dimensions'\)\}": 'Dimensiones',
            r"\{t\('gallery\.technique'\)\}": 'Técnica',
            r"\{t\('gallery\.materials'\)\}": 'Materiales',
            r"\{t\('gallery\.description'\)\}": 'Descripción',
            r"\{t\('blog\.title'\)\}": 'Blog',
            r"\{t\('contact\.title'\)\}": 'Contacto',
            r"\{t\('events\.title'\)\}": 'Eventos',
            r"\{t\('testimonials\.title'\)\}": 'Testimonios',
            r"\{t\('shop\.title'\)\}": 'Tienda Galería'
        }
        
        for pattern, replacement in translations.items():
            content = re.sub(pattern, replacement, content)
        
        # Eliminar líneas que contienen isDarkMode restante
        lines = content.split('\n')
        lines = [line for line in lines if 'isDarkMode' not in line and 't(' not in line]
        content = '\n'.join(lines)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"✓ Corregido: {os.path.basename(file_path)}")
        
    except Exception as e:
        print(f"✗ Error en {os.path.basename(file_path)}: {e}")

print("Iniciando corrección masiva de archivos TypeScript...")
for file_path in files_to_fix:
    if os.path.exists(file_path):
        fix_file(file_path)
    else:
        print(f"⚠ Archivo no encontrado: {file_path}")

print("Proceso completado.")
