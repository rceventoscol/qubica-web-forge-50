
import { Monitor, ShoppingBag, MapPin, MessageSquare, Layers, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Monitor size={24} className="text-qubica-blue" />,
      title: "Desarrollo web a medida",
      description: "Sitios web personalizados según tus necesidades específicas."
    },
    {
      icon: <Layers size={24} className="text-qubica-blue" />,
      title: "Landing pages",
      description: "Páginas optimizadas para campañas y productos."
    },
    {
      icon: <MapPin size={24} className="text-qubica-blue" />,
      title: "Páginas para negocios locales",
      description: "Perfectas para atraer clientes de tu zona."
    },
    {
      icon: <ShoppingBag size={24} className="text-qubica-blue" />,
      title: "Tiendas online",
      description: "eCommerce básico para comenzar a vender online."
    },
    {
      icon: <MessageSquare size={24} className="text-qubica-blue" />,
      title: "Integraciones",
      description: "WhatsApp, reservas, pagos y más."
    },
    {
      icon: <Palette size={24} className="text-qubica-blue" />,
      title: "Branding básico",
      description: "Logo + estilo visual para tu negocio."
    }
  ];

  return (
    <section id="services" className="section-padding bg-black/30 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Nuestros <span className="hero-gradient">Servicios</span></h2>
          <p className="text-lg text-gray-300">
            Todo lo que necesitas, sin vueltas. Creamos tu página, la conectamos, y la dejamos lista para que empieces a facturar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="gradient-card p-6 md:p-8"
            >
              <div className="rounded-full bg-qubica-blue/10 w-12 h-12 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
