import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
const Values = () => {
  return <section id="values" className="section-padding bg-gradient-to-b from-black/40 to-black/20 relative bg-black/[0.31]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Casos de <span className="hero-gradient">éxito</span></h2>
          <p className="text-lg text-gray-300 mb-8">
            Estos son solo algunos ejemplos de nuestros proyectos. 
            En Qubica Studio nos adaptamos a las necesidades específicas de cada cliente, 
            ofreciendo soluciones personalizadas que generan resultados reales.
          </p>
          
          <Button variant="default" onClick={() => window.open("https://wa.me/message/GAKSCPX7RSX3K1", "_blank")} className="btn-primary">
            Contáctanos para tu proyecto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Values;