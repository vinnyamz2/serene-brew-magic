import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Heart, Mail, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track Purchase event with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        currency: 'BRL',
        value: 17
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-botanical to-accent rounded-full flex items-center justify-center shadow-2xl animate-scale-in">
            <Check className="w-12 h-12 text-botanical-foreground" strokeWidth={3} />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Parabéns! 🎉
          </h1>
          <p className="text-xl text-muted-foreground">
            Sua compra foi realizada com sucesso!
          </p>
        </div>

        {/* Card with details */}
        <div className="bg-card border border-border rounded-3xl p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-center gap-2 text-botanical">
            <Heart className="w-5 h-5 fill-current" />
            <span className="font-semibold">Obrigado por confiar em nós!</span>
          </div>

          <div className="space-y-4 text-left">
            <h2 className="text-xl font-bold text-foreground text-center">
              Próximos passos:
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                <div className="w-8 h-8 bg-botanical/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-botanical" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Verifique seu e-mail</p>
                  <p className="text-sm text-muted-foreground">
                    Você receberá o acesso ao Guia Natural do Sono Profundo em instantes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                <div className="w-8 h-8 bg-botanical/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-botanical" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Acesse o conteúdo</p>
                  <p className="text-sm text-muted-foreground">
                    Clique no link do e-mail para acessar todas as receitas e guias.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                <div className="w-8 h-8 bg-botanical/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-botanical" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Precisa de ajuda?</p>
                  <p className="text-sm text-muted-foreground">
                    Entre em contato pelo WhatsApp: (94) 99102-2124
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Se não encontrar o e-mail, verifique sua caixa de spam ou lixo eletrônico.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-4">
          <Button
            size="lg"
            onClick={() => navigate("/")}
            variant="outline"
            className="px-8"
          >
            Voltar para o início
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Sua jornada para noites de sono tranquilo começa agora!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
