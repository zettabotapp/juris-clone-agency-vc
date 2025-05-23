
import { useEffect, useState, CSSProperties } from 'react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
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
        padding-bottom: 40px !important;
      }

      /* Posicionar o botão */
      .review-button {
        position: absolute !important;
        bottom: 0px !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        z-index: 10 !important;
        margin-bottom: 8px !important;
        white-space: nowrap !important; /* Evitar quebra de linha */
        font-size: 14px !important;
      }

      /* Div de fundo branco ao redor do botão */
      .button-background {
        position: absolute !important;
        bottom: 0px !important;
        left: 0 !important;
        right: 0 !important;
        z-index: 5 !important;
        background: #f9fafb !important;
        height: 40px !important;
      }

      /* Ocultar badge do widget gratuito */
      a[href*="elfsight.com"],
      a[href*="elfsight.com"][style*="display:inline-flex"],
      a[href*="elfsight.com"][style*="background-color:rgba(238,238,238,0.9)"],
      div[style*="background-color:rgba(238,238,238,0.9)"],
      div[style*="background:rgba(238,238,238,0.9)"],
      div[style*="background: rgba(238,238,238,0.9)"],
      .eapps-google-reviews-slider-header,
      .eapps-google-reviews-slider-header-reviews-count,
      div[style*="margin:8px auto"],
      div[style*="width:100%;text-align:right;font-family:Roboto,sans-serif;font-size:13px"],
      div[style*="width: 100%; text-align: right; font-family: Roboto, sans-serif; font-size: 13px"],
      div[class*="eapps-widget-toolbar"],
      div[data-id="widgetNotice"],
      div[class*="eapps-remove"],
      div[style*="position: relative; text-align: right; height: 14px; display: block; z-index: 9999; margin: 0px auto; font-family: Roboto, Arial, Sans-serif;"],
      div[style*="color: rgb(110, 110, 110)"],
      div[style*="font-size: 13px"] {
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        pointer-events: none !important;
        position: absolute !important;
        display: none !important;
      }

      /* Ajustar margens do container principal */
      .elfsight-app-a92b8084-ee49-4b47-b138-ff8c187139de {
        margin: 0 !important;
        padding: 0 !important;
        margin-bottom: 20px !important;
      }

      /* Garantir que as avaliações fiquem visíveis */
      .eapps-google-reviews-slider-items,
      .eapps-google-reviews-slider-item {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
  
    return () => {
      // Limpeza ao desmontar o componente
      document.body.removeChild(script);
      document.head.removeChild(style);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calcular quando o botão deve ficar invisível (quando chegar perto do cabeçalho)
  const buttonStyle: CSSProperties = {
    opacity: scrollPosition > windowHeight - 150 ? 0 : 1,
    visibility: scrollPosition > windowHeight - 150 ? 'hidden' as const : 'visible' as const,
    transition: 'opacity 0.3s, visibility 0.3s'
  };

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
          
          <div className="button-background" style={buttonStyle}></div>
          
          <Button
            variant="default"
            className="review-button"
            style={buttonStyle}
            asChild
          >
            <a
              href="https://www.google.com/maps/place/VC+Advogados/@-27.5974017,-48.5479982,17z/data=!3m1!4b1!4m6!3m5!1s0x926c05b2515aaeaf:0xb76311c8917b8177!8m2!3d-27.5974017!4d-48.5479982!16s%2Fg%2F11swbvswj2?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escreva sua avaliação
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
