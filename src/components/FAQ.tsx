import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Onde encontro os ingredientes das receitas?",
    answer: "Todos os ingredientes são facilmente encontrados em supermercados, farmácias ou lojas de produtos naturais. Escolhemos propositalmente itens acessíveis e baratos para que qualquer pessoa possa fazer."
  },
  {
    question: "Quanto tempo demora para fazer efeito?",
    answer: "A maioria das pessoas relata sensação de relaxamento em 15-20 minutos após consumir. Porém, os melhores resultados aparecem com o uso consistente ao longo de alguns dias, quando o corpo se adapta à rotina."
  },
  {
    question: "Qual o melhor horário para tomar?",
    answer: "Recomendamos tomar cerca de 30-45 minutos antes do horário que você deseja dormir. Isso permite que os ingredientes comecem a agir enquanto você se prepara para a noite."
  },
  {
    question: "Posso tomar junto com medicamentos?",
    answer: "O guia é um método natural, mas sempre consulte seu médico antes de combinar com qualquer medicação. Somente um profissional de saúde pode avaliar seu caso específico."
  },
  {
    question: "As receitas têm contraindicações?",
    answer: "Embora sejam naturais, algumas ervas podem ter interações ou não serem recomendadas para gestantes, lactantes ou pessoas com condições específicas. Sempre consulte um profissional de saúde se tiver dúvidas."
  },
  {
    question: "Quanto custa fazer cada receita?",
    answer: "Os ingredientes são bem acessíveis. Em média, você consegue fazer várias porções de cada receita gastando menos de R$ 20-30 no total, dependendo de onde comprar."
  },
  {
    question: "Funciona para qualquer tipo de insônia?",
    answer: "As receitas são eficazes para insônia relacionada a ansiedade, estresse e dificuldade de relaxamento. Para casos mais complexos ou crônicos, é importante buscar acompanhamento médico."
  },
  {
    question: "Quando recebo o acesso?",
    answer: "Imediatamente após a confirmação do pagamento! Você receberá um email com todas as instruções de acesso ao material."
  },
  {
    question: "E se eu não gostar do conteúdo?",
    answer: "Você tem 7 dias de garantia incondicional. Se não gostar, basta solicitar o reembolso e devolvemos 100% do seu dinheiro, sem perguntas."
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim! Você paga apenas uma vez e tem acesso para sempre a todo o conteúdo, incluindo futuras atualizações."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o Guia Natural do Sono Profundo
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-accent/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:text-accent transition-colors">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-accent/10 border-2 border-accent rounded-2xl p-6">
              <p className="text-foreground font-semibold mb-2">
                Ainda tem dúvidas?
              </p>
              <p className="text-muted-foreground">
                Entre em contato conosco pelo email:{" "}
                <a href="mailto:contato@guiasononatural.com" className="text-accent hover:underline">
                  contato@guiasononatural.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;