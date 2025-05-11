
import { MessageCircle, Palette, Settings, Globe } from "lucide-react";
const Process = () => {
  const steps = [{
    icon: <MessageCircle size={32} className="text-qubica-blue" />,
    title: "Nos cuentas tu idea",
    description: "Compartimos una breve reunión donde conocemos tu negocio y objetivos."
  }, {
    icon: <Palette size={32} className="text-qubica-blue" />,
    title: "En 24h te mostramos un diseño inicial",
    description: "Trabajamos rápido para presentarte un boceto de tu nuevo sitio web."
  }, {
    icon: <Settings size={32} className="text-qubica-blue" />,
    title: "Ajustamos lo necesario",
    description: "Refinamos el diseño basándonos en tus comentarios y necesidades."
  }, {
    icon: <Globe size={32} className="text-qubica-blue" />,
    title: "¡Sitio online y entregado!",
    description: "Lanzamos tu sitio y te entregamos todo listo para usar."
  }];
  return <section id="process" className="section-padding relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Proceso <span className="hero-gradient">Qubica</span></h2>
          <p className="text-lg text-gray-300">
            Hacemos que crear tu web sea simple y efectivo con nuestro proceso optimizado.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-gradient-to-b from-qubica-blue to-qubica-violet -translate-x-1/2"></div>

          <div className="space-y-20 lg:space-y-0">
            {steps.map((step, index) => <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 md:gap-12 lg:gap-20`}>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-center">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>

                <div className="relative lg:w-0 flex items-center justify-center">
                  <div className="rounded-full bg-qubica-charcoal border-4 border-gradient-to-r from-qubica-blue to-qubica-violet p-4 z-10">
                    <div className="rounded-full bg-qubica-blue/10 w-16 h-16 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-qubica-blue to-qubica-violet blur-xl opacity-20"></div>
                </div>

                {/* Empty div for layout on even items */}
                <div className="lg:w-1/2 hidden lg:block"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Process;
