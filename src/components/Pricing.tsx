import { Check, ArrowRight } from "lucide-react";
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
          <h2 className="section-title">Planes y <span className="hero-gradient">Precios</span></h2>
          <p className="text-lg text-gray-300">
            Soluciones a medida para cada etapa de tu negocio. Precios transparentes, sin sorpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => <div key={index} className={`gradient-card p-8 relative ${plan.popular ? "border-qubica-blue/50" : "border-white/10"}`}>
              {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-qubica-blue text-white text-sm font-medium py-1 px-4 rounded-full my-[27px]">
                  Popular
                </div>}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => <div key={idx} className="flex items-center">
                    <Check size={18} className="text-qubica-blue mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>)}
              </div>
              <Button className={`w-full ${plan.popular ? "btn-primary" : "btn-secondary"}`} onClick={() => window.open("https://wa.me/message/GAKSCPX7RSX3K1", "_blank")}>
                Solicitar cotización
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>)}
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