import { Moon, Brain, Clock, Pill, Coffee } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Você demora pra pegar no sono",
    description: "Fica horas rolando na cama sem conseguir relaxar"
  },
  {
    icon: Brain,
    title: "A mente não desliga",
    description: "Pensamentos não param de girar mesmo quando você está cansado"
  },
  {
    icon: Moon,
    title: "Acorda várias vezes",
    description: "Sono leve e interrompido que não descansa"
  },
  {
    icon: Pill,
    title: "Toma remédios e ainda assim não dorme bem",
    description: "Soluções químicas que não resolvem a raiz do problema"
  },
  {
    icon: Coffee,
    title: "Está cansado o dia inteiro",
    description: "Sem energia e produtividade por causa das noites mal dormidas"
  }
];

const PainPoints = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Você se identifica com algum desses problemas?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A insônia afeta milhões de brasileiros. E você não está sozinho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-secondary rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-accent/10 border-2 border-accent rounded-2xl p-8 max-w-3xl">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              E se houvesse uma forma{" "}
              <span className="text-accent">natural, simples e eficaz</span>{" "}
              de quebrar esse ciclo?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;