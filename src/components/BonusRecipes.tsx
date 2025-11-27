import { Card } from "@/components/ui/card";
import { Gift } from "lucide-react";
import recipe1 from "@/assets/tea-recipe-1.jpg";
import recipe2 from "@/assets/tea-recipe-2.jpg";

const bonusRecipes = [
  {
    name: "Chá CalmEase",
    description: "Blend especial para momentos de ansiedade diurna e tensão muscular",
    image: recipe1,
    features: ["Relaxamento profundo", "Reduz tensão", "Acalma a mente"]
  },
  {
    name: "Mix Relax Night",
    description: "Combinação poderosa para quem acorda no meio da noite e não volta a dormir",
    image: recipe2,
    features: ["Sono contínuo", "Relaxamento duradouro", "Acordar restaurado"]
  }
];

const BonusRecipes = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-botanical/20 text-botanical-foreground px-6 py-2 rounded-full border border-botanical">
              <Gift className="w-4 h-4" />
              <span className="font-semibold">Bônus Exclusivos</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Mais 2 receitas poderosas incluídas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Além do Chá Sono 7, você recebe outras duas receitas anti-insônia
          </p>
        </div>

        {/* Horizontal scroll wrapper */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide md:justify-center">
            {bonusRecipes.map((recipe, index) => (
              <Card 
                key={index}
                className="flex-shrink-0 w-80 md:w-96 snap-center group hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img 
                    src={recipe.image} 
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {recipe.name}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {recipe.description}
                  </p>
                  
                  <div className="space-y-2 pt-2">
                    {recipe.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-botanical"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Scroll hint on mobile */}
          <div className="md:hidden flex justify-center items-center gap-2 text-sm text-muted-foreground mt-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            <span>Arraste para ver mais</span>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-botanical/10 border-2 border-botanical rounded-2xl p-6 max-w-2xl">
            <p className="text-lg font-semibold text-foreground">
              3 receitas completas por apenas{" "}
              <span className="text-botanical text-2xl">R$ 17</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default BonusRecipes;