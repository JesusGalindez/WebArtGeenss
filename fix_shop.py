#!/usr/bin/env python3

# Script para corregir Shop.tsx copiando el contenido corregido

import shutil
import os

# Leer el contenido corregido
with open('/workspace/shop_content.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# Escribir al archivo Shop.tsx
shop_path = '/workspace/geenss-archenti-website/src/pages/Shop.tsx'
with open(shop_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Shop.tsx corregido exitosamente")
print(f"📄 Archivo actualizado: {shop_path}")
print(f"📊 Tamaño del contenido: {len(content)} caracteres")
