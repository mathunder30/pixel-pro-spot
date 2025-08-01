import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos e dashboard de vendas.",
      image: "🛒",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      type: "Web App",
      icon: Globe,
      features: ["Pagamentos", "Dashboard", "API RESTful", "Responsivo"],
      github: "#",
      demo: "#"
    },
    {
      title: "App de Delivery",
      description: "Aplicativo mobile para delivery de comida com geolocalização, pedidos em tempo real e sistema de avaliações.",
      image: "🍕",
      technologies: ["React Native", "Express", "MongoDB", "Socket.io"],
      type: "Mobile App",
      icon: Smartphone,
      features: ["Tempo Real", "Geolocalização", "Push Notifications", "Avaliações"],
      github: "#",
      demo: "#"
    },
    {
      title: "Sistema de Gestão",
      description: "ERP completo para pequenas empresas com controle de estoque, vendas, clientes e relatórios financeiros.",
      image: "📊",
      technologies: ["Next.js", "TypeScript", "Supabase", "Chart.js"],
      type: "Dashboard",
      icon: Database,
      features: ["Relatórios", "Controle de Estoque", "Multi-usuário", "Export PDF"],
      github: "#",
      demo: "#"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Web App":
        return "bg-primary text-primary-foreground";
      case "Mobile App":
        return "bg-accent text-accent-foreground";
      case "Dashboard":
        return "bg-purple-500 text-white";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="projetos" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Projetos em Destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi utilizando tecnologias modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="tech-card group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{project.image}</div>
                  <Badge className={getTypeColor(project.type)}>
                    <project.icon className="w-3 h-3 mr-1" />
                    {project.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">Recursos:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Código
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            variant="outline"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              Ver Todos os Projetos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;