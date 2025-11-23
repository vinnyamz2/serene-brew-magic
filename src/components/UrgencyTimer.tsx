import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const UrgencyTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 50,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-destructive/20 via-accent/20 to-destructive/20 border-2 border-accent rounded-2xl p-4 animate-pulse-glow">
      <div className="flex items-center justify-center gap-3 text-center">
        <Clock className="w-5 h-5 text-accent animate-pulse" />
        <div>
          <p className="text-sm font-semibold text-foreground mb-1">
            ⚡ Oferta válida apenas pelas próximas horas
          </p>
          <div className="flex items-center justify-center gap-2 text-2xl font-bold text-accent">
            <span className="bg-night text-night-foreground px-3 py-1 rounded-lg">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span>:</span>
            <span className="bg-night text-night-foreground px-3 py-1 rounded-lg">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span>:</span>
            <span className="bg-night text-night-foreground px-3 py-1 rounded-lg">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyTimer;