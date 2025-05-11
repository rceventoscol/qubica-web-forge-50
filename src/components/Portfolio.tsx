import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const portfolioItems = [{
    title: "Soluciones IA",
    category: "Plataforma IA",
    image: "/lovable-uploads/237a73c0-0080-4df6-b89e-e5931a8af7e1.png",
    url: "https://qovia.netlify.app/"
  }, {
    title: "Salud dental",
    category: "Dental Gold",
    image: "/lovable-uploads/22422c64-47e0-46d0-973d-01dd70f2333f.png",
    url: "https://dentalgold.netlify.app/"
  }, {
    title: "Contartara",
    category: "Landing Page",
    image: "/lovable-uploads/61aa5ac3-80a7-423b-bb6a-1aa253cd5f90.png",
    url: "https://contartarabga.netlify.app/"
  }, {
    title: "Paisajismo",
    category: "Tierra Fértil",
    image: "/lovable-uploads/41403315-e8f2-470d-892c-712f9ea3afaa.png",
    url: "https://tierrafertilpaisajismo.netlify.app/"
  }, {
    title: "Curso de inglés",
    category: "Tick.english",
    image: "/lovable-uploads/c13c2f7d-5df0-40c3-8cd2-b43151e0e986.png",
    url: "https://tickenglish.netlify.app/"
  }, {
    title: "Marketing",
    category: "SeoBoost",
    image: "/lovable-uploads/9c93d285-3659-40b5-816a-f5aed8218d2c.png",
    url: "https://seoboostcol.netlify.app/"
  }];
  const handleItemClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return <section id="portfolio" className="section-padding relative bg-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Nuestro <span className="hero-gradient">Portafolio</span></h2>
          <p className="text-lg text-gray-300">
            Nuestros diseños hablan por nosotros. Explora algunos de nuestros trabajos recientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer" onMouseEnter={() => setHoveredItem(index)} onMouseLeave={() => setHoveredItem(null)} onClick={() => handleItemClick(item.url)}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className={`absolute inset-0 bg-gradient-to-t from-qubica-charcoal/90 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${hoveredItem === index ? 'opacity-100' : 'opacity-0 sm:opacity-100'}`}>
                <span className="text-qubica-blue text-sm uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className={`flex items-center transition-opacity transition-transform duration-500 ${hoveredItem === index ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}>
                  <span className="text-sm text-gray-300 flex items-center">
                    Visitar sitio <ExternalLink size={14} className="ml-2" />
                  </span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Portfolio;