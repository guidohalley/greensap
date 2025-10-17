// Colores de la marca Green Sap
export const COLORS = {
  primary: {
    dark: '#67A67B',
    light: '#A8CBB0',
  },
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
  },
} as const;

// Rutas de navegación
export const NAV_ITEMS = [
  { key: 'home', href: '#home' },
  { key: 'product', href: '#producto' },
  { key: 'science', href: '#ciencia' },
  { key: 'testimonials', href: '#testimonios' },
  { key: 'contact', href: '#contacto' },
] as const;

// Configuración de animaciones
export const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
} as const;
