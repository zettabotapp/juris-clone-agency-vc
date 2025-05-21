
import { useEffect } from 'react';

const TestimonialsSection = () => {
  useEffect(() => {
    // Carregar dinamicamente o script do Elfsight
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Adicionar CSS para esconder a mensagem de widget grátis
    const style = document.createElement('style');
    style.textContent = `
      .elfsight-app-a92b8084-ee49-4b47-b138-ff8c187139de .eapps-google-reviews-slider-header-container,
      .elfsight-app-a92b8084-ee49-4b47-b138-ff8c187139de a[href*="elfsight.com"],
      .elfsight-app-a92b8084-ee49-4b47-b138-ff8c187139de .eapps-google-reviews-slider-popup-widget-header,
      .elfsight-app-a92b8084-ee49-4b47-b138-ff8c187139de .eapps-google-reviews-page-navigation-dots,
      .elfsight-app-a92b8084-ee49-4b47-b138-ff8c187139de .eapps-widget-toolbar,
      [class*="free-google-reviews-widget"],
      [data-text*="Free Google Reviews widget"],
      [class*="eapps-widget"] [class*="-bottom"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        overflow: hidden !important;
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

        {/* Widget do Elfsight para Google Reviews */}
        <div className="elfsight-app-a92b8084-ee49-4b47-b138-ff8c187139de" data-elfsight-app-lazy></div>

        <div className="text-center mt-6 md:mt-8">
          <a
            href="https://www.google.com/maps/place/VC+Advogados/@-27.5974017,-48.5479982,17z/data=!3m1!4b1!4m6!3m5!1s0x926c05b2515aaeaf:0xb76311c8917b8177!8m2!3d-27.5974017!4d-48.5479982!16s%2Fg%2F11swbvswj2?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Escreva sua avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
