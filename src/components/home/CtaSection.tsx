
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-darkbg rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Column */}
            <div className="relative h-64 md:h-96 flex items-end justify-center p-0 overflow-hidden" style={{ alignSelf: 'self-end' }}>
              <img 
                src="/lovable-uploads/19638c77-3cff-4886-b117-47992ceaa138.png" 
                alt="VC Advogados Solução"
                className="object-contain w-full h-full max-w-full max-h-full px-4 py-4 md:p-0"
              />
            </div>
                        
            {/* Content Column */}
            <div className="p-6 md:p-8 lg:p-12">
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
