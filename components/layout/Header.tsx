'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';

const NAV_ITEMS = [
  { key: 'product', href: '#producto' },
  { key: 'research', href: '#investigaciones' },
  { key: 'contact', href: '#contacto' },
] as const;

const LANGUAGES = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
] as const;

export default function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Extraer el locale actual de la ruta
  const currentLocale = pathname.split('/')[1] || 'es';
  const currentLanguage = LANGUAGES.find((lang) => lang.code === currentLocale);

  // Cerrar dropdowns al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Barra Superior Verde */}
      <div className="bg-primary-dark text-white">
        <div className="container mx-auto px-4 py-2 text-center">
          <p className="text-sm md:text-base font-medium tracking-wide">
            {t('header.topBanner')}
          </p>
        </div>
      </div>

      {/* Navbar Principal */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${currentLocale}`} className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-primary-dark transition-colors duration-200 font-medium"
                >
                  {t(`header.nav.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions: Language + User */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector Dropdown */}
            <div className="relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={t('header.language')}
              >
                <span className="text-xl">{currentLanguage?.flag}</span>
                <span className="text-sm font-medium text-gray-700">
                  {currentLanguage?.code.toUpperCase()}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-gray-600 transition-transform ${
                    isLangDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Language Dropdown */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {LANGUAGES.map((lang) => (
                    <Link
                      key={lang.code}
                      href={`/${lang.code}`}
                      onClick={() => setIsLangDropdownOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-2 hover:bg-primary-light/20 transition-colors ${
                        currentLocale === lang.code ? 'bg-primary-light/10' : ''
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="text-sm font-medium text-gray-700">{lang.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* User Dropdown */}
            <div className="relative" ref={userDropdownRef}>
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="User menu"
              >
                <User size={20} className="text-gray-700" />
                <ChevronDown
                  size={16}
                  className={`text-gray-600 transition-transform ${
                    isUserDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* User Dropdown Menu */}
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <a
                    href="#account"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-light/20 transition-colors"
                  >
                    {t('header.user.account')}
                  </a>
                  <a
                    href="#orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-light/20 transition-colors"
                  >
                    {t('header.user.orders')}
                  </a>
                  <hr className="my-2 border-gray-200" />
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    {t('header.user.logout')}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Slide-in */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[120px] bg-white z-40 animate-in slide-in-from-right duration-300">
            <div className="flex flex-col h-full p-6 space-y-6">
              {/* Navigation Links */}
              <nav className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block text-lg text-gray-700 hover:text-primary-dark transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`header.nav.${item.key}`)}
                  </a>
                ))}
              </nav>

              <hr className="border-gray-200" />

              {/* Language Selector */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {t('header.language')}
                </p>
                {LANGUAGES.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      currentLocale === lang.code
                        ? 'bg-primary-dark text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium">{lang.label}</span>
                  </Link>
                ))}
              </div>

              <hr className="border-gray-200" />

              {/* User Menu */}
              <div className="space-y-3">
                <a
                  href="#account"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={20} className="text-gray-700" />
                  <span className="font-medium text-gray-700">{t('header.user.account')}</span>
                </a>
                <a
                  href="#orders"
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.user.orders')}
                </a>
                <button className="block w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                  {t('user.logout')}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
