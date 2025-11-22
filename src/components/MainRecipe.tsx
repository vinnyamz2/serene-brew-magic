import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import ingredients from "@/assets/ingredients.jpg";

const MainRecipe = () => {
  const scrollToPrice = () => {
    document.getElementById('price')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    "Reduz ansiedade e cortisol naturalmente",
    "Ingredientes baratos e fáceis de encontrar",
    "Preparo simples em menos de 5 minutos",
    "Efeito calmante em 15-20 minutos",
    "Sem dependência química",
    "Usado por milhares de pessoas"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20" id="main-recipe">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-6 py-2 rounded-full border border-accent">
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold">Receita Principal</span>
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12 space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Chá Sono 7
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O preparo simples que reduz ansiedade e acalma o corpo em minutos
            </p>
          </div>

          {/* Content grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            {/* Left - Image */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img 
                  src={ingredients} 
                  alt="Ingredientes naturais do Chá Sono 7" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent"></div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-card p-8 rounded-2xl border border-border space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Por que o Chá Sono 7 funciona?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Uma combinação única de ingredientes naturais e fáceis de encontrar, 
                  que ajudam a reduzir o cortisol à noite e induzir o relaxamento profundo 
                  do corpo e da mente.
                </p>
                
                <div className="space-y-4 pt-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="p-1 bg-botanical/20 rounded-full group-hover:bg-botanical/30 transition-colors">
                          <Check className="w-4 h-4 text-botanical" />
                        </div>
                      </div>
                      <span className="text-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Description card */}
          <div className="bg-gradient-to-br from-night to-primary text-night-foreground p-8 md:p-12 rounded-3xl shadow-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Acesso ao preparo completo do Chá Sono 7
              </h3>
              <p className="text-lg text-night-foreground/90 leading-relaxed">
                Você vai receber o passo a passo detalhado: lista exata de ingredientes, 
                proporções corretas, modo de preparo, melhor horário para tomar, e dicas 
                para potencializar os efeitos relaxantes.
              </p>
              <p className="text-lg text-night-foreground/90 leading-relaxed">
                <strong className="text-accent">Importante:</strong> Este é um método natural 
                que promove relaxamento e bem-estar. Não substitui orientação médica.
              </p>
              
              <Button 
                size="lg"
                onClick={scrollToPrice}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mt-8"
              >
                Quero acesso ao preparo completo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainRecipe;