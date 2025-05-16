
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const values = [
    "Agilidade",
    "Atitude de dono",
    "Foco no cliente",
    "Excelência",
    "Ética",
    "Transparência"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title text-left">Quem Somos</h2>
            <p className="mb-6 text-gray-700">
              VC Advogados é um escritório de advocacia especializado em soluções jurídicas 
              para pessoas físicas e jurídicas, atuante em diversas áreas do direito.
            </p>
            <p className="mb-6 text-gray-700">
              Nossa missão é proporcionar segurança jurídica aos nossos clientes através 
              de um atendimento eficiente e personalizado, prezando sempre pela ética e excelência.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Nossos valores:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-gold-500 rounded-full mr-2" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link to="/quem-somos" className="btn-primary">
              Saiba Mais
            </Link>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gold-500 rounded-lg -z-10 opacity-20"></div>
            <img 
              src="/lovable-uploads/Vanessa.png" 
              alt="Sócia fundadora VC Advogados" 
              className="rounded-lg shadow-xl w-3/4 h-auto mx-auto"
            />
            <div className="text-center mt-4">
              <h4 className="text-lg font-bold text-gray-900">Dra. Vanessa Vieira</h4>
              <p className="text-gray-700">Advogada</p>
              <p className="text-gray-700">Sócia Fundadora</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
