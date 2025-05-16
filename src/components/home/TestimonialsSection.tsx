
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Excelente atendimento! O escritório me ajudou na resolução de uma questão familiar complexa com total profissionalismo e sensibilidade. Recomendo com certeza!"
  },
  {
    id: 2,
    name: "João Oliveira",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Minha experiência com o escritório VC Advogados foi excelente. Profissionais comprometidos que realmente se importam com os clientes e seus casos."
  },
  {
    id: 3,
    name: "Ana Costa",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    text: "Assessoria jurídica completa e de alta qualidade. Conseguiram resolver meu caso tributário de forma rápida e eficiente. Obrigada pelo suporte!"
  },
  {
    id: 4,
    name: "Carlos Mendes",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    text: "Profissionais altamente capacitados e atenciosos. Comunicação clara e objetiva durante todo o processo. Meu caso trabalhista foi resolvido melhor do que eu esperava."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Show only 1 testimonial on mobile, 2 on larger screens
  const visibleTestimonials = window.innerWidth < 768 ? 1 : 2;
  
  const nextTestimonial = () => {
    if (currentIndex + visibleTestimonials < testimonials.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  
  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - visibleTestimonials);
    }
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
        
        <div className="relative px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials
              .slice(currentIndex, currentIndex + visibleTestimonials)
              .map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name} 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-3 md:mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-sm md:text-base">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={12} 
                            className={i < testimonial.rating ? "text-gold-500 fill-gold-500" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-xs md:text-sm">"{testimonial.text}"</p>
                </div>
              ))}
          </div>

          <div className="flex justify-center mt-6 md:mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold-500 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gold-500 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-white transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-6 md:mt-8">
          <a 
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_ID" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gold-600 font-semibold hover:text-gold-700 text-sm md:text-base"
          >
            Ver mais avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
