import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      video: "/videos/testimonial-1.mp4",
      name: "Depoimento 1"
    },
    {
      id: 2,
      video: "/videos/testimonial-2.mp4",
      name: "Depoimento 2"
    },
    {
      id: 3,
      video: "/videos/testimonial-3.mp4",
      name: "Depoimento 3"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Depoimentos Reais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre os resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="overflow-hidden hover-lift fade-in bg-card/50 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[9/16] bg-muted">
                <video
                  src={testimonial.video}
                  controls
                  className="w-full h-full object-cover"
                  onPlay={() => setPlayingVideo(testimonial.id)}
                  onPause={() => setPlayingVideo(null)}
                  playsInline
                  preload="metadata"
                />
                {playingVideo !== testimonial.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center animate-pulse">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;