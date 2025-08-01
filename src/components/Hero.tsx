import { Button } from "@/components/ui/button";
import { ChevronDown, Code2, Terminal } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto section-padding text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4 p-4 bg-card border border-border/50 rounded-lg backdrop-blur-sm">
            <Terminal className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">$ whoami</span>
            <Code2 className="w-6 h-6 text-accent" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Olá, sou{" "}
          <span className="gradient-text">Mateus Lopes</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Apaixonado por tecnologia e desenvolvimento de software
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Desenvolvedor Full Stack com foco em Node.js, React, React Native e bancos de dados.
          Tecnologia é mais que uma profissão para mim, é o que me move.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
            onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Projetos
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Entre em Contato
          </Button>
        </div>

        <div className="animate-bounce">
          <ChevronDown 
            className="w-8 h-8 text-primary mx-auto cursor-pointer" 
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;