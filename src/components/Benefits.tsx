import { Check, Moon, Heart, Sunrise, Sparkles, Brain, Shield } from "lucide-react";

const benefits = [
  {
    icon: Moon,
    title: "Relaxe seu corpo",
    description: "Libere a tensão acumulada do dia e prepare-se para um sono profundo"
  },
  {
    icon: Brain,
    title: "Reduza a ansiedade noturna",
    description: "Acalme os pensamentos e desacelere a mente antes de dormir"
  },
  {
    icon: Sparkles,
    title: "Durma mais rápido",
    description: "Adormeça naturalmente sem ficar horas rolando na cama"
  },
  {
    icon: Sunrise,
    title: "Acorde mais leve",
    description: "Tenha noites restauradoras e amanheça com mais energia"
  },
  {
    icon: Heart,
    title: "Tudo com ingredientes simples",
    description: "Sem dependência química, apenas o poder da natureza"
  },
  {
    icon: Shield,
    title: "Método natural comprovado",
    description: "Usado por milhares de pessoas com resultados reais"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              O que você vai conquistar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforme suas noites e seus dias com um método natural e eficaz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Checklist style summary */}
          <div className="mt-16 bg-gradient-to-br from-botanical/10 to-accent/10 border-2 border-botanical/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
              Resumindo: você vai ter acesso a
            </h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                "3 receitas completas anti-insônia",
                "Chá Sono 7 (receita principal)",
                "Lista exata de ingredientes",
                "Modo de preparo detalhado",
                "Melhor horário para consumir",
                "Rotina noturna natural",
                "Dicas de potencialização",
                "Acesso imediato e vitalício"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-botanical rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-botanical-foreground" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;