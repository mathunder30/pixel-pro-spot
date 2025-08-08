import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Send, 
  MessageSquare, 
  Linkedin, 
  Github,
  ExternalLink
} from "lucide-react";



const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {

    console.log("Enviando para API:", formData);

    const response = await fetch("http://192.168.0.102:4000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: formData.nome,
        email: formData.email,
        mensagem: formData.mensagem,
      }),
      
    });
    console.log("Status da resposta:", response.status);

    if (response.ok) {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      });
      setFormData({ nome: "", email: "", mensagem: "" });
    } else {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    toast({
      title: "Erro de conexão",
      description: "Não foi possível conectar à API.",
      variant: "destructive",
    });
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  

  const contactLinks = [
    {
      name: "WhatsApp",
      icon: MessageSquare,
      url: "https://wa.me/5531995860596",
      description: "Chat direto",
      color: "bg-green-500"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/mateus-lopes-316b58237",
      description: "linkedin.com/in/mateus-lopes-316b58237",
      color: "bg-blue-600"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mathunder30",
      description: "github.com/mathunder30",
      color: "bg-gray-800"
    },
    {
      name: "E-mail",
      icon: Mail,
      url: "mailto:mateustlopes11@gmail.com",
      description: "mateustlopes11@gmail.com",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="contato" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Vamos Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos transformar sua ideia em realidade!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <Card className="tech-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" />
                Envie uma Mensagem
              </CardTitle>
              <CardDescription>
                Preencha o formulário e retornarei o mais breve possível
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Conte-me sobre seu projeto..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full glow-effect">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Links de Contato */}
          <div className="space-y-6">
            <Card className="tech-card">
              <CardHeader>
                <CardTitle>Outras Formas de Contato</CardTitle>
                <CardDescription>
                  Escolha a plataforma que preferir para conversar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {contactLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="flex items-center gap-4 p-4 border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 hover:scale-105">
                        <div className={`p-2 ${link.color} rounded-lg`}>
                          <link.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold group-hover:text-primary transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {link.description}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Informações Adicionais */}
            <Card className="tech-card">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                    <p className="text-sm text-muted-foreground">
                      Segunda à Sexta: 9h às 18h<br />
                      Sábado: 9h às 12h
                    </p>
                  </div>
                  <div className="border-t border-border/50 pt-4">
                    <h3 className="font-semibold mb-2">Tempo de Resposta</h3>
                    <p className="text-sm text-muted-foreground">
                      Geralmente respondo em até 2 horas durante o horário comercial
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;