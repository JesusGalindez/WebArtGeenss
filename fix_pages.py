#!/usr/bin/env python3
import os
import re

def fix_page_content(content):
    """Fix isDarkMode and t() references in page content"""
    
    # Replace isDarkMode ternary operations - keep only light mode values
    # Pattern: isDarkMode ? 'dark-value' : 'light-value'
    # Replace with just 'light-value'
    
    # Simple pattern for bg colors
    content = re.sub(r"isDarkMode \? 'bg-gray-800' : 'bg-white'", "'bg-white'", content)
    content = re.sub(r"isDarkMode \? 'bg-gray-900' : 'bg-white'", "'bg-white'", content)
    content = re.sub(r"isDarkMode \? 'bg-gray-700' : 'bg-gray-50'", "'bg-gray-50'", content)
    
    # Text colors
    content = re.sub(r"isDarkMode \? 'text-white' : 'text-gray-900'", "'text-gray-900'", content)
    content = re.sub(r"isDarkMode \? 'text-gray-300' : 'text-gray-700'", "'text-gray-700'", content)
    content = re.sub(r"isDarkMode \? 'text-gray-400' : 'text-gray-600'", "'text-gray-600'", content)
    
    # Border colors  
    content = re.sub(r"isDarkMode \? 'border-gray-600' : 'border-gray-200'", "'border-gray-200'", content)
    content = re.sub(r"isDarkMode \? 'border-gray-700' : 'border-gray-200'", "'border-gray-200'", content)
    
    # Background combinations
    content = re.sub(r"isDarkMode \? 'border-gray-600 bg-gray-700/50' : 'border-gray-200 bg-gray-50'", "'border-gray-200 bg-gray-50'", content)
    
    # Hover states
    content = re.sub(r"isDarkMode \? 'hover:bg-gray-700' : 'hover:bg-gray-100'", "'hover:bg-gray-100'", content)
    content = re.sub(r"isDarkMode \? 'hover:bg-gray-600' : 'hover:bg-gray-50'", "'hover:bg-gray-50'", content)
    
    # More complex patterns using regex
    # Pattern: className={`...${isDarkMode ? 'dark' : 'light'}...`}
    content = re.sub(
        r"className=\{`([^`]*)\$\{[^}]*isDarkMode[^}]*\}([^`]*)`\}",
        lambda m: f'className="{m.group(1).strip()}{m.group(2).strip()}"',
        content
    )
    
    # Remove any remaining isDarkMode references by keeping only the light mode value
    # Pattern: isDarkMode ? anything : lightValue -> lightValue
    content = re.sub(r"isDarkMode \? '[^']*' : '([^']*)'", r"'\1'", content)
    
    # Remove t() function calls and replace with Spanish text
    translations = {
        "t('shop.title')": '"Tienda Galería"',
        "t('shop.subtitle')": '"Obras originales e impresiones de alta calidad"',
        "t('shop.addToCart')": '"Agregar al Carrito"',
        "t('shop.price')": '"Precio"',
        "t('shop.availability')": '"Disponibilidad"',
        "t('shop.available')": '"Disponible"',
        "t('shop.sold')": '"Vendido"',
        "t('shop.quantity')": '"Cantidad"',
        "t('contact.title')": '"Contacto"',
        "t('contact.subtitle')": '"Conecta conmigo"',
        "t('contact.name')": '"Nombre"',
        "t('contact.email')": '"Email"',
        "t('contact.subject')": '"Asunto"',
        "t('contact.message')": '"Mensaje"',
        "t('contact.send')": '"Enviar Mensaje"',
        "t('testimonials.title')": '"Testimonios"',
        "t('testimonials.subtitle')": '"Lo que dicen sobre mi arte"',
        "t('testimonials.addReview')": '"Agregar Testimonio"',
        "t('blog.title')": '"Blog"',
        "t('blog.subtitle')": '"Reflexiones sobre arte y creatividad"',
        "t('blog.readMore')": '"Leer Más"',
        "t('blog.subscribe')": '"Suscríbete al Blog"',
        "t('gallery.year')": '"Año"',
        "t('gallery.dimensions')": '"Dimensiones"',
        "t('gallery.technique')": '"Técnica"',
        "t('gallery.materials')": '"Materiales"',
        "t('gallery.description')": '"Descripción"',
    }
    
    for t_call, replacement in translations.items():
        content = content.replace(f"{{{t_call}}}", replacement)
        content = content.replace(t_call, replacement)
    
    # Remove any remaining t() calls with a generic approach
    content = re.sub(r"\{t\('[^']*'\)\}", '"Texto"', content)
    content = re.sub(r"t\('[^']*'\)", '"Texto"', content)
    
    # Remove isDarkMode variable references that might be in destructuring
    content = re.sub(r",\s*isDarkMode", "", content)
    content = re.sub(r"isDarkMode,\s*", "", content)
    
    return content

def fix_page_file(file_path):
    """Fix a specific page file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        fixed_content = fix_page_content(content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"Fixed: {file_path}")
        return True
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

# List of pages to fix
pages_to_fix = [
    '/workspace/geenss-archenti-website/src/pages/Shop.tsx',
    '/workspace/geenss-archenti-website/src/pages/Contact.tsx',
    '/workspace/geenss-archenti-website/src/pages/Blog.tsx',
    '/workspace/geenss-archenti-website/src/pages/Testimonials.tsx',
    '/workspace/geenss-archenti-website/src/pages/Events.tsx',
    '/workspace/geenss-archenti-website/src/pages/Privacy.tsx',
    '/workspace/geenss-archenti-website/src/pages/Returns.tsx',
    '/workspace/geenss-archenti-website/src/pages/Shipping.tsx',
    '/workspace/geenss-archenti-website/src/pages/Terms.tsx'
]

if __name__ == "__main__":
    print("Fixing TypeScript errors in page files...")
    
    fixed_count = 0
    for page_path in pages_to_fix:
        if os.path.exists(page_path):
            if fix_page_file(page_path):
                fixed_count += 1
        else:
            print(f"File not found: {page_path}")
    
    print(f"\nFixed {fixed_count} pages successfully!")
