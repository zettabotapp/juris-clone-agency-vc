
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  // Mensagem pré-definida para o WhatsApp
  const whatsappMessage = "Olá. Vim do seu site e gostaria de mais informações, pode me ajudar?";
  const whatsappNumber = "5508001119999";
  const whatsappLink = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
  const whatsappMobileLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Verifica se está em dispositivo móvel
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  // Link do WhatsApp baseado no dispositivo
  const getWhatsAppLink = () => {
    return isMobile() ? whatsappMobileLink : whatsappLink;
  };

  return (
    <footer className="bg-darkbg text-white">
      <div className="max-w-[92rem] mx-auto py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          {/* About */}
          <div className="md:col-span-3">
            <h3 className="text-lg md:text-xl font-playfair font-bold text-gold-500 mb-4 md:mb-6">VC Advogados</h3>
            <p className="mb-4 text-xs md:text-sm text-gray-300">
              Somos um escritório de advocacia especializado, que presta assessoria jurídica completa para clientes pessoas físicas e jurídicas.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <SocialIcon href="https://www.facebook.com/vieiracamargoadvogados#" icon={<Facebook size={16} />} />
              <SocialIcon href="https://www.instagram.com/vieiracamargoadvogados/?igsh=MTJ5bDdyaWVnaHg0ag%3D%3D#" icon={<Instagram size={16} />} />
              {/* <SocialIcon href="#" icon={<Linkedin size={16} />} />
              <SocialIcon href="#" icon={<Twitter size={16} />} /> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-lg md:text-xl font-playfair font-bold text-gold-500 mb-4 md:mb-6">Acesso Rápido</h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <FooterLink to="/">Início</FooterLink>
              <FooterLink to="/quem-somos">Quem Somos</FooterLink>
              <FooterLink to="/atuacao">Atuação</FooterLink>
              <FooterLink to="/noticias">Blog</FooterLink>
              <FooterLink to="/contato">Contato</FooterLink>
            </ul>
          </div>

          {/* Contact Manaus */}
          <div className="md:col-span-3">
            <h3 className="text-lg md:text-xl font-playfair font-bold text-gold-500 mb-4 md:mb-6">Manaus/AM</h3>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-gold-500 shrink-0 mt-1" />
                <span className="text-gray-300 text-xs md:text-sm">
                  Rua Maria Mansour, 438, Manaus - AM, 69078-551
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 text-gold-500 shrink-0 mt-1" />
                <a href="tel:08001119999" className="text-gray-300 hover:text-gold-500 text-xs md:text-sm">0800 111 9999</a>
              </li>
              <li className="flex">
                <Mail size={16} className="mr-2 text-gold-500 shrink-0 mt-1" />
                <a
                  href="mailto:contato@vieiracamargoadvogados.com.br"
                  className="text-gray-300 hover:text-gold-500 text-xs md:text-sm"
                >
                  contato@vieiracamargoadvogados.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Florianópolis */}
          <div className="md:col-span-4 md:col-start-9">
            <h3 className="text-lg md:text-xl font-playfair font-bold text-gold-500 mb-4 md:mb-6">Florianópolis/SC</h3>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-gold-500 shrink-0 mt-1" />
                <span className="text-gray-300 text-xs md:text-sm">
                  Avenida Hercílio Luz, 639 - Sala 1107, Edifício Alpha Centauri, Centro, Florianópolis - SC, 88020-000
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 text-gold-500 shrink-0 mt-1" />
                <a href="tel:08001119999" className="text-gray-300 hover:text-gold-500 text-xs md:text-sm">0800 111 9999</a>
              </li>
              <li className="flex">
                <Mail size={16} className="mr-2 text-gold-500 shrink-0 mt-1" />
                <a
                  href="mailto:contato@vieiracamargoadvogados.com.br"
                  className="text-gray-300 hover:text-gold-500 text-xs md:text-sm"
                >
                  contato@vieiracamargoadvogados.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-xs md:text-sm">
            &copy; {new Date().getFullYear()} VC Advogados. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button - Atualizado com a mensagem pré-definida */}
      <a 
        href="https://wa.me/5508001119999" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 bg-green-600 p-2 md:p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50 flex items-center justify-center"
        onClick={() => {
          // Para dispositivos desktop, podemos usar o evento de clique para garantir que abra no web.whatsapp
          if (!isMobile()) {
            window.open(whatsappLink, '_blank');
            return false;
          }
        }}
      >
        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.881 11.881 0 005.7 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  );
};

const SocialIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    className="bg-gold-900 hover:bg-gold-800 h-7 w-7 md:h-8 md:w-8 rounded-full flex items-center justify-center text-gold-500 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link to={to} className="text-gray-300 hover:text-gold-500 transition-colors duration-300">
      {children}
    </Link>
  </li>
);

export default Footer;
