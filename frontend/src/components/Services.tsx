import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  Smartphone, 
  Server, 
  Database, 
  Code, 
  Palette,
  Cloud,
  Shield
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Server,
      title: "Aplicações Web e APIs",
      description: "Backend com Node.js + Express e integração com bancos de dados, com autenticação, CRUDs e lógica de negócio bem estruturada.",
      features: ["Node.js", "Express", "APIs RESTful", "Autenticação"]
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile com React Native",
      description: "Aplicativos funcionais, com navegação fluida e conexão com APIs, ideais para startups, academias, lojas, etc.",
      features: ["React Native", "Navegação", "Integração API", "UI/UX"]
    },
    {
      icon: Database,
      title: "Integrações com Banco de Dados",
      description: "Conexão, modelagem e manipulação de dados com PostgreSQL e MySQL.",
      features: ["PostgreSQL", "MySQL", "Modelagem", "Otimização"]
    },

  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas para transformar suas ideias em realidade digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="tech-card group hover:glow-effect">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 p-4 bg-card border border-border/50 rounded-lg">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm">
              <strong>Garantia de qualidade:</strong> Código limpo, testes automatizados e documentação completa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;