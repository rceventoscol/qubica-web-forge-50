
import { Check, ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Pricing = () => {
  const plans = [{
    name: "Express",
    price: "$500.000",
    description: "Ideal para negocios que inician",
    features: ["One page profesional", "Integración con WhatsApp", "Diseño responsive", "Dominio por 1 año", "Entrega en 5 días"],
    popular: false
  }, {
    name: "Pro",
    price: "$1.200.000",
    description: "Página completa para crecer",
    features: ["2-3 secciones profesionales", "Sistema de reservas", "Branding básico", "Dominio por 1 año", "Hosting incluido", "Entrega en 7 días"],
    popular: true
  }, {
    name: "Full Web",
    price: "$2.000.000",
    description: "Solución integral para tu negocio",
    features: ["Multi-página completa", "Diseño avanzado personalizado", "Tienda online básica", "Copywriting con IA", "Integraciones avanzadas", "Dominio y hosting premium", "Soporte técnico 30 días"],
    popular: false
  }];

  const compareData = [
    {
      name: "One Page",
      Qubica: 500000,
      Competidores: 800000,
    },
    {
      name: "Multi Page",
      Qubica: 1200000,
      Competidores: 1800000,
    },
    {
      name: "Full Web",
      Qubica: 2000000,
      Competidores: 3200000,
    },
  ];

  const formatCurrency = (value) => {
    return `$${(value).toLocaleString('es-CO')}`;
  };

  const chartConfig = {
    Qubica: {
      label: "Qubica Studio",
      color: "#3A86FF",
    },
    Competidores: {
      label: "Competidores",
      color: "#9B87F5",
    },
  };

  return <section id="pricing" className="section-padding bg-black/30 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Precios <span className="hero-gradient">competitivos</span></h2>
          <p className="text-lg text-gray-300 mb-8">
            Páginas web profesionales desde $500.000 hasta $2.000.000, con la mejor relación calidad-precio del mercado.
          </p>
        </div>

        <div className="gradient-card p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between mb-6">
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold mb-4 hero-gradient">Comparativa de precios</h3>
              <p className="text-gray-300">
                Nuestros precios son consistentemente más competitivos que el promedio del mercado, sin comprometer la calidad ni las funcionalidades.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <ShieldCheck className="text-qubica-blue w-6 h-6" />
                <p className="font-semibold">Garantía de mejor precio</p>
              </div>
            </div>

            <ChartContainer className="w-full md:w-1/2 h-80" config={chartConfig}>
              <BarChart data={compareData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" tick={{ fill: "#fff" }} />
                <YAxis tickFormatter={formatCurrency} tick={{ fill: "#fff" }} />
                <ChartTooltip content={<ChartTooltipContent formatter={(value) => formatCurrency(value)} />} />
                <Bar dataKey="Qubica" fill="var(--color-Qubica)" />
                <Bar dataKey="Competidores" fill="var(--color-Competidores)" />
                <ChartLegend content={<ChartLegendContent />} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`gradient-card ${plan.popular ? 'border-qubica-blue/50 relative before:absolute before:inset-0 before:border-2 before:border-qubica-blue/50 before:rounded-2xl before:z-0 before:animate-pulse overflow-hidden' : ''}`}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <p className="mb-6 text-gray-300">{plan.description}</p>
                <div className="space-y-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <Check className="text-qubica-blue mr-2 h-5 w-5 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className={`w-full mt-8 ${plan.popular ? 'btn-primary' : 'btn-secondary'}`} 
                  onClick={() => window.open("https://wa.me/573122695899", "_blank")}
                >
                  Solicitar ahora
                </Button>
              </div>
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-qubica-blue text-white text-xs px-2 py-1 rounded-full">
                  Recomendado
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" onClick={() => window.open("https://wa.me/573122695899", "_blank")} className="btn-secondary bg-blue-700 hover:bg-blue-600">
            ¿Necesitas algo diferente? Pide una propuesta personalizada
          </Button>
        </div>
      </div>
    </section>;
};

export default Pricing;
