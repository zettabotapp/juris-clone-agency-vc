import { Link } from 'react-router-dom';
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

const PracticeAreasSection = () => {
  const areas = [
    {
      icon: <Building size={40} className="text-gold-500" />,
      title: "Direito Bancário",
      description: "Assessoria em operações bancárias, contratos financeiros e defesa contra práticas abusivas.",
      items: ["Revisão contratual", "Ações revisionais", "Contestação de tarifas"]
    },
    {
      icon: <Car size={40} className="text-gold-500" />,
      title: "Direito do Consumidor",
      description: "Proteção dos seus direitos nas relações de consumo contra empresas e prestadores de serviço.",
      items: ["Vícios de produto", "Práticas abusivas", "Indenizações"]
    },
    {
      icon: <Users size={40} className="text-gold-500" />,
      title: "Direito da Família e Sucessões",
      description: "Suporte em todas as questões familiares, patrimoniais e sucessórias.",
      items: ["Divórcios", "Inventários", "Pensão alimentícia"]
    },
    {
      icon: <Scale size={40} className="text-gold-500" />,
      title: "Direito Civil",
      description: "Representação em questões contratuais, indenizatórias e patrimoniais.",
      items: ["Contratos", "Responsabilidade civil", "Danos morais"]
    },
    {
      icon: <Briefcase size={40} className="text-gold-500" />,
      title: "Direito do Trabalho",
      description: "Defesa dos direitos trabalhistas para empregados e consultoria para empresas.",
      items: ["Reclamações trabalhistas", "Rescisões", "Direitos trabalhistas"]
    },
    {
      icon: <HandCoins size={40} className="text-gold-500" />,
      title: "Direito Tributário",
      description: "Consultoria e contencioso em matéria tributária para pessoas e empresas.",
      items: ["Planejamento tributário", "Defesas fiscais", "Recuperação tributária"]
    },
    {
      icon: <FileText size={40} className="text-gold-500" />,
      title: "Atuação Extrajudicial",
      description: "Resolução de conflitos sem necessidade de processos judiciais.",
      items: ["Mediação", "Acordos", "Consultoria preventiva"]
    },
    {
      icon: <Home size={40} className="text-gold-500" />,
      title: "Direito Empresarial",
      description: "Assessoria jurídica completa para empresas de todos os portes.",
      items: ["Constituição de empresas", "Contratos empresariais", "Direito societário"]
    }
  ];

  return (
    <section 
      className="py-20 relative bg-cover bg-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"
      }}
    >
      <div 
        className="container-custom mx-auto" 
        style={{ maxWidth: "110rem" }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title inline-block text-white mx-auto after:left-1/2 after:-translate-x-1/2">
            ATUAÇÃO
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto font-light">
            Contamos com profissionais especializados para atender diferentes demandas jurídicas,
            oferecendo soluções personalizadas e eficientes para cada caso.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="bg-darkbg bg-opacity-80 rounded-lg p-6 border-l-4 border-gold-500 hover:border-l-8 transition-all duration-300 flex flex-col shadow-lg"
            >
              <div className="mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 font-cormorant">
                {area.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm flex-grow font-light">
                {area.description}
              </p>
              <ul className="mb-6 space-y-2">
                {area.items.map((item, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-center">
                    <span className="h-1.5 w-1.5 bg-gold-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                to={`/atuacao#${area.title.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-gold-500 hover:text-gold-400 text-sm font-medium mt-auto transition-colors flex items-center"
              >
                Saiba mais 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;