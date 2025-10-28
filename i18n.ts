import { getRequestConfig } from 'next-intl/server';

// Idiomas soportados
export const locales = ['es', 'en', 'pt'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  try {
    // Validar que el locale es soportado
    if (!locale || !locales.includes(locale as Locale)) {
      locale = 'es'; // Fallback al español
    }

    // Cargar mensajes con manejo de errores
    let messages;
    try {
      messages = (await import(`./messages/${locale}/common.json`)).default;
    } catch (error) {
      console.error(`Error loading messages for locale ${locale}:`, error);
      // Fallback a español si hay error cargando los mensajes
      messages = (await import('./messages/es/common.json')).default;
    }

    return {
      messages,
    };
  } catch (error) {
    console.error('Error in i18n configuration:', error);
    // Configuración de fallback completa
    return {
      messages: (await import('./messages/es/common.json')).default,
    };
  }
});
