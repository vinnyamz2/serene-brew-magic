import { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface VideoSpotlightProps {
  videoSrc: string;
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  variant?: "dark" | "light" | "accent";
  reverse?: boolean;
}

const VideoSpotlight = ({
  videoSrc,
  badge,
  title,
  subtitle,
  ctaText = "Quero dormir melhor agora",
  variant = "dark",
  reverse = false,
}: VideoSpotlightProps) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const bgClass =
    variant === "dark"
      ? "bg-gradient-to-br from-night via-primary to-night"
      : variant === "accent"
      ? "bg-gradient-to-br from-accent/20 via-botanical/10 to-secondary/30"
      : "bg-gradient-to-b from-background to-secondary/20";

  const textClass = variant === "dark" ? "text-night-foreground" : "text-foreground";

  return (
    <section className={`relative py-12 md:py-20 px-4 overflow-hidden ${bgClass}`}>
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent/40 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-botanical/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div
          className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
            reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Video */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent via-botanical to-accent rounded-3xl blur-lg opacity-60 animate-pulse-glow"></div>
            <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black">
              <video
                ref={videoRef}
                src={videoSrc}
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onClick={togglePlay}
                playsInline
                muted={isMuted}
                preload="metadata"
                loop
              />
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-black/30 group"
                  aria-label="Reproduzir vídeo"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform animate-pulse-glow">
                    <Play className="w-10 h-10 md:w-12 md:h-12 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
                    ▶ Toque para assistir
                  </span>
                </button>
              )}
              {isPlaying && (
                <button
                  onClick={toggleMute}
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              )}
            </div>
          </div>

          {/* Text */}
          <div className={`space-y-5 text-center md:text-left animate-fade-in ${textClass}`} style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">{badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{title}</h2>
            {subtitle && <p className={`text-base md:text-lg ${variant === "dark" ? "text-night-foreground/80" : "text-muted-foreground"}`}>{subtitle}</p>}
            <Button
              size="lg"
              onClick={() => navigate("/pre-checkout")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-base md:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 animate-pulse-glow"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSpotlight;
