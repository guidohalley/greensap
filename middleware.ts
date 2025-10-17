import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // Lista de locales soportados
  locales,
  // Locale por defecto
  defaultLocale: 'es',
  // Siempre usar un prefijo de locale en la URL
  localePrefix: 'always',
});

export const config = {
  // Aplicar el middleware a todas las rutas excepto las estáticas
  matcher: ['/', '/(es|en|pt)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
