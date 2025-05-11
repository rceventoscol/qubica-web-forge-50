
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const portfolioItems = [
    {
      title: "E-commerce de Moda",
      category: "Tienda Online",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Restaurante Gourmet",
      category: "Landing Page",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Estudio de Arquitectura",
      category: "Web Corporativa",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Consultoría Financiera",
      category: "Sitio Profesional",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Clínica Dental",
      category: "Web con Reservas",
      image: "https://images.unsplash.com/photo-1606811842243-4ebec4d09f2e?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Centro de Yoga",
      category: "Landing Page",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Nuestro <span className="hero-gradient">Portafolio</span></h2>
          <p className="text-lg text-gray-300">
            Nuestros diseños hablan por nosotros. Explora algunos de nuestros trabajos recientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-qubica-charcoal/90 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
                hoveredItem === index ? 'opacity-100' : 'opacity-0 sm:opacity-100'
              }`}>
                <span className="text-qubica-blue text-sm uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className={`flex items-center transition-opacity transition-transform duration-500 ${
                  hoveredItem === index ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="text-sm text-gray-300 flex items-center">
                    Ver detalles <ExternalLink size={14} className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
