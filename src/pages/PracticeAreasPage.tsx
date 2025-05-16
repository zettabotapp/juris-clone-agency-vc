
import { Link } from 'react-router-dom';
import PageHeader from '@/components/layout/PageHeader';
import { 
  Building, 
  Home, 
  Users, 
  Scale, 
  Briefcase, 
  FileText,
  HandCoins,
  Car 
} from 'lucide-react';

const PracticeAreasPage = () => {
  const areas = [
    {
      id: "direito-bancario",
      icon: <Building size={48} className="text-gold-500 mb-4" />,
      title: "Direito Bancário",
      description: "Assessoria em operações bancárias, contratos financeiros e defesa contra práticas abusivas.",
      services: [
        "Revisão de contratos bancários",
        "Ações revisionais de financiamentos",
        "Contestação de tarifas abusivas",
        "Defesa em ações de cobrança e execução",
        "Renegociação de dívidas",
        "Assessoria em operações de crédito",
        "Defesa contra inscrição indevida em cadastros restritivos"
      ]
    },
    {
      id: "direito-consumidor",
      icon: <Car size={48} className="text-gold-500 mb-4" />,
      title: "Direito do Consumidor",
      description: "Proteção dos seus direitos nas relações de consumo contra empresas e prestadores de serviço.",
      services: [
        "Defesa contra cobranças indevidas",
        "Reparação por vícios em produtos e serviços",
        "Indenização por danos morais e materiais",
        "Descumprimento contratual",
        "Publicidade enganosa",
        "Práticas abusivas",
        "Defesa nas relações com planos de saúde"
      ]
    },
    {
      id: "direito-familia",
      icon: <Users size={48} className="text-gold-500 mb-4" />,
      title: "Direito da Família e Sucessões",
      description: "Suporte em todas as questões familiares, patrimoniais e sucessórias.",
      services: [
        "Divórcios consensuais e litigiosos",
        "Inventários e partilha de bens",
        "Pensão alimentícia e revisional",
        "Guarda e visitação de filhos",
        "União estável e homoafetiva",
        "Testamentos e planejamento sucessório",
        "Investigação de paternidade"
      ]
    },
    {
      id: "direito-civil",
      icon: <Scale size={48} className="text-gold-500 mb-4" />,
      title: "Direito Civil",
      description: "Representação em questões contratuais, indenizatórias e patrimoniais.",
      services: [
        "Elaboração e revisão de contratos",
        "Ações de indenização por danos morais e materiais",
        "Responsabilidade civil",
        "Direito imobiliário",
        "Posse e propriedade",
        "Ações possessórias",
        "Usucapião e regularização fundiária"
      ]
    },
    {
      id: "direito-trabalho",
      icon: <Briefcase size={48} className="text-gold-500 mb-4" />,
      title: "Direito do Trabalho",
      description: "Defesa dos direitos trabalhistas para empregados e consultoria para empresas.",
      services: [
        "Reclamações trabalhistas",
        "Cálculos de verbas rescisórias",
        "Assédio moral e sexual no ambiente de trabalho",
        "Horas extras e adicional noturno",
        "Consultorias para empresas",
        "Acordos e homologações",
        "Defesa em processos administrativos"
      ]
    },
    {
      id: "direito-tributario",
      icon: <HandCoins size={48} className="text-gold-500 mb-4" />,
      title: "Direito Tributário",
      description: "Consultoria e contencioso em matéria tributária para pessoas e empresas.",
      services: [
        "Planejamento tributário",
        "Recuperação de créditos tributários",
        "Defesas fiscais administrativas e judiciais",
        "Parcelamentos especiais",
        "Consultoria fiscal preventiva",
        "Exclusão de tributos da base de cálculo",
        "Contestação de autos de infração"
      ]
    },
    {
      id: "atuacao-extrajudicial",
      icon: <FileText size={48} className="text-gold-500 mb-4" />,
      title: "Atuação Extrajudicial",
      description: "Resolução de conflitos sem necessidade de processos judiciais.",
      services: [
        "Mediação e conciliação",
        "Negociação de acordos",
        "Consultoria preventiva",
        "Assessoria em reuniões",
        "Notificações extrajudiciais",
        "Elaboração de pareceres",
        "Due diligence"
      ]
    },
    {
      id: "direito-empresarial",
      icon: <Home size={48} className="text-gold-500 mb-4" />,
      title: "Direito Empresarial",
      description: "Assessoria jurídica completa para empresas de todos os portes.",
      services: [
        "Constituição e abertura de empresas",
        "Contratos empresariais",
        "Direito societário e operações societárias",
        "Recuperação judicial e falência",
        "Propriedade intelectual",
        "Direito concorrencial",
        "Fusões e aquisições"
      ]
    }
  ];

  return (
    <>
      <PageHeader 
        title="Áreas de Atuação" 
        breadcrumbs={[
          { label: 'Início', path: '/' },
          { label: 'Atuação' }
        ]}
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">
              Nossos Serviços Jurídicos
            </h2>
            <p className="text-center text-gray-600">
              A VC Advogados oferece soluções jurídicas completas e personalizadas para pessoas físicas e jurídicas em diversas áreas do Direito. Nossa equipe de advogados especializados está pronta para atender suas necessidades com excelência técnica e compromisso.
            </p>
          </div>
          
          <div className="space-y-20">
            {areas.map((area) => (
              <div key={area.id} id={area.id} className="scroll-mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg">
                    <div className="text-center md:text-left">
                      {area.icon}
                      <h3 className="text-2xl font-bold mb-3 font-playfair">{area.title}</h3>
                      <p className="text-gray-700 mb-6">{area.description}</p>
                      <Link 
                        to="/contato" 
                        className="btn-primary inline-block"
                      >
                        Consultar
                      </Link>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold mb-4">Serviços Oferecidos:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {area.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-gold-500 text-white flex items-center justify-center text-xs font-bold mr-2 mt-0.5">✓</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreasPage;
