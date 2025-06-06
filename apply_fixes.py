#!/usr/bin/env python3
"""
Script para aplicar masivamente las correcciones a todas las páginas
"""

import os
import shutil

def apply_all_fixes():
    pages = ['Events', 'Testimonials', 'Terms', 'Privacy', 'Shipping', 'Returns']
    pages_path = '/workspace/geenss-archenti-website/src/pages'
    
    success_count = 0
    
    for page in pages:
        source_file = f'/workspace/{page}_fixed.tsx'
        target_file = f'{pages_path}/{page}.tsx'
        
        try:
            # Leer contenido corregido
            with open(source_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Intentar escribir directamente
            with open(target_file, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ {page}.tsx corregido exitosamente")
            success_count += 1
            
        except PermissionError:
            print(f"❌ Error de permisos en {page}.tsx")
        except Exception as e:
            print(f"❌ Error en {page}.tsx: {e}")
    
    print(f"\n📊 Resumen: {success_count}/{len(pages)} páginas corregidas")
    
    if success_count == len(pages):
        print("🎉 Todas las páginas corregidas exitosamente")
    else:
        print("⚠️ Algunas páginas no pudieron ser corregidas por permisos")

if __name__ == "__main__":
    apply_all_fixes()
