import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="pt-16">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-light/20 to-white">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-primary-dark mb-6">
                Green <span className="text-primary-light">Sap</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-4">
                Suplemento Antioxidante Natural
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Potencia tu bienestar con la ciencia de la naturaleza
              </p>
              <button className="bg-primary-dark text-white px-8 py-3 rounded-full text-lg hover:bg-primary-light hover:text-gray-900 transition-all duration-300 shadow-lg">
                Descubrir más
              </button>
            </div>
          </section>

          {/* Contenido adicional */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold text-primary-dark mb-8">
                Bienvenido a Green Sap
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tu suplemento antioxidante natural está aquí. Pronto agregaremos más contenido a esta página.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
