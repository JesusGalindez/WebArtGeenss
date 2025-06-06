#!/usr/bin/env python3
"""
Script para usar sed para eliminar todas las referencias problemáticas restantes
"""

import subprocess
import os

def fix_shop_tsx():
    """Corrige Shop.tsx usando reemplazos directos"""
    shop_path = '/workspace/geenss-archenti-website/src/pages/Shop.tsx'
    
    # Lista de reemplazos para Shop.tsx
    replacements = [
        # Reemplazar referencias a t()
        ("t\\('shop.original'\\)", '"Original"'),
        ("t\\('shop.print'\\)", '"Impresión"'),
        ("t\\('shop.addToCart'\\)", '"Agregar al Carrito"'),
        ("t\\('shop.cart'\\)", '"Carrito"'),
        ("t\\('shop.total'\\)", '"Total"'),
        ("t\\('shop.checkout'\\)", '"Proceder al Pago"'),
        
        # Reemplazar clases condicionales con isDarkMode por clases fijas
        ("className={.*isDarkMode.*?'bg-gray-800'.*?'bg-white'.*?}", 'className="bg-white"'),
        ("className={.*isDarkMode.*?'text-white'.*?'text-gray-900'.*?}", 'className="text-gray-900"'),
        ("className={.*isDarkMode.*?'text-gray-300'.*?'text-gray-600'.*?}", 'className="text-gray-600"'),
        ("className={.*isDarkMode.*?'border-gray-700'.*?'border-gray-200'.*?}", 'className="border-gray-200"'),
    ]
    
    print(f"🔧 Corrigiendo {shop_path}")
    
    # Aplicar cada reemplazo
    for old_pattern, new_value in replacements:
        try:
            cmd = f"sed -i 's/{old_pattern}/{new_value}/g' {shop_path}"
            subprocess.run(cmd, shell=True, check=True)
            print(f"   ✅ Reemplazado: {old_pattern[:30]}...")
        except subprocess.CalledProcessError as e:
            print(f"   ❌ Error en: {old_pattern[:30]}... - {e}")

def fix_testimonials_tsx():
    """Corrige Testimonials.tsx eliminando isDarkMode"""
    testimonials_path = '/workspace/geenss-archenti-website/src/pages/Testimonials.tsx'
    
    print(f"🔧 Corrigiendo {testimonials_path}")
    
    # Verificar si el archivo tiene problemas de isDarkMode
    try:
        with open(testimonials_path, 'r') as f:
            content = f.read()
            if 'isDarkMode' in content:
                print("   ❌ Testimonials.tsx necesita reemplazo completo")
                # Copiar desde archivo corregido
                corrected_path = '/workspace/pages_fixed/Testimonials.tsx'
                if os.path.exists(corrected_path):
                    with open(corrected_path, 'r') as corrected_f:
                        corrected_content = corrected_f.read()
                    with open(testimonials_path, 'w') as f:
                        f.write(corrected_content)
                    print("   ✅ Testimonials.tsx reemplazado completamente")
                else:
                    print("   ❌ Archivo corregido no encontrado")
            else:
                print("   ✅ Testimonials.tsx ya está correcto")
    except Exception as e:
        print(f"   ❌ Error: {e}")

def main():
    print("🚀 INICIANDO CORRECCIÓN MASIVA DE PÁGINAS RESTANTES")
    print("=" * 60)
    
    fix_shop_tsx()
    print()
    fix_testimonials_tsx()
    
    print()
    print("🎯 CORRECCIÓN MASIVA COMPLETADA")

if __name__ == "__main__":
    main()
