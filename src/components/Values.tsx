import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
const Values = () => {
  return <section id="values" className="section-padding bg-gradient-to-b from-black/40 to-black/20 relative bg-black/[0.31]">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Soluciones reales, <span className="hero-gradient">sin rodeos.</span></h2>
          <p className="text-lg text-gray-300 mb-8">
            Nos adaptamos a tu negocio y a tu presupuesto.
            En Qubica Studio te garantizamos una propuesta más accesible, transparente y potente que la mayoría de agencias tradicionales.
            Dinos qué necesitas, y deja que la magia suceda.
          </p>
          
          <Button variant="default" onClick={() => window.open("https://wa.me/message/GAKSCPX7RSX3K1", "_blank")} className="btn-primary">
            Contáctanos hoy mismo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>;
};
export default Values;