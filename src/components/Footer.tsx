import logo from "@/assets/logo-sono.png";

const Footer = () => {
  return (
    <footer className="bg-night text-night-foreground py-12 border-t border-night-foreground/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo and description */}
            <div className="space-y-4">
              <img 
                src={logo} 
                alt="Guia Natural do Sono Profundo" 
                className="w-48"
              />
              <p className="text-night-foreground/70 text-sm leading-relaxed">
                Transforme suas noites com receitas naturais simples e eficazes para um sono profundo e restaurador.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Links Rápidos</h3>
              <ul className="space-y-2 text-night-foreground/70 text-sm">
                <li>
                  <a href="#main-recipe" className="hover:text-accent transition-colors">
                    Sobre o Chá Sono 7
                  </a>
                </li>
                <li>
                  <a href="#price" className="hover:text-accent transition-colors">
                    Preço e Acesso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contato</h3>
              <ul className="space-y-2 text-night-foreground/70 text-sm">
                <li>
                  <a href="mailto:contato@guiasononatural.com" className="hover:text-accent transition-colors">
                    contato@guiasononatural.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5511999999999" className="hover:text-accent transition-colors">
                    WhatsApp: (11) 99999-9999
                  </a>
                </li>
                <li className="pt-4">
                  <p className="text-xs">
                    Atendimento: Segunda a Sexta<br />
                    09h às 18h
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-night-foreground/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-night-foreground/60">
              <p>
                © {new Date().getFullYear()} Guia Natural do Sono Profundo. Todos os direitos reservados.
              </p>
              <p className="text-xs text-center md:text-right max-w-md">
                Este produto não substitui orientação médica profissional. Consulte sempre um especialista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;