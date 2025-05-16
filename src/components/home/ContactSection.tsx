
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title inline-block mx-auto after:left-1/2 after:-translate-x-1/2">
            Contato
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Entre em contato conosco para agendar uma consulta inicial ou obter mais informações sobre nossos serviços.
          </p>
          <div className="mt-8 inline-flex items-center">
            <Phone size={20} className="text-gold-500 mr-2" />
            <a href="tel:08000000000" className="text-xl font-bold hover:text-gold-600 transition-colors">
              0800 000 0000
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Manaus Office */}
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-gold-500 mr-2" />
                <h3 className="text-xl font-bold font-playfair">Manaus/AM</h3>
              </div>
              <address className="not-italic text-gray-600 mb-4">
                Av. Djalma Batista, 1661 <br />
                Business Center Millennium, Sala 810 <br />
                Chapada, Manaus - AM, 69050-010
              </address>
              <div className="flex items-center mb-2">
                <Phone size={18} className="text-gold-500 mr-2" />
                <a href="tel:08000000000" className="text-gray-600 hover:text-gold-600 transition-colors">
                  0800 000 0000
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-gold-500 mr-2" />
                <a href="mailto:contato@vcadvogados.com" className="text-gray-600 hover:text-gold-600 transition-colors">
                  contato@vcadvogados.com
                </a>
              </div>
            </div>
            <iframe 
              title="Localização VC Advogados Manaus"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7923555127564!2d-60.03379818474979!3d-3.1071536410281367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c057b9c593dbf%3A0x5bd37a8c2ebd8654!2sMillennium%20Shopping%20Center!5e0!3m2!1sen!2sbr!4v1626897354520!5m2!1sen!2sbr" 
              className="w-full h-72" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
            />
          </div>
          
          {/* Florianópolis Office */}
          <div className="rounded-lg overflow-hidden shadow-md bg-white">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <MapPin size={24} className="text-gold-500 mr-2" />
                <h3 className="text-xl font-bold font-playfair">Florianópolis/SC</h3>
              </div>
              <address className="not-italic text-gray-600 mb-4">
                Av. Rio Branco, 380 <br />
                Sala 902, Edifício Barra Sul <br />
                Centro, Florianópolis - SC, 88015-200
              </address>
              <div className="flex items-center mb-2">
                <Phone size={18} className="text-gold-500 mr-2" />
                <a href="tel:08000000000" className="text-gray-600 hover:text-gold-600 transition-colors">
                  0800 000 0000
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-gold-500 mr-2" />
                <a href="mailto:contato@vcadvogados.com" className="text-gray-600 hover:text-gold-600 transition-colors">
                  contato@vcadvogados.com
                </a>
              </div>
            </div>
            <iframe 
              title="Localização VC Advogados Florianópolis"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.979359162783!2d-48.55274048499805!3d-27.59661098283544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527390534e0d601%3A0x92dd1a1a285ff0bf!2sAv.%20Rio%20Branco%2C%20380%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC%2C%2088015-200!5e0!3m2!1sen!2sbr!4v1626897392520!5m2!1sen!2sbr" 
              className="w-full h-72" 
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
