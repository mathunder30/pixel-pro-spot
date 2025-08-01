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
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas para performance.",
      features: ["React & Next.js", "TypeScript", "Tailwind CSS", "SEO Otimizado"]
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Aplicativos móveis nativos e híbridos para iOS e Android.",
      features: ["React Native", "Expo", "Interface Nativa", "Push Notifications"]
    },
    {
      icon: Server,
      title: "APIs & Backend",
      description: "APIs RESTful robustas e sistemas backend escaláveis.",
      features: ["Node.js", "Express", "FastAPI", "Microservices"]
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "Modelagem e otimização de bancos de dados relacionais e NoSQL.",
      features: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deploy e infraestrutura em nuvem com práticas DevOps modernas.",
      features: ["AWS", "Docker", "CI/CD", "Monitoramento"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design de interfaces intuitivas focadas na experiência do usuário.",
      features: ["Figma", "Prototipagem", "Design System", "Usabilidade"]
    }
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