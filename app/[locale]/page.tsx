import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import HerbalComposition from '@/components/sections/HerbalComposition';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ScientificStudies from '@/components/sections/ScientificStudies';
import ContactCTA from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
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

      {/* Placeholder sections - se desarrollarán en siguientes pasos */}
      <HeroSection />
      <AboutSection />
      <HerbalComposition />
      <TestimonialsSection />
      <ScientificStudies />
      <ContactCTA />
    </div>
  );
}
