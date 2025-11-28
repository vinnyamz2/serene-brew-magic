import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo-sono.png";
import heroTea from "@/assets/hero-tea.jpg";
const Hero = () => {
  const navigate = useNavigate();
  const handleCTA = () => {
    navigate('/pre-checkout');
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-night via-primary to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-botanical/30 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center md:text-left animate-fade-in">
            <img src={logo} alt="Guia Natural do Sono Profundo" className="w-full max-w-md mx-auto md:mx-0 animate-float" />
            
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-night-foreground leading-tight">
                Durma mais rápido com receitas naturais{" "}
                <span className="text-gradient">simples e poderosas</span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl text-yellow-300">
                Descubra 3 receitas anti-insônia com ingredientes baratos, mas conheça em destaque o{" "}
                <span className="font-semibold text-accent">Chá Sono 7</span> — usado por milhares de pessoas para adormecer rápido e relaxar profundamente.
              </p>
            </div>

            <Button size="lg" onClick={handleCTA} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-pulse-glow group">
              <span className="truncate">Quero desbloquear as receitas agora</span>
              <ArrowRight className="ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Mais de 15.000 pessoas</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-botanical flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img src={heroTea} alt="Chá relaxante para dormir melhor" className="w-full h-auto" />
              {/* Steam effect overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-transparent via-secondary/40 to-transparent rounded-full blur-2xl animate-steam-rise"></div>
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-t from-transparent via-secondary/30 to-transparent rounded-full blur-xl animate-steam-rise" style={{
                animationDelay: '0.8s'
              }}></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-botanical rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>;
};
export default Hero;