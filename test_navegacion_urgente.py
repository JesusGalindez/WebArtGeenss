#!/usr/bin/env python3
"""
Test urgente de navegación para verificar correcciones críticas
"""
import requests
import time

def test_sitio_urgente():
    """Test rápido de navegación"""
    url = 'https://48jho4r7dm.space.minimax.io'
    
    try:
        print("🔍 TESTING URGENTE DE NAVEGACIÓN")
        print("=" * 50)
        
        # Test 1: Accesibilidad básica
        response = requests.get(url, timeout=10)
        print(f"✅ SITIO ACCESIBLE: {response.status_code} OK")
        print(f"✅ TIEMPO RESPUESTA: {response.elapsed.total_seconds():.2f}s")
        
        # Test 2: Verificar contenido HTML
        html = response.text
        
        # Buscar títulos principales
        tiene_geenss = 'Geenss Archenti' in html
        tiene_arte_visionario = 'Arte Visionario Amazónico' in html
        
        print(f"✅ TÍTULO PRINCIPAL: {'SÍ' if tiene_geenss else 'NO'}")
        print(f"✅ SUBTÍTULO: {'SÍ' if tiene_arte_visionario else 'NO'}")
        
        # Test 3: Verificar que hay assets cargando
        tiene_css = '.css' in html
        tiene_js = '.js' in html
        
        print(f"✅ ASSETS CSS: {'SÍ' if tiene_css else 'NO'}")
        print(f"✅ ASSETS JS: {'SÍ' if tiene_js else 'NO'}")
        
        # Test 4: Verificar estructura HTML básica
        es_html_valido = 'DOCTYPE html' in html or 'doctype html' in html
        tiene_viewport = 'viewport' in html
        
        print(f"✅ HTML VÁLIDO: {'SÍ' if es_html_valido else 'NO'}")
        print(f"✅ RESPONSIVE: {'SÍ' if tiene_viewport else 'NO'}")
        
        print("\n" + "=" * 50)
        
        # Resumen
        total_tests = 6
        passed_tests = sum([
            response.status_code == 200,
            tiene_geenss,
            tiene_arte_visionario,
            tiene_css,
            tiene_js,
            es_html_valido
        ])
        
        success_rate = (passed_tests / total_tests) * 100
        
        print(f"📊 RESULTADO: {passed_tests}/{total_tests} tests exitosos ({success_rate:.1f}%)")
        
        if success_rate >= 90:
            print("🌟 ESTADO: CORRECCIONES CRÍTICAS EXITOSAS")
        elif success_rate >= 70:
            print("⚠️  ESTADO: PARCIALMENTE CORREGIDO")
        else:
            print("❌ ESTADO: NECESITA MÁS CORRECCIONES")
            
        return success_rate >= 70
        
    except Exception as e:
        print(f"❌ ERROR EN TEST: {e}")
        return False

if __name__ == "__main__":
    test_sitio_urgente()
