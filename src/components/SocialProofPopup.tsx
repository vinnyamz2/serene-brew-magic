import { useEffect, useState } from "react";
import { X, ShoppingBag, Users } from "lucide-react";

const firstNames = [
  "Maria", "João", "Ana", "Carlos", "Fernanda", "Roberto", "Juliana", "Pedro",
  "Camila", "Lucas", "Beatriz", "Rafael", "Mariana", "Felipe", "Larissa", "Bruno",
  "Patricia", "Gabriel", "Amanda", "Thiago", "Carla", "Diego", "Renata", "Marcos",
  "Priscila", "André", "Vanessa", "Rodrigo", "Cristina", "Fernando", "Daniela",
  "Leandro", "Sabrina", "Gustavo", "Adriana", "Ricardo", "Letícia", "Vinícius",
  "Tatiana", "Maurício", "Débora", "César", "Elaine", "Fábio", "Luciana"
];

const lastNames = [
  "Silva", "Santos", "Oliveira", "Souza", "Lima", "Costa", "Ferreira", "Rodrigues",
  "Almeida", "Nascimento", "Carvalho", "Pereira", "Ribeiro", "Martins", "Araújo",
  "Rocha", "Monteiro", "Barbosa", "Correia", "Dias", "Gomes", "Fernandes", "Mendes",
  "Castro", "Cardoso", "Teixeira", "Vieira", "Melo", "Freitas", "Cavalcanti"
];

const actions = [
  "acabou de comprar o Guia + Receita Extra",
  "acabou de comprar o Guia Completo",
  "acabou de comprar o Guia + 2 Bônus",
  "acabou de comprar o Pack Completo",
  "acabou de garantir acesso ao Guia"
];

type MessageType = 
  | { type: "count"; message: string }
  | { name: string; action: string };

const generateRandomMessage = (): MessageType => {
  const isCountMessage = Math.random() > 0.7; // 30% chance de ser mensagem de contagem
  
  if (isCountMessage) {
    const count = Math.floor(Math.random() * 20) + 10; // Entre 10 e 29
    return {
      type: "count" as const,
      message: `${count} pessoas estão ${Math.random() > 0.5 ? 'comprando agora' : 'visualizando esta oferta'}`
    };
  }
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  
  return {
    name: `${firstName} ${lastName}`,
    action
  };
};

const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(generateRandomMessage());

  useEffect(() => {
    const showPopup = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
    };

    // Show first popup after 3 seconds
    const initialTimeout = setTimeout(showPopup, 3000);

    // Then show every 8-12 seconds
    const interval = setInterval(() => {
      setCurrentMessage(generateRandomMessage());
      showPopup();
    }, Math.random() * 4000 + 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const message = currentMessage;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-up">
      <div className="bg-card border-2 border-botanical shadow-2xl rounded-2xl p-4 max-w-sm hover-lift">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 p-2 bg-botanical/20 rounded-full">
            {'type' in message && message.type === "count" ? (
              <Users className="w-5 h-5 text-botanical" />
            ) : (
              <ShoppingBag className="w-5 h-5 text-botanical" />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            {'type' in message && message.type === "count" ? (
              <p className="text-sm font-semibold text-foreground">
                {message.message}
              </p>
            ) : (
              <>
                <p className="text-sm font-semibold text-foreground">
                  {'name' in message && message.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {'action' in message && message.action}
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