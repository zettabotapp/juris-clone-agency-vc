
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/e881c3fc-ac11-4d4b-9a12-775d732a681e.png')" 
      }}
    >
      <div className="container-custom py-20 mt-16 md:mt-0">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            VC Advogados Associados
          </h1>
          <p className="text-xl text-white mb-8 max-w-lg">
            Soluções jurídicas personalizadas com excelência e compromisso para pessoas físicas e jurídicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quem-somos" className="btn-primary">
              Sobre o Escritório
            </Link>
            <Link to="/contato" className="btn-outline">
              Entre em Contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
