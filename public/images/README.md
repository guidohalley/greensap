# 📁 Estructura de Imágenes para Green Sap

## 🎯 Ubicación de Imágenes

Todas las imágenes del proyecto deben colocarse en:

```
/public/images/
```

### 📂 Organización Recomendada

```
/public/images/
├── logo/
│   ├── greensap-logo.svg          # Logo principal (SVG preferido)
│   ├── greensap-logo.png          # Logo PNG (alta resolución)
│   └── favicon.ico                # Favicon
│
├── product/
│   ├── greensap-bottle.png        # Imagen principal del producto
│   ├── greensap-bottle-front.png  # Vista frontal
│   ├── greensap-bottle-side.png   # Vista lateral
│   └── greensap-packaging.png     # Empaque completo
│
├── hero/
│   ├── hero-background.jpg        # Imagen de fondo del hero
│   └── hero-product.png           # Producto para hero section
│
├── ingredients/
│   ├── ingredient-1.png           # Ingrediente 1
│   ├── ingredient-2.png           # Ingrediente 2
│   └── ...                        # Más ingredientes
│
├── testimonials/
│   ├── testimonial-1.jpg          # Foto testimonio 1
│   ├── testimonial-2.jpg          # Foto testimonio 2
│   └── ...                        # Más testimonios
│
└── research/
    ├── lab-1.jpg                  # Imágenes de laboratorio
    └── study-icon.svg             # Íconos de estudios
```

## 🖼️ Formatos Recomendados

### Imágenes del Producto
- **Formato**: PNG con fondo transparente
- **Resolución**: Mínimo 1500x1500px
- **Peso**: Optimizado < 500KB
- **Ejemplo**: `/public/images/product/greensap-bottle.png`

### Imágenes de Hero/Background
- **Formato**: JPG o WebP
- **Resolución**: 1920x1080px o superior
- **Peso**: Optimizado < 300KB
- **Ejemplo**: `/public/images/hero/hero-background.jpg`

### Logos
- **Formato**: SVG (preferido) o PNG
- **Resolución**: Vectorial o 512x512px
- **Ejemplo**: `/public/images/logo/greensap-logo.svg`

### Íconos
- **Formato**: SVG
- **Tamaño**: 24x24px, 48x48px, 64x64px
- **Ejemplo**: `/public/images/icons/`

## 💻 Uso en Next.js

### Usando next/image (Recomendado)

```tsx
import Image from 'next/image';

// Imagen del producto
<Image
  src="/images/product/greensap-bottle.png"
  alt="Green Sap - Suplemento Antioxidante"
  width={500}
  height={500}
  priority
/>

// Background Hero
<Image
  src="/images/hero/hero-background.jpg"
  alt="Background"
  fill
  className="object-cover"
/>
```

### Usando CSS Background

```tsx
<div 
  className="bg-cover bg-center" 
  style={{ backgroundImage: "url('/images/hero/hero-background.jpg')" }}
>
  {/* Contenido */}
</div>
```

## 🎨 Optimización de Imágenes

### Herramientas Recomendadas
- **TinyPNG** - https://tinypng.com/
- **Squoosh** - https://squoosh.app/
- **ImageOptim** (Mac)
- **SVGOMG** - https://jakearchibald.github.io/svgomg/ (para SVG)

### Configuración Next.js

El archivo `next.config.ts` ya está configurado para optimización automática de imágenes.

## 📝 Convenciones de Nombres

- Usar kebab-case: `greensap-bottle.png`
- Ser descriptivo: `greensap-bottle-front-view.png`
- Incluir dimensiones si hay múltiples: `hero-background-1920x1080.jpg`
- Versiones: `greensap-logo-v2.svg`

## 🔗 Rutas de Ejemplo

```
/images/product/greensap-bottle.png       → Imagen principal del producto
/images/logo/greensap-logo.svg            → Logo principal
/images/hero/hero-background.jpg          → Background del hero
/images/ingredients/ingredient-aloe.png   → Ingrediente: Aloe Vera
/images/testimonials/patient-1.jpg        → Foto de testimonio
```

## ✅ Checklist de Imágenes Necesarias

- [ ] Logo principal (SVG + PNG)
- [ ] Favicon
- [ ] Imagen principal del producto (PNG transparente)
- [ ] Background del hero (JPG/WebP)
- [ ] Imágenes de ingredientes (mínimo 5)
- [ ] Fotos de testimonios (mínimo 3)
- [ ] Imágenes de investigación/laboratorio (2-3)
- [ ] Íconos SVG personalizados (si aplica)

---

**Ruta base**: `/public/images/`  
**Acceso en código**: `/images/[carpeta]/[archivo]`
