import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
            Política de Privacidade
          </h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                1. Informações que Coletamos
              </h2>
              <p>
                Coletamos informações que você nos fornece diretamente, como nome,
                email e informações de pagamento ao adquirir nossos produtos.
                Também coletamos automaticamente informações sobre o uso do site,
                como endereço IP, tipo de navegador e páginas visitadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                2. Como Usamos suas Informações
              </h2>
              <p>
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Processar pedidos e fornecer acesso ao conteúdo adquirido</li>
                <li>Enviar comunicações sobre seu pedido</li>
                <li>Melhorar nossos produtos e serviços</li>
                <li>Prevenir fraudes e garantir a segurança</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                3. Compartilhamento de Informações
              </h2>
              <p>
                Não vendemos suas informações pessoais. Podemos compartilhar seus
                dados com:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Processadores de pagamento para completar transações</li>
                <li>Provedores de serviço que nos auxiliam nas operações</li>
                <li>Autoridades legais quando exigido por lei</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                4. Cookies e Tecnologias Similares
              </h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua
                experiência, analisar tendências e administrar o site. Você pode
                controlar o uso de cookies através das configurações do seu
                navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                5. Segurança dos Dados
              </h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para
                proteger suas informações pessoais contra acesso não autorizado,
                alteração, divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                6. Seus Direitos
              </h2>
              <p>
                Você tem o direito de:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir dados incorretos</li>
                <li>Solicitar a exclusão de seus dados</li>
                <li>Opor-se ao processamento de seus dados</li>
                <li>Retirar consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                7. Retenção de Dados
              </h2>
              <p>
                Mantemos suas informações pessoais apenas pelo tempo necessário
                para cumprir os propósitos descritos nesta política, a menos que
                um período de retenção maior seja exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                8. Alterações nesta Política
              </h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente.
                Notificaremos você sobre mudanças significativas publicando a nova
                política nesta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                9. Contato
              </h2>
              <p>
                Para questões sobre esta Política de Privacidade ou sobre como
                tratamos seus dados, entre em contato:
              </p>
              <ul className="list-none ml-4 space-y-2 mt-2">
                <li>Email: contato@guiasononatural.com</li>
                <li>WhatsApp: (11) 99999-9999</li>
              </ul>
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

export default PrivacyPolicy;
