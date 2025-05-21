
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const clients = [
  { name: "Reobote", logo: "/lovable-uploads/logo.png" },
  { name: "Novelo Aviação", logo: "/lovable-uploads/logo.png" },
  { name: "Rio Negro Log", logo: "/lovable-uploads/logo.png" },
  { name: "Con Seven", logo: "/lovable-uploads/logo.png" },
  { name: "Coopebras", logo: "/lovable-uploads/logo.png" },
  { name: "Fazenda Esmeralda", logo: "/lovable-uploads/logo.png" },
  { name: "Golden Digital", logo: "/lovable-uploads/logo.png" },
  { name: "Esfriar", logo: "/lovable-uploads/logo.png" },
  { name: "WA Máquinas e Transportes", logo: "/lovable-uploads/logo.png" },
  { name: "Orion", logo: "/lovable-uploads/logo.png" },
  { name: "Netos Sabores", logo: "/lovable-uploads/logo.png" },
];

const ClientCarousel = () => {
  return (
    <div className="container-custom py-8 bg-white">
      <h3 className="text-xl font-semibold text-center mb-6">Nossos Clientes</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {clients.map((client, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
              <div className="p-1 h-24 flex items-center justify-center">
                <div className="text-center">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="h-12 mx-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                  <p className="text-xs mt-2 font-medium text-gray-600">{client.name}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default ClientCarousel;
