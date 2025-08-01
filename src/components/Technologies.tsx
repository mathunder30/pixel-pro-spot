import { Badge } from "@/components/ui/badge";

const Technologies = () => {
  const techCategories = [
    {
      category: "Frontend",
      color: "primary",
      technologies: [
        { name: "React", level: "Avançado" },
        { name: "Next.js", level: "Avançado" },
        { name: "TypeScript", level: "Avançado" },
        { name: "Tailwind CSS", level: "Avançado" },
        { name: "JavaScript", level: "Avançado" },
        { name: "HTML5/CSS3", level: "Avançado" }
      ]
    },
    {
      category: "Backend",
      color: "accent",
      technologies: [
        { name: "Node.js", level: "Avançado" },
        { name: "Express.js", level: "Avançado" },
        { name: "Python", level: "Intermediário" },
        { name: "FastAPI", level: "Intermediário" },
        { name: "REST APIs", level: "Avançado" },
        { name: "GraphQL", level: "Intermediário" }
      ]
    },
    {
      category: "Mobile",
      color: "tech-purple",
      technologies: [
        { name: "React Native", level: "Avançado" },
        { name: "Expo", level: "Avançado" },
        { name: "iOS", level: "Intermediário" },
        { name: "Android", level: "Intermediário" }
      ]
    },
    {
      category: "Database",
      color: "secondary",
      technologies: [
        { name: "PostgreSQL", level: "Avançado" },
        { name: "MySQL", level: "Avançado" },
        { name: "MongoDB", level: "Intermediário" },
        { name: "Redis", level: "Intermediário" },
        { name: "Supabase", level: "Avançado" }
      ]
    },
    {
      category: "DevOps & Tools",
      color: "muted",
      technologies: [
        { name: "Docker", level: "Intermediário" },
        { name: "AWS", level: "Intermediário" },
        { name: "Git/GitHub", level: "Avançado" },
        { name: "Vercel", level: "Avançado" },
        { name: "Figma", level: "Intermediário" },
        { name: "VS Code", level: "Avançado" }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Avançado":
        return "bg-accent text-accent-foreground";
      case "Intermediário":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="tecnologias" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Tecnologias</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stack moderno e ferramentas que utilizo para criar soluções robustas
          </p>
        </div>

        <div className="space-y-8">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-card">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-${category.color}`}></div>
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {category.technologies.map((tech, idx) => (
                  <div key={idx} className="group">
                    <div className="p-3 bg-card border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105">
                      <div className="text-center">
                        <p className="font-medium text-sm mb-2">{tech.name}</p>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getLevelColor(tech.level)}`}
                        >
                          {tech.level}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 p-6 bg-card border border-border/50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">3+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="hidden sm:block w-px bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">20+</div>
              <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
            </div>
            <div className="hidden sm:block w-px bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Tecnologias Dominadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;