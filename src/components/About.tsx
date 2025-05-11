
import { Bolt, Target, Bot, DollarSign } from "lucide-react";

const About = () => {
  const values = [
    { 
      icon: <Bolt size={28} className="text-qubica-blue" />, 
      title: "Rápido", 
      description: "Entregas en tiempo récord sin sacrificar calidad" 
    },
    { 
      icon: <Target size={28} className="text-qubica-blue" />, 
      title: "Profesional", 
      description: "Diseño y desarrollo de alto nivel" 
    },
    { 
      icon: <Bot size={28} className="text-qubica-blue" />, 
      title: "Con IA", 
      description: "Tecnología avanzada para mejores resultados" 
    },
    { 
      icon: <DollarSign size={28} className="text-qubica-blue" />, 
      title: "Precio competitivo", 
      description: "Excelente relación calidad-precio" 
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">¿Qué es <span className="hero-gradient">Qubica Studio</span>?</h2>
          <p className="text-lg text-gray-300">
            Somos un estudio especializado en desarrollo web profesional. Diseñamos sitios elegantes, funcionales y listos para usarse. Utilizamos inteligencia artificial para optimizar cada paso del proceso y entregar calidad sin perder tiempo ni dinero.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="gradient-card p-6 md:p-8"
            >
              <div className="rounded-full bg-qubica-blue/10 w-12 h-12 flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
