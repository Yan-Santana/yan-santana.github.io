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

const companyLinks: Record<string, string> = {
  LEDES: "https://www.linkedin.com/company/ledes/posts/?feedView=all",
  Sicredi: "https://www.linkedin.com/company/sicredi/",
  "Alfaneo Legal AI":
    "https://www.linkedin.com/company/alfaneo/posts/?feedView=all",
  "Exército Brasileiro": "https://www.linkedin.com/company/exercito/",
};

const CompanyName = ({ company }: { company: string }) => {
  const href = companyLinks[company];

  if (!href) {
    return <span className="text-primary">{company}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-soft-white transition-colors"
    >
      {company}
    </a>
  );
};

const SectionHeading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-4xl md:text-[2.75rem] font-bold uppercase tracking-headline text-center mb-12 text-soft-white ${className}`}
  >
    {children}
  </h2>
);

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
      company: "Sicredi",
      role: "Analista de Dados",
      period: "abril de 2026 - Present",
      location: "Campo Grande, MS",
      description: `Desenvolvimento de soluções analíticas com foco em Inteligência Artificial utilizando Databricks, Python e SQL. Construção de pipelines de dados, automações e modelos de Machine Learning para geração de insights e apoio à tomada de decisão. Atuação em conjunto com áreas de negócio para identificar oportunidades de aplicação de IA.`,
      current: true,
    },
    {
      company: "Alfaneo Legal AI",
      role: "Desenvolvedor Python Full Stack | IA ",
      period: "agosto de 2025 - março de 2026",
      location: "Campo Grande, MS",
      description:
        "Desenvolvimento de aplicações com Python, FastAPI e React integradas a modelos de Inteligência Artificial. Implementação de arquiteturas RAG, agentes de IA, embeddings, bancos vetoriais, Neo4j e treinamento de modelos de Machine Learning para automação de processos jurídicos.",
      current: false,
    },
    {
      company: "LEDES",
      role: "Desenvolvedor Full Stack",
      period: "novembro de 2023 - abril de 2025",
      location: "Campo Grande, MS",
      description:
        "Desenvolvimento Full Stack de sistemas de gestão para fundações de pesquisa em todo o Brasil, contribuindo para a evolução do SIGFAP por meio da criação de APIs, novas funcionalidades e melhorias voltadas à transparência, eficiência e gestão de programas de Ciência, Tecnologia e Inovação.",
      current: false,
    },
  ];

  return (
    <div className="min-h-screen bg-deep-black text-soft-white bg-studio-grid">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 studio-glow-tr pointer-events-none" />
        <div className="absolute inset-0 studio-glow-bl pointer-events-none" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07]"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/90 via-deep-black/95 to-deep-black" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto -mt-16">
          <div className="animate-slide-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <h1 className="text-[3.5rem] md:text-6xl lg:text-[4.5rem] text-soft-white">
                Yan G. <span className="text-primary">Santana</span>
              </h1>
              <Bot className="h-12 w-12 md:h-16 md:w-16 text-primary shrink-0" />
            </div>
            <p className="text-sm md:text-base font-medium uppercase tracking-[0.15em] text-soft-white/60 mb-8">
              Dev Full Stack · Python · FastAPI · Node.js · TypeScript · Data &
              AI Analyst
            </p>
            <p className="text-base md:text-lg text-soft-white/75 mb-12 max-w-2xl mx-auto leading-[1.6] normal-case tracking-normal font-normal">
              Analista de Dados com foco em Inteligência Artificial,
              desenvolvendo soluções orientadas por dados na plataforma
              Databricks. Experiência anterior como Engenheiro de Software,
              aplicando conhecimentos em Python, FastAPI, Node.js e TypeScript
              para construir soluções escaláveis, integrar sistemas e
              transformar dados em valor para o negócio.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
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
                variant="ghost"
                size="lg"
                onClick={() =>
                  window.open(
                    "https://github.com/Yan-Santana?tab=repositories",
                    "_blank",
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
      <section className="section-spacing relative border-t border-technical-gray bg-studio-gray/50">
        <div className="absolute inset-0 studio-glow-tr pointer-events-none opacity-50" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeading>Sobre Mim</SectionHeading>
          <Card className="p-8 md:p-10 hover:border-primary/40">
            <p className="text-base md:text-lg leading-[1.6] text-soft-white/85 normal-case tracking-normal font-normal">
              Atualmente, atuo como Analista de Dados com foco em Inteligência
              Artificial no Sicredi, desenvolvendo soluções analíticas e
              apoiando decisões estratégicas por meio de Databricks, Python e
              SQL. Trabalho na construção de pipelines, análises e soluções
              orientadas por dados para gerar valor ao negócio.
            </p>

            <div className="my-6 h-px bg-technical-gray" />

            <p className="text-base md:text-lg leading-[1.6] text-soft-white/85 normal-case tracking-normal font-normal">
              Minha experiência prática em Inteligência Artificial foi
              construída na Alfaneo Legal AI, onde atuei como Desenvolvedor
              Python Full Stack com foco em IA. Participei do desenvolvimento de
              agentes inteligentes, treinamento e avaliação de modelos e
              implementação de arquiteturas RAG, utilização de bancos vetoriais,
              Neo4j, embeddings e processamento de linguagem natural para
              aplicações do mercado jurídico.
            </p>

            <div className="my-6 h-px bg-technical-gray" />

            <p className="text-base md:text-lg leading-[1.6] text-soft-white/85 normal-case tracking-normal font-normal">
              Antes disso, trabalhei como Desenvolvedor Full Stack no LEDES,
              desenvolvendo sistemas para fundações de pesquisa em todo o
              Brasil. Essa experiência fortaleceu minha base em engenharia de
              software, arquitetura de APIs e desenvolvimento de aplicações
              escaláveis, competências que hoje complemento com dados e
              Inteligência Artificial. Sou Bacharel em Sistemas de Informação
              pela Universidade Federal de Mato Grosso do Sul (UFMS) e busco
              constante evolução na interseção entre Engenharia de Software,
              Dados e IA.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-spacing border-t border-technical-gray">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>Principais Competências</SectionHeading>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge key={index} variant="skill" className="px-4 py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-spacing relative border-t border-technical-gray bg-studio-gray/50">
        <div className="absolute inset-0 studio-glow-bl pointer-events-none opacity-40" />
        <div className="relative max-w-6xl mx-auto">
          <SectionHeading>Experiência Profissional</SectionHeading>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 md:p-10 hover:border-primary/50">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-soft-white">{exp.role}</h3>
                    <p className="text-lg font-semibold mt-2">
                      <CompanyName company={exp.company} />
                    </p>
                    <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm font-medium text-soft-white/50 mt-4 uppercase tracking-wide">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  {exp.current && <Badge className="self-start">Atual</Badge>}
                </div>
                <p className="text-base md:text-lg text-soft-white/75 leading-[1.6] normal-case tracking-normal font-normal">
                  {exp.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section-spacing border-t border-technical-gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-6">
            <div>
              <h2 className="text-4xl md:text-[2.75rem] font-bold uppercase tracking-headline mb-8 text-soft-white">
                Formação
              </h2>
              <a
                href="https://www.google.com/maps/place/FACOM+-+Faculdade+de+Computa%C3%A7%C3%A3o+-+UFMS/@-20.5011478,-54.6152937,17z/data=!4m14!1m7!3m6!1s0x9486e5f9a41cc481:0x8f375dbee6ed8ea1!2sUniversidade+Federal+de+Mato+Grosso+do+Sul!8m2!3d-20.5044138!4d-54.614135!16s%2Fm%2F02vs5sc!3m5!1s0x9486e5f501501899:0xa3a12020e73b352b!8m2!3d-20.5025212!4d-54.6134556!16s%2Fg%2F1tg695wm?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="p-8 md:p-10 hover:border-primary/50 cursor-pointer group">
                  <h3 className="text-soft-white group-hover:text-primary transition-colors">
                    Bacharelado em Sistema de Informação
                  </h3>
                  <p className="text-primary font-semibold mt-3 mb-3 normal-case tracking-normal">
                    Universidade Federal de Mato Grosso do Sul
                  </p>
                  <p className="text-soft-white/50 text-xs md:text-sm font-medium uppercase tracking-wide">
                    março de 2022 - dezembro de 2025
                  </p>
                </Card>
              </a>
            </div>

            <div>
              <h2 className="text-4xl md:text-[2.75rem] font-bold uppercase tracking-headline mb-8 text-soft-white">
                Certificações
              </h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-studio-gray border border-technical-gray hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  >
                    <Award className="h-5 w-5 text-primary shrink-0 group-hover:shadow-glow-red" />
                    <span className="text-soft-white font-medium normal-case tracking-normal group-hover:text-primary transition-colors">
                      {cert.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contato"
        className="section-spacing relative border-t border-technical-gray bg-studio-gray/50"
      >
        <div className="absolute inset-0 studio-glow-tr pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <SectionHeading>Vamos Conversar?</SectionHeading>
          <Card className="p-8 md:p-10 text-left">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="flex items-center justify-center md:justify-start gap-3 border-b border-technical-gray pb-4">
                  <MapPin className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="https://www.google.com/maps/place/Campo+Grande,+MS/@-20.4772503,-54.6276723,11.66z/data=!4m6!3m5!1s0x9486e6726b2b9f27:0xf5a8469ebc84d2c1!8m2!3d-20.4648517!4d-54.6218477!16zL20vMDMzNWR2?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-soft-white/85 hover:text-primary transition-colors normal-case tracking-normal"
                  >
                    Campo Grande, MS
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 border-b border-technical-gray pb-4">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="https://wa.me/67992734786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-soft-white/85 hover:text-primary transition-colors normal-case tracking-normal"
                  >
                    67 99273-4786
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 border-b border-technical-gray pb-4">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <a
                    href="mailto:yansantana63@gmail.com"
                    className="text-soft-white/85 hover:text-primary transition-colors normal-case tracking-normal"
                  >
                    yansantana63@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start normal-case tracking-normal"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/yan-g-santana-8b91a5164/",
                      "_blank",
                    )
                  }
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                  <ExternalLink className="ml-auto h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start normal-case tracking-normal"
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
      <footer className="py-10 border-t border-technical-gray bg-deep-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-soft-white/40 text-xs md:text-sm font-medium uppercase tracking-wide">
            © 2026 Yan G. Santana · React & TypeScript
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
