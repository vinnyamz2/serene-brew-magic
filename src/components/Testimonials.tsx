import { Card } from "@/components/ui/card";
import { Play, Star, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const testimonials = [
  { id: 1, video: "/videos/testimonial-1.mp4", name: "Maria, 42" },
  { id: 2, video: "/videos/testimonial-2.mp4", name: "João, 38" },
  { id: 3, video: "/videos/testimonial-3.mp4", name: "Ana, 51" },
];

const TestimonialCard = ({ video, name, index }: { video: string; name: string; index: number }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    if (!ref.current) return;
    if (playing) ref.current.pause();
    else ref.current.play();
  };

  return (
    <Card
      className="overflow-hidden hover-lift fade-in bg-card/50 backdrop-blur-sm border-2 border-accent/20 hover:border-accent/60 transition-all"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative aspect-[9/16] bg-black">
        <video
          ref={ref}
          src={video}
          className="w-full h-full object-cover"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onClick={toggle}
          playsInline
          muted={muted}
          preload="metadata"
          loop
        />
        {!playing && (
          <button
            onClick={toggle}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/70 via-black/20 to-transparent group"
          >
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform animate-pulse">
              <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-accent" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm font-semibold drop-shadow-lg">{name}</p>
            </div>
          </button>
        )}
        {playing && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (!ref.current) return;
              ref.current.muted = !ref.current.muted;
              setMuted(ref.current.muted);
            }}
            className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        )}
      </div>
    </Card>
  );
};

const Testimonials = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/10 to-muted/20 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-botanical/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-accent" fill="currentColor" />
            <span className="text-sm font-bold text-accent uppercase tracking-wider">Histórias reais</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Veja quem já está <span className="text-gradient">dormindo melhor</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de pessoas que aplicaram o método
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} video={t.video} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/pre-checkout")}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg rounded-full shadow-xl hover:scale-105 transition-all animate-pulse-glow"
          >
            Quero ter os mesmos resultados
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
