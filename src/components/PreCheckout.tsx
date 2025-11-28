import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Plus, ArrowRight, Lock, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SocialProofPopup from "./SocialProofPopup";
import UrgencyTimer from "./UrgencyTimer";

const PreCheckout = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<string[]>(["main"]);
  const [progress, setProgress] = useState(33);

  const items = [
    {
      id: "main",
      name: "Guia Natural do Sono Profundo",
      description: "Receita completa do Chá Sono 7 + 2 receitas bônus + Guias",
      price: 17,
      originalPrice: 97,
      included: true,
      features: [
        "Receita Chá Sono 7",
        "Chá CalmEase (Bônus 1)",
        "Mix Relax Night (Bônus 2)",
        "Guia de preparo passo a passo",
        "Rotina noturna ideal",
        "Acesso vitalício"
      ]
    },
    {
      id: "extra1",
      name: "Receita EXTRA: Sono de Ouro",
      description: "Receita premium para noites de sono ainda mais profundo",
      price: 7,
      originalPrice: 29,
      features: [
        "Receita exclusiva premium",
        "Ingredientes especiais",
        "Efeito prolongado",
        "Guia de otimização"
      ]
    },
    {
      id: "extra2",
      name: "Pack Completo de Chás",
      description: "Chá CalmEase + Mix Relax Night em versões expandidas",
      price: 7,
      originalPrice: 39,
      features: [
        "Versões expandidas",
        "Variações para cada situação",
        "Combinações personalizadas",
        "Guia de uso completo"
      ]
    }
  ];

  const calculateTotal = () => {
    return selectedItems.reduce((total, id) => {
      const item = items.find(i => i.id === id);
      return total + (item?.price || 0);
    }, 0);
  };

  const calculateSavings = () => {
    return selectedItems.reduce((total, id) => {
      const item = items.find(i => i.id === id);
      return total + ((item?.originalPrice || 0) - (item?.price || 0));
    }, 0);
  };

  const toggleItem = (id: string) => {
    if (id === "main") return; // Can't deselect main product
    
    setSelectedItems(prev => {
      const newItems = prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id];
      
      // Update progress based on items selected
      const progressValue = (newItems.length / items.length) * 100;
      setProgress(progressValue);
      
      return newItems;
    });
  };

  const handleCheckout = () => {
    const hasExtra1 = selectedItems.includes("extra1");
    const hasExtra2 = selectedItems.includes("extra2");
    
    let checkoutUrl = "";
    let productId = "";
    
    if (hasExtra1 && hasExtra2) {
      // Guia + ambos os bônus
      checkoutUrl = "https://pay.kiwify.com.br/OLI7mZL";
      productId = "OLI7mZL";
    } else if (hasExtra1) {
      // Guia + Sono de Ouro
      checkoutUrl = "https://pay.kiwify.com.br/b5tap77";
      productId = "b5tap77";
    } else if (hasExtra2) {
      // Guia + Pack Completo de Chás
      checkoutUrl = "https://pay.kiwify.com.br/q1elq7x";
      productId = "q1elq7x";
    } else {
      // Apenas o Guia
      checkoutUrl = "https://pay.kiwify.com.br/lGmFEdH";
      productId = "lGmFEdH";
    }
    
    // Track InitiateCheckout with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_ids: [productId],
        content_type: 'product',
        currency: 'BRL',
        value: calculateTotal()
      });
    }
    
    window.location.href = checkoutUrl;
  };

  useEffect(() => {
    // Set initial progress
    setProgress((selectedItems.length / items.length) * 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <SocialProofPopup />
      
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Voltar
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-6 md:mb-8 space-y-3 md:space-y-4 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Complete seu pedido
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">
              Adicione mais receitas por apenas R$ 7 cada e economize ainda mais
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-muted rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-botanical to-accent h-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              {Math.round(progress)}% do pacote completo
            </p>
          </div>

          {/* Urgency Timer */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <UrgencyTimer />
          </div>

          {/* Items */}
          <div className="space-y-4 mb-8">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`bg-card border-2 rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-300 hover-lift animate-fade-in ${
                  selectedItems.includes(item.id)
                    ? 'border-botanical shadow-xl'
                    : 'border-border'
                } ${item.included ? 'opacity-100' : 'cursor-pointer'}`}
                style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                onClick={() => !item.included && toggleItem(item.id)}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Checkbox */}
                  <div className={`flex-shrink-0 mt-0.5 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selectedItems.includes(item.id)
                      ? 'bg-botanical border-botanical'
                      : 'border-muted-foreground'
                  }`}>
                    {selectedItems.includes(item.id) && (
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-botanical-foreground" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 leading-tight break-words">
                          {item.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          {item.description}
                        </p>
                      </div>
                      
                      <div className="text-left sm:text-right flex-shrink-0 flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0">
                        <div className="text-xs sm:text-sm text-muted-foreground line-through">
                          R$ {item.originalPrice}
                        </div>
                        <div className="text-xl sm:text-2xl font-bold text-accent">
                          R$ {item.price}
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 md:gap-2 mt-3 md:mt-4">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-botanical flex-shrink-0 mt-0.5" />
                          <span className="break-words">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {item.included && (
                      <div className="mt-3 md:mt-4 inline-flex items-center gap-1.5 md:gap-2 bg-botanical/20 text-botanical px-2 md:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        <Check className="w-3 h-3 md:w-4 md:h-4" />
                        Incluído no seu pedido
                      </div>
                    )}

                    {!item.included && !selectedItems.includes(item.id) && (
                      <div className="mt-3 md:mt-4">
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleItem(item.id);
                          }}
                          className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Adicionar ao pedido
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-br from-night to-primary text-night-foreground rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between items-center text-base md:text-lg">
                <span>Subtotal:</span>
                <span className="font-semibold">R$ {calculateTotal()}</span>
              </div>
              
              <div className="flex justify-between items-center text-base md:text-lg text-botanical">
                <span>Você economiza:</span>
                <span className="font-bold">R$ {calculateSavings()}</span>
              </div>
              
              <div className="border-t border-night-foreground/20 pt-4">
                <div className="flex justify-between items-center text-xl md:text-2xl font-bold">
                  <span>Total:</span>
                  <span className="text-accent">R$ {calculateTotal()}</span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={handleCheckout}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base sm:text-lg md:text-xl py-6 md:py-8 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 animate-pulse-glow group"
              >
                <span className="truncate">Continuar para o Pagamento</span>
                <ArrowRight className="ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Trust badges */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 pt-2 md:pt-4 text-xs sm:text-sm text-night-foreground/80">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Lock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Pagamento 100% seguro</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Acesso imediato</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreCheckout;