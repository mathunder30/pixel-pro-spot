import { Card } from "@/components/ui/card";
import { User, GraduationCap, Code, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça minha trajetória e paixão por tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/20 rounded-lg">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Desenvolvedor Apaixonado</h3>
                <p className="text-muted-foreground">
                  Sou um desenvolvedor full stack com mais de 3 anos de experiência em criar 
                  soluções digitais inovadoras. Minha paixão por tecnologia me motiva a estar 
                  sempre aprendendo e explorando novas ferramentas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Formação</h3>
                <p className="text-muted-foreground">
                  Graduado em Ciência da Computação, com especialização em desenvolvimento web 
                  e mobile. Constantemente me atualizando com cursos e certificações nas 
                  tecnologias mais modernas do mercado.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-tech-purple/20 rounded-lg">
                <Code className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Filosofia de Trabalho</h3>
                <p className="text-muted-foreground">
                  Acredito em código limpo, arquitetura sólida e experiência do usuário excepcional. 
                  Cada projeto é uma oportunidade de criar algo único e impactante.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="tech-card">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Experiência</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-primary">Desenvolvedor Full Stack</h4>
                  <p className="text-sm text-muted-foreground">2021 - Presente</p>
                  <p className="text-sm mt-1">
                    Desenvolvimento de aplicações web e mobile, APIs RESTful, 
                    e arquitetura de sistemas escaláveis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Desenvolvedor Frontend</h4>
                  <p className="text-sm text-muted-foreground">2020 - 2021</p>
                  <p className="text-sm mt-1">
                    Criação de interfaces modernas e responsivas utilizando 
                    React, TypeScript e frameworks CSS.
                  </p>
                </div>
              </div>
            </Card>

            <div className="p-6 bg-code-bg border border-border/50 rounded-lg font-mono text-sm">
              <div className="text-accent mb-2">// Minha missão</div>
              <div className="text-foreground">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-primary">missao</span> = {"{"}
                <br />
                &nbsp;&nbsp;<span className="text-accent">"objetivo"</span>: 
                <span className="text-orange-400"> "Transformar ideias em código"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-accent">"foco"</span>: 
                <span className="text-orange-400"> "Soluções que fazem diferença"</span>
                <br />
                {"}"};
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;