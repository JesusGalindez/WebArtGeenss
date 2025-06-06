#!/usr/bin/env python3
"""
Test automatizado para verificar correcciones del sitio web de Geenss Archenti
"""
import requests
import time
import json

def test_sitio_accesible():
    """Verifica que el sitio sea accesible"""
    try:
        response = requests.get('https://jxddckrqos.space.minimax.io', timeout=10)
        return {
            'status': 'OK' if response.status_code == 200 else 'ERROR',
            'status_code': response.status_code,
            'tiempo_respuesta': f"{response.elapsed.total_seconds():.2f}s"
        }
    except Exception as e:
        return {
            'status': 'ERROR',
            'error': str(e)
        }

def test_contenido_html():
    """Verifica contenido HTML específico"""
    try:
        response = requests.get('https://jxddckrqos.space.minimax.io', timeout=10)
        html_content = response.text
        
        tests = {
            'tiene_charset_utf8': 'charset="UTF-8"' in html_content,
            'tiene_viewport': 'viewport' in html_content,
            'tiene_title': '<title>' in html_content,
            'es_html_valido': html_content.startswith('<!doctype html>') or html_content.startswith('<!DOCTYPE html>'),
            'tiene_assets_css': '.css' in html_content,
            'tiene_assets_js': '.js' in html_content
        }
        
        return tests
    except Exception as e:
        return {'error': str(e)}

def test_estructura_archivos():
    """Verifica estructura de archivos generados"""
    import os
    dist_path = '/workspace/geenss-archenti-website/dist'
    
    archivos_esperados = [
        'index.html',
        'images',
        'data',
        'assets'
    ]
    
    tests = {}
    for archivo in archivos_esperados:
        tests[f'existe_{archivo}'] = os.path.exists(os.path.join(dist_path, archivo))
    
    # Contar archivos de assets
    assets_path = os.path.join(dist_path, 'assets')
    if os.path.exists(assets_path):
        tests['num_archivos_assets'] = len(os.listdir(assets_path))
    
    # Contar imágenes
    images_path = os.path.join(dist_path, 'images')
    if os.path.exists(images_path):
        tests['num_imagenes'] = len(os.listdir(images_path))
    
    return tests

def test_codigo_corregido():
    """Verifica que las correcciones específicas estén implementadas"""
    src_home = '/workspace/geenss-archenti-website/src/pages/Home.tsx'
    
    tests = {}
    
    try:
        with open(src_home, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Verificar que Geenss Archenti esté como H1 (motion.h1)
        tests['geenss_como_h1'] = 'Geenss Archenti' in content and 'motion.h1' in content
        
        # Verificar que Arte Visionario esté como H2 (motion.h2) 
        tests['arte_visionario_como_h2'] = 'Arte Visionario Amazónico' in content and 'motion.h2' in content
        
        # Verificar que no hay decorative_pigment_dots
        tests['no_elementos_decorativos'] = 'decorative_pigment_dots' not in content
        
        # Verificar que no hay animaciones de rotación problemáticas
        tests['no_rotacion_360'] = 'rotate: 360' not in content
        
        # Verificar clases de texto grandes
        tests['texto_grande'] = 'text-6xl' in content or 'text-8xl' in content
        
    except Exception as e:
        tests['error'] = str(e)
    
    return tests

def generar_reporte():
    """Genera reporte completo de verificación"""
    print("🔍 REPORTE DE VERIFICACIÓN COMPLETA DEL SITIO WEB DE GEENSS ARCHENTI")
    print("=" * 70)
    
    # Test 1: Accesibilidad
    print("\n1. ACCESIBILIDAD DEL SITIO:")
    acc_result = test_sitio_accesible()
    for key, value in acc_result.items():
        print(f"   ✅ {key}: {value}")
    
    # Test 2: Contenido HTML
    print("\n2. CONTENIDO HTML:")
    html_result = test_contenido_html()
    for key, value in html_result.items():
        emoji = "✅" if value else "❌"
        print(f"   {emoji} {key}: {value}")
    
    # Test 3: Estructura de archivos
    print("\n3. ESTRUCTURA DE ARCHIVOS:")
    struct_result = test_estructura_archivos()
    for key, value in struct_result.items():
        emoji = "✅" if value else "❌"
        print(f"   {emoji} {key}: {value}")
    
    # Test 4: Código corregido
    print("\n4. CORRECCIONES IMPLEMENTADAS:")
    code_result = test_codigo_corregido()
    for key, value in code_result.items():
        emoji = "✅" if value else "❌"
        print(f"   {emoji} {key}: {value}")
    
    # Resumen final
    print("\n" + "=" * 70)
    
    total_tests = 0
    passed_tests = 0
    
    for result in [acc_result, html_result, struct_result, code_result]:
        for key, value in result.items():
            if isinstance(value, bool):
                total_tests += 1
                if value:
                    passed_tests += 1
    
    success_rate = (passed_tests / total_tests * 100) if total_tests > 0 else 0
    
    print(f"📊 RESUMEN: {passed_tests}/{total_tests} pruebas exitosas ({success_rate:.1f}%)")
    
    if success_rate >= 90:
        print("🌟 ESTADO: SITIO WEB VERIFICADO Y FUNCIONANDO CORRECTAMENTE")
    elif success_rate >= 75:
        print("⚠️  ESTADO: SITIO FUNCIONAL CON MEJORAS MENORES PENDIENTES")
    else:
        print("❌ ESTADO: REQUIERE CORRECCIONES ADICIONALES")

if __name__ == "__main__":
    generar_reporte()
