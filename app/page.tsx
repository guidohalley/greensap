import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirigir a la versión en español por defecto
  redirect('/es');
}
