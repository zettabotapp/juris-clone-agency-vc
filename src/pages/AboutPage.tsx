
import PageHeader from '@/components/layout/PageHeader';

const AboutPage = () => {
  return (
    <>
      <PageHeader 
        title="Quem Somos" 
        breadcrumbs={[
          { label: 'Início', path: '/' },
          { label: 'Quem Somos' }
        ]}
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="section-title">Nossa História</h2>
              <p className="mb-6 text-gray-700">
                Fundada por profissionais com ampla experiência no mercado jurídico, a VC Advogados nasceu do desejo de oferecer serviços jurídicos de excelência, com atendimento personalizado e resultados efetivos para cada cliente.
              </p>
              <p className="mb-6 text-gray-700">
                Desde o início, nossa missão tem sido proporcionar segurança jurídica aos nossos clientes através de um atendimento eficiente e personalizado, prezando sempre pela ética e excelência.
              </p>
              <p className="mb-10 text-gray-700">
                Com escritórios em Manaus/AM e Florianópolis/SC, atendemos clientes em todo o Brasil, oferecendo soluções jurídicas completas para pessoas físicas e jurídicas, sempre com o compromisso de entregar resultados concretos.
              </p>
              
              <h2 className="section-title mt-12">Nossa Missão e Valores</h2>
              <p className="mb-6 text-gray-700">
                Nossa missão é proporcionar segurança jurídica e soluções eficazes para nossos clientes, através de atendimento personalizado e excelência técnica.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold-500">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Missão</h3>
                  <p className="text-gray-700">
                    Oferecer serviços jurídicos de excelência e gerar resultados concretos, superando as expectativas de nossos clientes.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold-500">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Visão</h3>
                  <p className="text-gray-700">
                    Ser referência nacional em soluções jurídicas personalizadas, reconhecidos pela qualidade, ética e resultados alcançados.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">Nossos valores:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold-500 font-bold">01</span>
                  </div>
                  <h4 className="font-bold mb-1">Agilidade</h4>
                  <p className="text-sm text-gray-600">
                    Respostas rápidas e soluções efetivas para cada demanda.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold-500 font-bold">02</span>
                  </div>
                  <h4 className="font-bold mb-1">Atitude de dono</h4>
                  <p className="text-sm text-gray-600">
                    Comprometimento total com cada caso como se fosse único.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold-500 font-bold">03</span>
                  </div>
                  <h4 className="font-bold mb-1">Foco no cliente</h4>
                  <p className="text-sm text-gray-600">
                    Atendimento personalizado e centrado nas necessidades.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold-500 font-bold">04</span>
                  </div>
                  <h4 className="font-bold mb-1">Excelência</h4>
                  <p className="text-sm text-gray-600">
                    Compromisso com a qualidade técnica e profissionalismo.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold-500 font-bold">05</span>
                  </div>
                  <h4 className="font-bold mb-1">Ética</h4>
                  <p className="text-sm text-gray-600">
                    Integridade e honestidade em todas as relações.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-gold-500 font-bold">06</span>
                  </div>
                  <h4 className="font-bold mb-1">Transparência</h4>
                  <p className="text-sm text-gray-600">
                    Comunicação clara e objetiva em todas as etapas.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Nossa Equipe</h3>
                <p className="text-gray-700 mb-4">
                  Contamos com advogados especializados em diversas áreas do direito, prontos para atender às necessidades específicas de cada cliente.
                </p>
                <a href="/equipe" className="btn-primary block text-center">
                  Conheça Nossa Equipe
                </a>
              </div>
              
              <div className="bg-darkbg rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-gold-500">Agende uma Consulta</h3>
                <p className="text-gray-300 mb-4">
                  Entre em contato conosco para agendar uma consulta inicial e discutir seu caso com nossos especialistas.
                </p>
                <a href="/contato" className="btn-primary block text-center">
                  Entrar em Contato
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
