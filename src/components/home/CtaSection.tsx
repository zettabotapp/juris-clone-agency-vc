
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-darkbg rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
            {/* Image Column */}
            <div className="relative flex items-center justify-center p-0">
              <img 
                src="/lovable-uploads/temos_solucao.png" 
                alt="Advogada Trabalhista VC Advogados"
                className="w-full h-auto max-w-full object-contain"
                style={{ maxHeight: '350px' }}
              />
            </div>
                        
            {/* Content Column */}
            <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 font-playfair">
                Nós Temos a Solução para o seu Caso!
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">
                Nosso escritório oferece atendimento personalizado para cada cliente, 
                entendendo suas necessidades específicas e desenvolvendo estratégias 
                jurídicas eficazes para alcançar os melhores resultados.
              </p>
              <Link to="/contato" className="btn-primary inline-block text-sm md:text-base">
                ENTRAR EM CONTATO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
