import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import MainRecipe from "@/components/MainRecipe";
import BonusRecipes from "@/components/BonusRecipes";
import DoctorTestimonial from "@/components/DoctorTestimonial";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import WhatsAppSection from "@/components/WhatsAppSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <PainPoints />
      <MainRecipe />
      <BonusRecipes />
      <DoctorTestimonial />
      <Benefits />
      <Pricing />
      <FAQ />
      <WhatsAppSection />
      <Footer />
    </div>
  );
};

export default Index;
