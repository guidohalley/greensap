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
  // Matcher más específico para evitar conflictos
  matcher: [
    // Incluir todas las rutas principales
    '/',
    // Incluir rutas con locales
    '/(es|en|pt)/:path*',
    // Excluir archivos estáticos y API
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.).*)'
  ]
};
