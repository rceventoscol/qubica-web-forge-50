
import { Check, ArrowRight, WhatsApp } from "lucide-react";
import { Button } from "@/components/ui/button";
const Pricing = () => {
  const plans = [{
    name: "Express",
    price: "$XXX",
    description: "Ideal para negocios que inician",
    features: ["One page profesional", "Integración con WhatsApp", "Diseño responsive", "Dominio por 1 año", "Entrega en 5 días"],
    popular: false
  }, {
    name: "Pro",
    price: "$XXX",
    description: "Página completa para crecer",
    features: ["2-3 secciones profesionales", "Sistema de reservas", "Branding básico", "Dominio por 1 año", "Hosting incluido", "Entrega en 7 días"],
    popular: true
  }, {
    name: "Full Web",
    price: "$XXX",
    description: "Solución integral para tu negocio",
    features: ["Multi-página completa", "Diseño avanzado personalizado", "Tienda online básica", "Copywriting con IA", "Integraciones avanzadas", "Dominio y hosting premium", "Soporte técnico 30 días"],
    popular: false
  }];
  return <section id="pricing" className="section-padding bg-black/30 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Soluciones reales, <span className="hero-gradient">sin rodeos.</span></h2>
          <p className="text-lg text-gray-300 mb-8">
            Nos adaptamos a tu negocio y a tu presupuesto.
            En Qubica Studio te garantizamos una propuesta más accesible, transparente y potente que la mayoría de agencias tradicionales.
            Dinos qué necesitas, y deja que la magia suceda.
          </p>
          
          <Button 
            variant="default" 
            onClick={() => window.open("https://wa.me/message/GAKSCPX7RSX3K1", "_blank")} 
            className="btn-primary"
          >
            ¡Quiero mi propuesta ahora!
            <WhatsApp size={16} />
          </Button>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" onClick={() => window.open("https://wa.me/message/GAKSCPX7RSX3K1", "_blank")} className="btn-secondary bg-blue-700 hover:bg-blue-600">
            ¿Necesitas algo diferente? Pide una propuesta personalizada
          </Button>
        </div>
      </div>
    </section>;
};
export default Pricing;
