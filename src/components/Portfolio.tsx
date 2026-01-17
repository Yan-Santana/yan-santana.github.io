import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Calendar,
  Award,
  Bot,
} from "lucide-react";
import heroBackground from "/image.png";

const Portfolio = () => {
  const skills = [
    "Python",
    "FastAPI",
    "Node.js",
    "NestJS",
    "TypeScript",
    "React",
    "Vue.js",
    "Sistemas de IA",
    "Agentes de IA",
  ];

  const certifications = [
    {
      name: "Fundamentos Scrum Certified",
      url: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-YanSantana-1076988.pdf",
    },
    {
      name: "Networking Basics",
      url: "https://www.credly.com/badges/0894397f-1ff2-4011-8005-651f376d3045/linked_in_profile",
    },
    {
      name: "Introduction to IoT",
      url: "https://www.credly.com/badges/158f71f3-e165-432f-bfa9-3b7403ebc772/linked_in_profile",
    },
    {
      name: "Ethical Hacker",
      url: "https://www.credly.com/badges/0fb2155f-3b4e-488b-b7d5-304e01f05425/linked_in_profile",
    },
  ];

  const experiences = [
    {
      company: "Alfaneo Legal AI",
      role: "Estágio em Desenvolvimento FullStack",
      period: "agosto de 2024 - Present",
      location: "Campo Grande, MS",
      description:
        "Desenvolvimento de soluções inovadoras aplicando FastAPI e agentes de inteligência artificial.",
      current: true,
    },
    {
      company: "LEDES",
      role: "Desenvolvedor Full Stack",
      period: "novembro de 2023 - abril de 2025",
      location: "Campo Grande, MS",
      description:
        "Desenvolvimento de sistema de gestão para fundações de pesquisa no Brasil, focando em soluções para C,T&I com transparência pública e democratização de informações.",
      current: false,
    },
    {
      company: "Exército Brasileiro",
      role: "Soldado",
      period: "março de 2020 - janeiro de 2021",
      location: "Campo Grande, MS",
      description: "Serviço militar obrigatório.",
      current: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: "center 30%",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto -mt-20">
          <div className="animate-slide-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="text-5xl md:text-7xl font-bold bg-tech-gradient bg-clip-text text-transparent">
                Yan G. Santana
              </h1>
              <Bot className="h-12 w-12 md:h-16 md:w-16 text-primary animate-pulse" />
            </div>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Dev Full Stack | Python • FastAPI • Node.js • NestJS • TypeScript
              • React • Vue.js
            </h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor que trabalha com inteligência artificial e
              desenvolvimento full-stack, buscando criar soluções inovadoras que
              unem tecnologia e impacto social.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="animate-glow"
                onClick={() => {
                  document.getElementById("contato")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contato
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://github.com/Yan-Santana?tab=repositories",
                    "_blank"
                  )
                }
              >
                <Github className="mr-2 h-4 w-4" />
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Sobre Mim
          </h2>
          <Card className="p-8 bg-card-gradient border-border/20 backdrop-blur-sm">
            <p className="text-lg leading-relaxed text-foreground/90">
              Atualmente, atuo como Desenvolvedor Full Stack na Alfaneo Legal
              AI, aplicando conhecimentos em FastAPI e agentes de inteligência
              artificial para criar soluções inovadoras. Sou Bacharel em
              Sistemas de Informação pela Universidade Federal de Mato Grosso do
              Sul (UFMS) e sigo em constante aperfeiçoamento acadêmico e
              profissional.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-foreground/90">
              No LEDES, participei do desenvolvimento de sistemas de gestão para
              fundações de pesquisa no Brasil, contribuindo para a eficiência e
              transparência em programas de ciência, tecnologia e inovação.
              Motiva-me colaborar em projetos que unem tecnologia e impacto
              social, sempre buscando evolução profissional e aprendizado
              contínuo.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Principais Competências
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Experiência Profissional
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 bg-card-gradient border-border/20 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {exp.company === "LEDES" ? (
                        <a
                          href="https://www.linkedin.com/company/ledes/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline transition-colors cursor-pointer"
                        >
                          {exp.company}
                        </a>
                      ) : exp.company === "Alfaneo Legal AI" ? (
                        <a
                          href="https://www.linkedin.com/company/alfaneo/posts/?feedView=all"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline transition-colors cursor-pointer"
                        >
                          {exp.company}
                        </a>
                      ) : exp.company === "Exército Brasileiro" ? (
                        <a
                          href="https://www.linkedin.com/company/exercito/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline transition-colors cursor-pointer"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  {exp.current && (
                    <Badge className="bg-primary text-primary-foreground">
                      Atual
                    </Badge>
                  )}
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Formação
              </h2>
              <a
                href="https://www.google.com/maps/place/FACOM+-+Faculdade+de+Computa%C3%A7%C3%A3o+-+UFMS/@-20.5011478,-54.6152937,17z/data=!4m14!1m7!3m6!1s0x9486e5f9a41cc481:0x8f375dbee6ed8ea1!2sUniversidade+Federal+de+Mato+Grosso+do+Sul!8m2!3d-20.5044138!4d-54.614135!16s%2Fm%2F02vs5sc!3m5!1s0x9486e5f501501899:0xa3a12020e73b352b!8m2!3d-20.5025212!4d-54.6134556!16s%2Fg%2F1tg695wm?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-6 bg-card-gradient border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-pointer">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Bacharelado em Sistema de Informação
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Universidade Federal de Mato Grosso do Sul
                  </p>
                  <p className="text-muted-foreground text-sm">
                    março de 2022 - dezembro de 2025
                  </p>
                </Card>
              </a>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Certificações
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border/20 hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-pointer"
                  >
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{cert.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Vamos Conversar?
          </h2>
          <Card className="p-8 bg-card-gradient border-border/20 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.google.com/maps/place/Campo+Grande,+MS/@-20.4772503,-54.6276723,11.66z/data=!4m6!3m5!1s0x9486e6726b2b9f27:0xf5a8469ebc84d2c1!8m2!3d-20.4648517!4d-54.6218477!16zL20vMDMzNWR2?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Campo Grande, MS
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a
                    href="https://wa.me/67992734786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    67 99273-4786
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:yansantana63@gmail.com"
                    className="text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    yansantana63@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/yan-g-santana-8b91a5164/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="ml-auto h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() =>
                    window.open("https://github.com/Yan-Santana", "_blank")
                  }
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                  <ExternalLink className="ml-auto h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Yan G. Santana. Desenvolvido com React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
