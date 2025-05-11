import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would typically send the form data to your server or email service
    console.log("Form submitted:", formData);
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos lo antes posible."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return <section id="contact" className="section-padding relative bg-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <p className="text-lg text-gray-300">
            ¿Listo para dar el siguiente paso? Contáctanos y responderemos a todas tus dudas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div className="gradient-card p-8">
              <h3 className="text-xl font-semibold mb-4">Contacto directo</h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Responderemos a tu consulta lo antes posible, normalmente en menos de 24 horas.
                </p>
                <Button className="btn-primary w-full" onClick={() => window.open("https://wa.me/message/GAKSCPX7RSX3K1", "_blank")}>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.127 17.114c-.272.857-1.347 1.568-2.768 1.77-.732.102-1.691.13-2.751-.128-1.215-.295-2.43-.765-3.517-1.446-1.26-.786-2.382-1.826-3.313-2.964-.534-.65-.982-1.326-1.33-2.04-.363-.742-.595-1.48-.671-2.166-.083-.74.105-1.421.443-1.879.276-.386.656-.582 1.112-.582.181 0 .361.019.536.056.508.105.871.486 1.134 1.245.134.386.299.797.484 1.232.128.292.093.615-.1.883l-.345.497c-.208.3-.177.563-.03.812.134.23.297.462.491.713.177.231.391.458.62.673.223.21.446.402.668.573.221.17.427.326.614.436.215.12.395.19.53.196.188.006.373-.077.485-.24l.344-.497c.269-.392.693-.427.984-.297.435.183.847.35 1.236.487.313.11.675.276.937.488.259.21.435.561.489.948.071.51-.01 1.04-.244 1.526z" />
                  </svg>
                  Contáctanos por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;