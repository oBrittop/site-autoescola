import { type CSSProperties, useState, useEffect } from "react";
import { Star, Bike, Car, MapPin, ChevronRight } from "lucide-react";
import { WHATSAPP_LINK } from "./constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

// ─── HeroSection ─────────────────────────────────────────────────────────────

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const max = Math.max(window.innerHeight, 1);
      setScrollProgress(Math.min(window.scrollY / max, 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroStyle = {
    "--hero-progress": scrollProgress,
  } as CSSProperties;

  return (
    <section
      id="inicio"
      style={heroStyle}
      // Fundo amarelo sólido — mesma cor do fundo da foto, para fundir perfeitamente
      className="hero-stage relative overflow-hidden bg-primary pt-20 sm:pt-24 md:pt-28"
    >
      {/* Barra de progresso de scroll */}
      <div className="scroll-meter" aria-hidden="true">
        <span />
      </div>

      {/* ── Conteúdo principal ── */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-0 px-4 sm:px-6 lg:flex-row lg:items-end lg:gap-0 lg:px-8">
        {/* ── Coluna de texto (esquerda) ── */}
        <div className="relative z-10 flex-1 py-10 sm:py-14 lg:py-16 lg:pb-28">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-black/20 bg-brand-black/10 px-3 py-1 text-xs font-bold text-brand-black backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm">
            <Star
              className="h-3.5 w-3.5 fill-brand-black text-brand-black sm:h-4 sm:w-4"
              aria-hidden="true"
            />
            4,8 ★ no Google · +100 avaliações
          </span>

          {/* Título */}
          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-brand-black sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
            Autoescola
            <br />
            <span className="text-brand-black">Patrícia</span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-4 max-w-md text-sm font-medium text-brand-black/80 sm:mt-5 sm:text-base md:text-lg">
            +24 anos de tradição no Riacho Fundo I/DF.
            <br className="hidden sm:block" />
            Categorias <strong className="text-brand-black">A (Moto)</strong> e{" "}
            <strong className="text-brand-black">AB (Carro e Moto)</strong>.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="wpp-pulse group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-black px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-brand-black/80 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
              Falar no WhatsApp
              <ChevronRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#sobre"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-black/30 bg-brand-yellow/40 px-6 py-3.5 text-sm font-bold text-brand-black shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-black hover:bg-brand-black hover:text-white hover:shadow-[0_6px_0_var(--brand-yellow-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:translate-y-0 active:shadow-sm sm:w-auto sm:px-7 sm:py-4 sm:text-base"
            >
              Ver nossos diferenciais
            </a>
          </div>

          {/* Tags de categoria */}
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-brand-black/70 sm:gap-4 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <Bike className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Categoria A
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Car className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Categoria AB
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              Riacho Fundo I/DF
            </span>
          </div>
        </div>

        {/* ── Coluna da foto (direita) ── */}
        {/*
          A foto tem fundo amarelo idêntico ao da seção.
          Usamos:
          - object-contain para não cortar a composição
          - Gradiente à esquerda: yellow → transparente (funde texto ↔ foto)
          - Gradiente em baixo: yellow → transparente (para a diagonal funcionar)
          - A seção não tem padding-bottom aqui; a foto "encosta" no rodapé diagonal
        */}
        <div className="relative w-full flex-shrink-0 pb-16 sm:pb-20 lg:pb-0 lg:w-[79%] xl:w-[73%]">
          {/* Gradiente de fusão — lado esquerdo (desktop) */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-primary to-transparent lg:block xl:w-40"
            aria-hidden="true"
          />

          <img
            src="/images/hero-main.png"
            alt="Carro e moto da Autoescola Patrícia"
            className="hero-photo-img"
            draggable={false}
          />
        </div>
      </div>

      {/* ── Corte diagonal na base ── */}
      {/*
        Trapézio completo: cobre TODA a faixa abaixo da diagonal.
        Antes era só um triângulo à direita, deixando o fundo amarelo
        aparecer à esquerda como uma linha fina.
        Novo path: começa no canto inferior-esquerdo, sobe para a borda
        da diagonal no lado esquerdo (y=72), vai até quase o topo no lado
        direito (y=8), e desce para o canto inferior-direito — cobrindo tudo.
      */}
      <div className="absolute inset-x-0 -bottom-px z-20" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="h-14 w-full sm:h-20 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fundo amarelo cobre a área transparente acima da diagonal */}
          <rect x="0" y="0" width="1440" height="80" fill="oklch(0.84 0.19 95.5)" />
          {/* Trapézio branco — cobre tudo abaixo da linha diagonal */}
          <path d="M0,81 L0,72 L1440,0 L1440,81 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
