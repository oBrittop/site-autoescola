import { Award, Users, Shield, Star, Phone } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { WHATSAPP_LINK } from "./constants";

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

const DIFFERENTIALS: Differential[] = [
  {
    icon: Award,
    title: "+24 anos de experiência",
    description:
      "Tradição comprovada no ensino de direção veicular para todos os perfis de alunos.",
  },
  {
    icon: Users,
    title: "Profissionais eficientes e pacientes",
    description: "Instrutores qualificados que priorizam sua segurança e evolução em cada aula.",
  },
  {
    icon: Shield,
    title: "Veículos seguros",
    description: "Frota revisada e equipada para que você aprenda com tranquilidade e confiança.",
  },
  {
    icon: Star,
    title: "Líder em Aprovação",
    description: "Alta taxa de aprovação dos nossos alunos nos exames do DETRAN.",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Por que nos escolher
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Sobre a Autoescola Patrícia
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Há mais de duas décadas formando motoristas responsáveis no Riacho Fundo e região.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((item) => (
            <div
              key={item.title}
              className="alive-card scroll-reveal group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="scroll-reveal mt-16 flex flex-col items-center justify-center gap-4 rounded-3xl bg-brand-black p-8 text-center text-white md:flex-row md:justify-between md:p-12 md:text-left">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Avaliação dos nossos alunos
            </p>
            <h3 className="mt-2 text-3xl font-bold md:text-4xl">
              4,8 <span className="text-primary">★</span> no Google
            </h3>
            <p className="mt-2 text-white/70">Mais de 100 avaliações reais</p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-brand-yellow-dark"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Fale com um atendente
          </a>
        </div>
      </div>
    </section>
  );
}
