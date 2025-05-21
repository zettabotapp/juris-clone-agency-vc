import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="max-w-[92rem] mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title inline-block mx-auto after:left-1/2 after:-translate-x-1/2">
            Contato
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto px-4">
            Entre em contato conosco para agendar uma consulta inicial ou obter mais informações sobre nossos serviços.
          </p>
          <div className="mt-6 md:mt-8 inline-flex items-center">
            <Phone size={18} className="text-gold-500 mr-2" />
            <a href="tel:08001119999" className="text-lg md:text-xl font-bold hover:text-gold-600 transition-colors">
              0800 111 9999
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Manaus Office */}
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="p-4 md:p-6">
              <div className="flex items-center mb-3 md:mb-4">
                <MapPin size={20} className="text-gold-500 mr-2" />
                <h3 className="text-lg md:text-xl font-bold font-playfair">Manaus/AM</h3>
              </div>
              <address className="not-italic text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                Rua Maria Mansour, 438 <br />
                Japiim, Manaus - AM, 69078-551
              </address>
              <div className="flex items-center mb-2 text-sm md:text-base">
                <Phone size={16} className="text-gold-500 mr-2" />
                <a href="tel:08001119999" className="text-gray-600 hover:text-gold-600 transition-colors">
                  0800 111 9999
                </a>
              </div>
              <div className="flex items-center text-sm md:text-base">
                <Mail size={16} className="text-gold-500 mr-2 flex-shrink-0" />
                <a href="mailto:contato@vieiracamargoadvogados.com.br" className="text-gray-600 hover:text-gold-600 transition-colors">
                  contato@vieiracamargoadvogados.com.br
                </a>
              </div>
            </div>
            <iframe 
              title="Localização VC Advogados Manaus"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7967.823263752814!2d-59.99056300000001!3d-3.118076!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c0522d0db18a7%3A0xb8c5edaa7cd3e6ab!2sR.%20Maria%20Mansour%2C%20438%20-%20Japiim%2C%20Manaus%20-%20AM%2C%2069078-551!5e0!3m2!1spt-BR!2sbr!4v1747764041358!5m2!1spt-BR!2sbr" 
              className="w-full h-56 md:h-72" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
            />
          </div>
          
          {/* Florianópolis Office */}
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="p-4 md:p-6">
              <div className="flex items-center mb-3 md:mb-4">
                <MapPin size={20} className="text-gold-500 mr-2" />
                <h3 className="text-lg md:text-xl font-bold font-playfair">Florianópolis/SC</h3>
              </div>
              <address className="not-italic text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                Avenida Hercílio Luz, 639 <br />
                Sala 1107, Edifício Alpha Centauri <br />
                Centro, Florianópolis - SC, 88020-000
              </address>
              <div className="flex items-center mb-2 text-sm md:text-base">
                <Phone size={16} className="text-gold-500 mr-2" />
                <a href="tel:08001119999" className="text-gray-600 hover:text-gold-600 transition-colors">
                  0800 111 9999
                </a>
              </div>
              <div className="flex items-center text-sm md:text-base">
                <Mail size={16} className="text-gold-500 mr-2 flex-shrink-0" />
                <a href="mailto:contato@vieiracamargoadvogados.com.br" className="text-gray-600 hover:text-gold-600 transition-colors">
                  contato@vieiracamargoadvogados.com.br
                </a>
              </div>
            </div>
            <iframe 
              title="Localização VC Advogados Florianópolis"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7071.748112588271!2d-48.547997!3d-27.597434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527383ad9a1e201%3A0xb9fb923d51da1e2d!2sAv.%20Herc%C3%ADlio%20Luz%2C%20639%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC%2C%2088020-000!5e0!3m2!1spt-BR!2sbr!4v1747764162273!5m2!1spt-BR!2sbr" 
              className="w-full h-56 md:h-72" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
