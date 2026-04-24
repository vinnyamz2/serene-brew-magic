import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import MainRecipe from "@/components/MainRecipe";
import BonusRecipes from "@/components/BonusRecipes";
import DoctorTestimonial from "@/components/DoctorTestimonial";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import WhatsAppSection from "@/components/WhatsAppSection";
import Footer from "@/components/Footer";
import VideoSpotlight from "@/components/VideoSpotlight";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* Vídeo logo no início — prende a atenção */}
      <VideoSpotlight
        videoSrc="/videos/testimonial-2.mp4"
        badge="Resultado real"
        title={<>"Dormi em <span className="text-accent">15 minutos</span> na primeira noite"</>}
        subtitle="Veja o relato de quem testou o Chá Sono 7 e mudou a rotina noturna por completo."
        ctaText="Quero experimentar também"
        variant="dark"
      />

      <PainPoints />
      <MainRecipe />

      {/* Vídeo no meio — quebra o conteúdo */}
      <VideoSpotlight
        videoSrc="/videos/testimonial-1.mp4"
        badge="Veja antes de continuar"
        title={<>Ela não dormia há <span className="text-accent">meses</span>. Veja o que mudou.</>}
        subtitle="Em menos de 1 minuto você entende por que mais de 15.000 pessoas já estão usando esse método natural."
        ctaText="Quero o método agora"
        variant="accent"
        reverse
      />

      <BonusRecipes />
      <DoctorTestimonial />
      <Benefits />

      {/* Bloco final com os 3 vídeos juntos */}
      <Testimonials />

      <Pricing />
      <FAQ />
      <WhatsAppSection />
      <Footer />
    </div>
  );
};

export default Index;
