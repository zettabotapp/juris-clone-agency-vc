
import { useState } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <PageHeader 
        title="Entre em Contato" 
        breadcrumbs={[
          { label: 'Início', path: '/' },
          { label: 'Contato' }
        ]}
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="section-title">Informações de Contato</h2>
              
              <div className="space-y-8 mb-10">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gold-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Phone size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Telefone</h3>
                    <a href="tel:08000000000" className="text-gray-700 hover:text-gold-600 transition-colors block">0800 000 0000</a>
                    <p className="text-gray-500 text-sm mt-1">Seg - Sex, 9:00 - 18:00</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gold-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Mail size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">E-mail</h3>
                    <a href="mailto:contato@vieiracamargoadvogados.com.br" className="text-gray-700 hover:text-gold-600 transition-colors block">contato@vieiracamargoadvogados.com.br</a>
                    <p className="text-gray-500 text-sm mt-1">Responderemos o mais breve possível</p>
                  </div>
                </div>
                
                {/* Office 1 */}
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gold-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <MapPin size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Manaus/AM</h3>
                    <address className="not-italic text-gray-700">
                      Rua Maria Mansour, 438<br />
                      Japiim, Manaus - AM, 69078-551
                    </address>
                  </div>
                </div>
                
                {/* Office 2 */}
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-gold-100 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <MapPin size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Florianópolis/SC</h3>
                    <address className="not-italic text-gray-700">
                      Avenida Hercílio Luz, 639<br />
                      Sala 1107, Edifício Alpha Centauri<br />
                      Centro, Florianópolis - SC, 88020-000
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href="#" 
                  className="h-10 w-10 bg-darkbg rounded-full flex items-center justify-center text-white hover:bg-gold-500 transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 bg-darkbg rounded-full flex items-center justify-center text-white hover:bg-gold-500 transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="h-10 w-10 bg-darkbg rounded-full flex items-center justify-center text-white hover:bg-gold-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 font-playfair">Envie uma Mensagem</h2>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">
                    Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
                    {submitError}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome Completo *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefone *
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Assunto *
                      </label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500" 
                        required
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="Direito Bancário">Direito Bancário</option>
                        <option value="Direito do Consumidor">Direito do Consumidor</option>
                        <option value="Direito da Família">Direito da Família</option>
                        <option value="Direito Civil">Direito Civil</option>
                        <option value="Direito do Trabalho">Direito do Trabalho</option>
                        <option value="Direito Tributário">Direito Tributário</option>
                        <option value="Atuação Extrajudicial">Atuação Extrajudicial</option>
                        <option value="Direito Empresarial">Direito Empresarial</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem *
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message} 
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gold-500 focus:border-gold-500" 
                      required 
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Maps Section */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Manaus/AM</h3>
              <iframe 
                title="Localização VC Advogados Manaus"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7923555127564!2d-60.03379818474979!3d-3.1071536410281367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c057b9c593dbf%3A0x5bd37a8c2ebd8654!2sMillennium%20Shopping%20Center!5e0!3m2!1sen!2sbr!4v1626897354520!5m2!1sen!2sbr" 
                className="w-full h-96 rounded-lg shadow-md" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
              />
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair">Florianópolis/SC</h3>
              <iframe 
                title="Localização VC Advogados Florianópolis"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.979359162783!2d-48.55274048499805!3d-27.59661098283544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527390534e0d601%3A0x92dd1a1a285ff0bf!2sAv.%20Rio%20Branco%2C%20380%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC%2C%2088015-200!5e0!3m2!1sen!2sbr!4v1626897392520!5m2!1sen!2sbr" 
                className="w-full h-96 rounded-lg shadow-md" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
