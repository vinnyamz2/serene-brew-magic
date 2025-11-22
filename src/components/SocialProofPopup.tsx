import { useEffect, useState } from "react";
import { X, ShoppingBag, Users } from "lucide-react";

const messages = [
  { name: "Maria Vieira", action: "acabou de comprar o Guia + Receita Extra" },
  { name: "João Santos", action: "acabou de comprar o Guia Completo" },
  { name: "Ana Paula", action: "acabou de comprar o Guia + 2 Bônus" },
  { name: "Carlos Lima", action: "acabou de comprar o Guia + Receita Extra" },
  { type: "count", message: "15 pessoas estão comprando agora" },
  { name: "Fernanda Costa", action: "acabou de comprar o Guia Completo" },
  { type: "count", message: "23 pessoas estão visualizando esta oferta" },
  { name: "Roberto Silva", action: "acabou de comprar o Guia + 2 Bônus" },
];

const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const showPopup = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
    };

    // Show first popup after 3 seconds
    const initialTimeout = setTimeout(showPopup, 3000);

    // Then show every 8-12 seconds
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
      showPopup();
    }, Math.random() * 4000 + 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const message = messages[currentMessage];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-up">
      <div className="bg-card border-2 border-botanical shadow-2xl rounded-2xl p-4 max-w-sm hover-lift">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 p-2 bg-botanical/20 rounded-full">
            {message.type === "count" ? (
              <Users className="w-5 h-5 text-botanical" />
            ) : (
              <ShoppingBag className="w-5 h-5 text-botanical" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            {message.type === "count" ? (
              <p className="text-sm font-semibold text-foreground">
                {message.message}
              </p>
            ) : (
              <>
                <p className="text-sm font-semibold text-foreground">
                  {message.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {message.action}
                </p>
              </>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              há poucos minutos
            </p>
          </div>
          
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialProofPopup;