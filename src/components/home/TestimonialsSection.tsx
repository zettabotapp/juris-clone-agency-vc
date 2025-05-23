
import { useEffect } from 'react';

const TestimonialsSection = () => {
  useEffect(() => {
    // Carregar dinamicamente o script do Elfsight
    const style = document.createElement('style');
    const script = document.createElement('script');
    script.src = 'https://apps.elfsight.com/p/platform.js';
    script.defer = true;
    document.body.appendChild(script);
    style.textContent = `
      /* Container para o widget e botão */
        .reviews-container {
        position: relative !important;
        z-index: 1 !important; /* Adicionar z-index menor */
      }

      /* Posicionar o botão sobre o badge */
      .review-button-overlay {
        position: absolute !important;
        bottom: 0px !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        z-index: 100000 !important;
        background: #3B82F6 !important;
        padding: 8px 16px !important;
        border-radius: 4px !important;
        color: white !important;
        font-weight: 600 !important;
        text-decoration: none !important;
        transition: background-color 0.2s !important;
        margin-bottom: 8px !important;
        /* Adicionando margens laterais brancas */
        box-shadow: 0 0 0 11px #f9fafb !important;
        /* Opcional: adicionar um leve sombreamento para destacar */
        font-size: 13px !important; /* Tamanho base para mobile */
      }

      /* Aumentar o tamanho do texto em telas maiores */
      @media (min-width: 768px) {
        .review-button-overlay {
          font-size: 16px !important;
        }
      }

      /* Aumentar o tamanho do texto em telas maiores */
      @media (min-width: 768px) {
        .review-button-overlay {
          font-size: 16px !important;
        }
      }

      /* Ajustar margens do container principal */
      .elfsight-app-a92b8084-ee49-4b47-b138-ff8c187139de {
        margin: 0 !important;
        padding: 0 !important;
        margin-bottom: 40px !important;
      }
    `;
    document.head.appendChild(style);
  
    return () => {
      // Limpeza ao desmontar o componente
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title inline-block mx-auto after:left-1/2 after:-translate-x-1/2">
            Opinião dos Clientes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto px-4">
            Veja o que nossos clientes têm a dizer sobre a qualidade dos nossos serviços e atendimento.
          </p>
        </div>

        <div className="reviews-container">
          <div 
            className="elfsight-app-a92b8084-ee49-4b47-b138-ff8c187139de" 
            data-elfsight-app-lazy
          ></div>
          
          <a
            href="https://www.google.com/maps/place/VC+Advogados/@-27.5974017,-48.5479982,17z/data=!3m1!4b1!4m6!3m5!1s0x926c05b2515aaeaf:0xb76311c8917b8177!8m2!3d-27.5974017!4d-48.5479982!16s%2Fg%2F11swbvswj2?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="review-button-overlay"
          >
            Escreva sua avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
