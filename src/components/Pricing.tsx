import { Button } from "@/components/ui/button";
import { Check, Lock, Zap, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/pre-checkout');
  };

  const includes = [
    "Receita completa do Chá Sono 7",
    "Chá CalmEase (Bônus 1)",
    "Mix Relax Night (Bônus 2)",
    "Guia de preparo passo a passo",
    "Rotina noturna ideal",
    "Mini-técnica de respiração",
    "Playlist binaural (PDF com link)",
    "Acesso imediato após pagamento",
    "Acesso vitalício ao conteúdo",
    "Garantia de 7 dias"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background" id="price">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-6 py-2 rounded-full border border-accent animate-pulse-glow">
                <Zap className="w-4 h-4" />
                <span className="font-semibold">Oferta Especial</span>
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Invista no seu sono hoje
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Acesso completo ao método natural que já ajudou milhares de pessoas
            </p>
          </div>

          {/* Pricing card */}
          <div className="bg-gradient-to-br from-night to-primary text-night-foreground rounded-3xl shadow-2xl overflow-hidden hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="p-8 md:p-12 space-y-8">
              {/* Price */}
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl text-night-foreground/60 line-through">
                      De R$ 97
                    </span>
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                      82% OFF
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-accent">
                      R$ 17
                    </div>
                    <p className="text-night-foreground/80 text-sm sm:text-base md:text-lg">
                      Pagamento único • Acesso imediato
                    </p>
                  </div>
                </div>
              </div>

              {/* What's included */}
              <div className="bg-night-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Gift className="w-5 h-5 text-accent" />
                  <h3 className="text-xl font-bold">O que você recebe:</h3>
                </div>
                <div className="grid gap-3">
                  {includes.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${0.3 + (index * 0.03)}s` }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 bg-botanical rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-botanical-foreground" />
                        </div>
                      </div>
                      <span className="text-night-foreground leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                onClick={handleCheckout}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base sm:text-lg md:text-xl py-6 md:py-8 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <span className="truncate">Quero pagar só R$ 17 e acessar agora</span>
              </Button>

              {/* Trust badges */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 pt-2 md:pt-4 text-xs sm:text-sm text-night-foreground/80">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Lock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Pagamento 100% seguro</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-botanical/10 border-2 border-botanical rounded-2xl p-6 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Se você não gostar do conteúdo ou achar que não vale R$ 17, 
                devolvemos seu dinheiro. Simples assim. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;