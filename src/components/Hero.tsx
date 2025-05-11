import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center animated-bg overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-qubica-charcoal opacity-95"></div>
        <div className="absolute w-full h-full">
          {Array.from({
          length: 15
        }).map((_, i) => <div key={i} className="absolute rounded-full bg-gradient-to-br from-qubica-blue/20 to-qubica-violet/20" style={{
          width: `${Math.random() * 300 + 50}px`,
          height: `${Math.random() * 300 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5,
          filter: 'blur(50px)',
          transform: `scale(${Math.random() * 1 + 0.5})`,
          animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`
        }} />)}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-0">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm bg-white/10 backdrop-blur-sm rounded-full animate-fade-in-up opacity-0" style={{
          animationDelay: '0.3s'
        }}>
            Desarrollo Web con IA
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up opacity-0" style={{
          animationDelay: '0.5s'
        }}>
            <span>Webs hermosas.</span> <span className="hero-gradient">Rápidas.</span> <span>Sin complicaciones.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{
          animationDelay: '0.7s'
        }}>
            Creamos tu página web en tiempo récord, lista para vender, conectar y crecer.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{
          animationDelay: '0.9s'
        }}>
            <Button className="btn-primary w-full sm:w-auto" onClick={() => window.open("https://wa.me/message/GAKSCPX7RSX3K1", "_blank")}>
              Solicita tu cotización ahora
              <ArrowRight size={16} className="ml-2" />
            </Button>
            
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-1 h-10 relative">
          <div className="absolute w-full h-1/2 bg-gradient-to-b from-transparent to-qubica-blue"></div>
        </div>
      </div>
    </section>;
};
export default Hero;