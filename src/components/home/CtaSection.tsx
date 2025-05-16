
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-darkbg rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Column */}
            <div className="relative h-64 md:h-auto">
              <img 
                src="/lovable-uploads/vieirasolucao.png" 
                alt="VC Advogados Solução" 
                className="object-contain w-full h-full"
              />
            </div>
                        
            {/* Content Column */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-playfair">
                Nós Temos a Solução para o seu Caso!
              </h2>
              <p className="text-gray-300 mb-8">
                Nosso escritório oferece atendimento personalizado para cada cliente, 
                entendendo suas necessidades específicas e desenvolvendo estratégias 
                jurídicas eficazes para alcançar os melhores resultados.
              </p>
              <Link to="/contato" className="btn-primary inline-block">
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
