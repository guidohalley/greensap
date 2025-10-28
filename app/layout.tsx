import type { Metadata } from 'next';

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
  return children;
}
