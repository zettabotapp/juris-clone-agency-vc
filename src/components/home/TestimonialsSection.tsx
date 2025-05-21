import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const GOOGLE_PLACE_ID = "0x926c05b2515aaeaf:0xb76311c8917b8177"; // Place ID do local
const GOOGLE_API_KEY = "SUA_CHAVE_DE_API_AQUI"; // Substitua pela sua chave de API

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();
        if (data.result && data.result.reviews) {
          setTestimonials(data.result.reviews);
        }
      } catch (error) {
        console.error("Erro ao buscar avaliações do Google:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setVisibleTestimonials(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials
              .slice(currentIndex, currentIndex + visibleTestimonials)
              .map((testimonial, index) => (
                <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.profile_photo_url || "https://via.placeholder.com/48"}
                      alt={testimonial.author_name}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover mr-3 md:mr-4"
                    />
                    <div>
                      <div className="flex justify-between items-center w-full">
                        <h4 className="font-bold text-sm md:text-base">{testimonial.author_name}</h4>
                        <span className="text-xs text-gray-500">{new Date(testimonial.time * 1000).toLocaleDateString()}</span>
                      </div>
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
                  <p className="text-gray-600 italic text-xs md:text-sm">{testimonial.text}</p>
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