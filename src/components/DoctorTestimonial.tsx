import { Quote } from "lucide-react";
import doctorImage from "@/assets/doctor.jpg";

const DoctorTestimonial = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl hover-lift animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Doctor image */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40">
                  <img 
                    src={doctorImage} 
                    alt="Dra. Andreia Martins"
                    className="w-full h-full object-cover rounded-full border-4 border-botanical/30"
                  />
                  <div className="absolute -top-2 -right-2 bg-botanical text-botanical-foreground p-2 rounded-full">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Dra. Andreia Martins
                  </h3>
                  <p className="text-sm text-botanical font-semibold">
                    Especialista em Neurociência do Sono
                  </p>
                </div>

                <blockquote className="text-muted-foreground leading-relaxed text-lg border-l-4 border-botanical pl-6">
                  "O sono depende mais de rotina e relaxamento do que as pessoas imaginam. 
                  Ingredientes naturais podem ajudar o corpo a entrar no estado ideal para 
                  dormir com qualidade. A natureza oferece soluções simples que, quando bem 
                  utilizadas, fazem toda a diferença."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Natural</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-botanical">15k+</div>
              <div className="text-sm text-muted-foreground">Usuários</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5min</div>
              <div className="text-sm text-muted-foreground">Preparo</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">R$ 7</div>
              <div className="text-sm text-muted-foreground">Investimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorTestimonial;