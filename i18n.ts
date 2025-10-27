import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Idiomas soportados
export const locales = ['es', 'en', 'pt'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  // Validar que el locale es soportado
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'es'; // Fallback al español
  }

  return {
    locale,
    messages: {
      ...(await import(`./messages/${locale}/common.json`)).default,
    },
  };
});
