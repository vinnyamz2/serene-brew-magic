import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Termos de Uso
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e usar o Guia Natural do Sono Profundo, você concorda
                em cumprir estes Termos de Uso. Se você não concorda com
                qualquer parte destes termos, não utilize nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                2. Descrição do Serviço
              </h2>
              <p>
                O Guia Natural do Sono Profundo oferece receitas naturais e
                informações sobre práticas para melhorar a qualidade do sono. O
                conteúdo é apenas informativo e educacional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                3. Aviso Médico
              </h2>
              <p>
                Este produto não substitui orientação médica profissional. As
                receitas e informações fornecidas não têm como objetivo
                diagnosticar, tratar, curar ou prevenir qualquer doença. Consulte
                sempre um profissional de saúde qualificado antes de fazer
                mudanças em sua rotina de saúde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                4. Uso do Conteúdo
              </h2>
              <p>
                O conteúdo fornecido é para uso pessoal e não pode ser
                reproduzido, distribuído ou vendido sem autorização expressa.
                Você recebe uma licença não transferível para acessar o material.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                5. Garantia e Reembolso
              </h2>
              <p>
                Oferecemos garantia de 7 dias. Se você não estiver satisfeito com
                o produto, entre em contato conosco dentro deste período para
                solicitar reembolso integral.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                6. Limitação de Responsabilidade
              </h2>
              <p>
                Não nos responsabilizamos por quaisquer danos diretos, indiretos,
                incidentais ou consequenciais resultantes do uso ou
                impossibilidade de uso deste produto. O uso das informações é por
                sua conta e risco.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                7. Modificações
              </h2>
              <p>
                Reservamos o direito de modificar estes termos a qualquer momento.
                Alterações significativas serão comunicadas aos usuários.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                8. Contato
              </h2>
              <p>
                Para questões sobre estes Termos de Uso, entre em contato através
                do email: guialeads00@gmail.com ou WhatsApp: (94) 99102-2124
              </p>
            </section>

            <section className="pt-4 border-t border-border">
              <p className="text-sm">
                Última atualização: {new Date().toLocaleDateString("pt-BR")}
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
