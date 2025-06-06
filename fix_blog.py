#!/usr/bin/env python3

import os

# Leer el contenido corregido
with open('/workspace/blog_fixed_content.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Escribir al archivo Blog.tsx usando str_replace method
blog_path = '/workspace/geenss-archenti-website/src/pages/Blog.tsx'

# Intentar escribir directamente
try:
    with open(blog_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ Blog.tsx corregido exitosamente")
except PermissionError:
    print("❌ Error de permisos. Intentando método alternativo...")
    
    # Método alternativo: usar sed para reemplazar todo el contenido
    os.system(f'cp /workspace/blog_fixed_content.txt {blog_path}')
    print("✅ Blog.tsx corregido con método alternativo")

print(f"📄 Archivo actualizado: {blog_path}")
print(f"📊 Tamaño del contenido: {len(content)} caracteres")
