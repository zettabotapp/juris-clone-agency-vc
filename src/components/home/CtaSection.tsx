
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="bg-darkbg rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Column - Ajustado para ficar à esquerda com gradiente */}
            <div className="relative h-64 md:h-80 flex items-center justify-start p-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-darkbg opacity-80 z-10"></div>
              <img 
                src="/lovable-uploads/19638c77-3cff-4886-b117-47992ceaa138.png" 
                alt="VC Advogados Solução"
                className="object-cover w-full h-full"
              />
            </div>
                        
            {/* Content Column */}
            <div className="p-5 md:p-6 lg:p-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 font-playfair">
                Nós Temos a Solução para o seu Caso!
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
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
