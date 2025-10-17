# Green Sap - Landing Page

Sitio web oficial de Green Sap, un suplemento antioxidante natural con enfoque médico y científico.

## 🧱 Stack Técnico

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** - Animaciones
- **next-intl** - Internacionalización (es, en, pt)
- **lucide-react** - Íconos

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de Producción

```bash
npm run build
npm start
```

## 🌍 Internacionalización

El sitio soporta tres idiomas:

- **Español (es)** - Por defecto
- **Inglés (en)**
- **Portugués (pt)**

Los archivos de traducción se encuentran en `/messages/{locale}/`.

## 🎨 Identidad Visual

### Colores

- Verde oscuro: `#67A67B`
- Verde claro: `#A8CBB0`
- Blanco: `#FFFFFF`
- Negro: `#000000`

### Tipografía

- **Inter** - Sans-serif, pesos: 300, 400, 500, 600, 700

## 📁 Estructura del Proyecto

```
/app
  /[locale]         # Rutas internacionalizadas
    layout.tsx
    page.tsx
  layout.tsx        # Root layout
  page.tsx          # Redirección al locale por defecto
  globals.css       # Estilos globales
/components
  /layout           # Header, Footer
  /sections         # Secciones de la landing page
/messages
  /es, /en, /pt     # Traducciones
/utils
  constants.ts      # Constantes compartidas
/public
  /images           # Imágenes y assets
```

## 🧩 Componentes

### Layout

- `Header` - Navegación principal con selector de idioma
- `Footer` - Pie de página con enlaces

### Secciones (por desarrollar)

- `HeroSection` - Banner principal
- `AboutSection` - Información sobre Green Sap
- `HerbalComposition` - Composición herbal
- `TestimonialsSection` - Testimonios
- `ScientificStudies` - Estudios científicos
- `ContactCTA` - Llamada a la acción de contacto

## 📝 Scripts

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm start            # Servidor de producción
npm run lint         # Linter ESLint
```

## 🔧 Configuración

- **ESLint** - Configurado con `eslint-config-next`
- **Prettier** - Formato de código consistente
- **TypeScript** - Tipos estrictos habilitados

## 📄 Licencia

© 2025 Green Sap. Todos los derechos reservados.
