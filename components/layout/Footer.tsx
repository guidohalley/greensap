'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Green <span className="text-primary-light">Sap</span>
            </h3>
            <p className="text-gray-200 text-sm max-w-md">
              Suplemento antioxidante natural con enfoque médico y científico.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-200 hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#science" className="text-gray-200 hover:text-white transition-colors">
                  Investigación
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-200 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#privacy" className="text-gray-200 hover:text-white transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-gray-200 hover:text-white transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-light/30 mt-8 pt-8 text-center text-sm text-gray-200">
          <p>© {currentYear} Green Sap. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
