'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, User, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';

const NAV_ITEMS = [
  { key: 'product', label: 'Producto', href: '#producto' },
  { key: 'science', label: 'Ciencia', href: '#investigaciones' },
  { key: 'contact', label: 'Contacto', href: '#contacto' },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
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
            ¡ADQUIERA YA SU TRATAMIENTO!
          </p>
        </div>
      </div>

      {/* Navbar Principal */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
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
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
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
                    Mi Cuenta
                  </a>
                  <a
                    href="#orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-light/20 transition-colors"
                  >
                    Mis Pedidos
                  </a>
                  <hr className="my-2 border-gray-200" />
                  <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    Cerrar Sesión
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
                    {item.label}
                  </a>
                ))}
              </nav>

              <hr className="border-gray-200" />

              {/* User Menu */}
              <div className="space-y-3">
                <a
                  href="#account"
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={20} className="text-gray-700" />
                  <span className="font-medium text-gray-700">Mi Cuenta</span>
                </a>
                <a
                  href="#orders"
                  className="block px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mis Pedidos
                </a>
                <button className="block w-full text-left px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
