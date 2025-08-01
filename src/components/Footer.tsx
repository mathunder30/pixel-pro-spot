import { Code2, Heart, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-bold text-xl gradient-text">DevPortfolio</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando ideias em código e criando soluções digitais que fazem a diferença.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2 text-sm">
              <a href="#sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre Mim
              </a>
              <a href="#servicos" className="block text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#tecnologias" className="block text-muted-foreground hover:text-primary transition-colors">
                Tecnologias
              </a>
              <a href="#projetos" className="block text-muted-foreground hover:text-primary transition-colors">
                Projetos
              </a>
              <a href="#contato" className="block text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>mateustlopes11@ggmail.com</p>
              <p>+55 (31) 99586-0596</p>
              <p>Belo Horizonte, MG - Brasil</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} DevPortfolio. Feito com</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>e</span>
              <Coffee className="w-4 h-4 text-amber-600" />
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-xs">
                Desenvolvido com React, TypeScript e Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;