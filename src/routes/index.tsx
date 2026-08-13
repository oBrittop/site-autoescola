import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  Star,
  Shield,
  Award,
  Users,
  Car,
  Bike,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autoescola Patrícia | +24 anos de tradição no Riacho Fundo" },
      {
        name: "description",
        content:
          "Líder em aprovação no Riacho Fundo I/DF. Aulas para categorias A (Moto) e AB (Carro e Moto). WhatsApp (61) 99981-0011.",
      },
      {
        property: "og:title",
        content: "Autoescola Patrícia | +24 anos de tradição no Riacho Fundo",
      },
      {
        property: "og:description",
        content:
          "Líder em aprovação no Riacho Fundo I/DF. Aulas para categorias A (Moto) e AB (Carro e Moto).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_LINK =
  "https://wa.me/5561999810011?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Autoescola%20Patr%C3%ADcia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 shadow-lg backdrop-blur-sm"
          : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Car className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Autoescola <span className="text-brand-yellow-dark">Patrícia</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-brand-yellow-dark hover:shadow-lg md:inline-flex"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Fale Conosco
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-brand-yellow-dark"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-brand-black pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 pattern-grid opacity-10" aria-hidden="true" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Star className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
            Avaliação 4,8 no Google — mais de 100 avaliações
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl md:text-6xl">
            Sua habilitação com quem tem{" "}
            <span className="text-primary">+24 anos</span> de tradição.
          </h1>

          <p className="mt-6 text-lg text-white/80 text-balance md:text-xl">
            Líder em aprovação no Riacho Fundo I/DF. Aulas para Categorias{" "}
            <span className="font-semibold text-primary">A (Moto)</span> e{" "}
            <span className="font-semibold text-primary">AB (Carro e Moto)</span>
            .
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-xl transition-all hover:bg-brand-yellow-dark hover:shadow-2xl sm:w-auto"
            >
              <WhatsAppIcon className="h-6 w-6" aria-hidden="true" />
              Falar com Atendente no WhatsApp
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#sobre"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
            >
              Conhecer nossos diferenciais
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70">
            <span className="inline-flex items-center gap-2">
              <Bike className="h-5 w-5 text-primary" aria-hidden="true" /> Categoria A
            </span>
            <span className="inline-flex items-center gap-2">
              <Car className="h-5 w-5 text-primary" aria-hidden="true" /> Categoria AB
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" aria-hidden="true" /> Riacho Fundo I/DF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const DIFFERENTIALS = [
    {
      icon: Award,
      title: "+24 anos de experiência",
      description:
        "Tradição comprovada no ensino de direção veicular para todos os perfis de alunos.",
    },
    {
      icon: Users,
      title: "Profissionais eficientes e pacientes",
      description:
        "Instrutores qualificados que priorizam sua segurança e evolução em cada aula.",
    },
    {
      icon: Shield,
      title: "Veículos seguros",
      description:
        "Frota revisada e equipada para que você aprenda com tranquilidade e confiança.",
    },
    {
      icon: Star,
      title: "Líder em Aprovação",
      description:
        "Alta taxa de aprovação dos nossos alunos nos exames do DETRAN.",
    },
  ];

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
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 rounded-3xl bg-brand-black p-8 text-center text-white md:flex-row md:justify-between md:p-12 md:text-left">
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

function TestimonialsSection() {
  const TESTIMONIALS = [
    {
      text: "Excelente experiência! O instrutor me passou total segurança, preço justo e ótimo atendimento.",
      author: "Ana C.",
    },
    {
      text: "Profissionais muito eficientes da mais alta qualidade. Grato por me formar com eles.",
      author: "Davi L.",
    },
    {
      text: "Excelente instrutor, sempre muito paciente, calmo e disposto a ajudar.",
      author: "Ana L.",
    },
  ];

  return (
    <section id="depoimentos" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Prova social
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            O que dizem nossos alunos
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <article
              key={index}
              className="relative rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="mb-4 flex gap-1" aria-label="Avaliação 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-foreground">
                <p className="text-base leading-relaxed">"{testimonial.text}"</p>
              </blockquote>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                  {testimonial.author.charAt(0)}
                </div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Entre em contato
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Vamos tirar suas dúvidas?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Entre em contato pelo WhatsApp e converse com um atendente. Atendimento rápido,
              humanizado e sem complicação.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-brand-yellow-dark hover:shadow-xl sm:w-auto"
            >
              <WhatsAppIcon className="h-6 w-6" aria-hidden="true" />
              Falar pelo WhatsApp
            </a>
          </div>

          <div className="grid gap-6">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Endereço</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Riacho Fundo QS 6 conj 01 lote 37 — Riacho Fundo, Brasília - DF, 71820-601
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Telefone / WhatsApp</h3>
                <p className="mt-1 text-sm text-muted-foreground">(61) 99981-0011</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Horário de Funcionamento</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Seg a Sex: 08:00 às 18:00 | Sábado: 08:00 às 12:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Car className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold">
                Autoescola <span className="text-primary">Patrícia</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              +24 anos formando motoristas responsáveis no Riacho Fundo I e região.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>(61) 99981-0011</li>
              <li>
                Riacho Fundo QS 6 conj 01 lote 37 — Riacho Fundo, Brasília - DF, 71820-601
              </li>
              <li>Seg a Sex: 08:00 às 18:00 | Sábado: 08:00 às 12:00</li>
            </ul>
            <a
              href="https://www.instagram.com/autoescolapatricia_rf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-brand-yellow-dark"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              @autoescolapatricia_rf
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Autoescola Patrícia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
