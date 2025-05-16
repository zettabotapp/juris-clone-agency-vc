
import PageHeader from '@/components/layout/PageHeader';
import { FileCheck, Phone, Mail } from 'lucide-react';

const CorrespondentPage = () => {
  const services = [
    "Acompanhamento de audiências",
    "Acompanhamento de perícias",
    "Cópias e digitalização de processos",
    "Despachos com juízes e desembargadores",
    "Distribuição de iniciais e recursos",
    "Elaboração de peças processuais",
    "Protocolo de petições",
    "Registro e averbações de documentos",
    "Sustentações orais",
    "Diligências em geral"
  ];

  return (
    <>
      <PageHeader 
        title="Correspondente Jurídico" 
        breadcrumbs={[
          { label: 'Início', path: '/' },
          { label: 'Correspondente Jurídico' }
        ]}
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="section-title">PROPOSTA DE PRESTAÇÃO DE SERVIÇOS ADVOCATÍCIOS</h2>
              
              <p className="mb-6 text-gray-700">
                A VC Advogados atua como correspondente jurídico em todo o território nacional, prestando 
                serviços especializados para escritórios de advocacia, departamentos jurídicos de empresas 
                e advogados autônomos.
              </p>
              
              <p className="mb-6 text-gray-700">
                Com profissionais altamente capacitados e experientes, oferecemos suporte completo em diversas 
                comarcas, com agilidade e eficiência, permitindo que nossos parceiros economizem tempo e recursos 
                com deslocamentos.
              </p>
              
              <p className="mb-10 text-gray-700">
                Nossa equipe está sempre à disposição para representar sua demanda com o mesmo zelo e 
                profissionalismo que utilizamos em nossos próprios processos, garantindo confiabilidade 
                e resultados satisfatórios.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-900 font-playfair">NOSSOS SERVIÇOS</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <FileCheck size={20} className="text-gold-500 mr-3 mt-1 shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-12">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Vantagens de contratar nossos serviços</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">✓</span>
                    <span>Economia com deslocamentos e estadias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">✓</span>
                    <span>Profissionais com conhecimento local e relações institucionais</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">✓</span>
                    <span>Atendimento ágil e personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">✓</span>
                    <span>Relatórios detalhados de diligências</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-5 w-5 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">✓</span>
                    <span>Flexibilidade para atender demandas urgentes</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-darkbg rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gold-500">Solicite uma Proposta</h3>
                <p className="text-gray-300 mb-6">
                  Entre em contato conosco para solicitar uma proposta personalizada para seus serviços de correspondência jurídica.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Phone size={18} className="text-gold-500 mr-3" />
                    <a href="tel:08000000000" className="text-white hover:text-gold-500 transition-colors">
                      0800 000 0000
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="text-gold-500 mr-3" />
                    <a href="mailto:correspondente@vcadvogados.com" className="text-white hover:text-gold-500 transition-colors">
                      correspondente@vcadvogados.com
                    </a>
                  </div>
                </div>
                <a href="/contato" className="btn-primary block text-center">
                  Entrar em Contato
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Áreas Atendidas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-gold-500 rounded-full mr-2" />
                    <span>Justiça Estadual</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-gold-500 rounded-full mr-2" />
                    <span>Justiça Federal</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-gold-500 rounded-full mr-2" />
                    <span>Justiça do Trabalho</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-gold-500 rounded-full mr-2" />
                    <span>Tribunais Superiores</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-gold-500 rounded-full mr-2" />
                    <span>Cartórios e Órgãos Administrativos</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-gold-500 rounded-full mr-2" />
                    <span>Procon, Delegacias e demais órgãos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorrespondentPage;
