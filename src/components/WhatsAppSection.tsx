import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WhatsAppSection = () => {
  const whatsappNumber = "5511999999999"; // formato internacional
  const message = encodeURIComponent("Olá! Vim pela landing page e tenho uma dúvida sobre o Guia Natural do Sono Profundo.");
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-botanical/10 to-secondary/10 border-2 border-botanical/30 rounded-3xl p-8 md:p-12 text-center space-y-6 hover-lift animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-botanical/20 rounded-full animate-pulse-glow">
                <MessageCircle className="w-8 h-8 text-botanical" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Não entendeu ou ficou com alguma dúvida?
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Clique abaixo e fale direto com um atendente no WhatsApp. 
              Estamos aqui para ajudar você!
            </p>
            
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 animate-[wiggle_1s_ease-in-out_infinite] hover:scale-105 group"
            >
              <MessageCircle className="mr-2 group-hover:rotate-12 transition-transform" />
              Falar com atendente agora
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Atendimento: (11) 99999-9999
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;