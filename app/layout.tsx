import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Green Sap - Suplemento Antioxidante Natural',
  description:
    'Potencia tu bienestar con Green Sap, un suplemento antioxidante natural con enfoque médico y científico.',
  keywords: ['antioxidante', 'suplemento natural', 'Green Sap', 'salud', 'bienestar'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
