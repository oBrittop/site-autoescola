import { useState, useEffect, useCallback, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
  text: string;
  author: string;
  time: string;
  avatar: string;
  link: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: "Auto Escola muito boa, super recomendo. Preços acessíveis e aulas eficazes.👏👏",
    author: "Arthur Dantas",
    time: "um mês atrás",
    avatar: "/images/arthur-dantas.jpg",
    link: "https://www.google.com/maps/contrib/108293224690605292787/reviews?hl=pt-BR"
  },
  {
    text: "Ótima auto escola pra quem busca ser um ótimo condutor do mais auto nível profissionais muito eficientes e eficaz da mas alta qualidade sou grato de me formar com eles",
    author: "Davi Lucas",
    time: "3 semanas atrás",
    avatar: "/images/davi-lucas.jpg",
    link: "https://www.google.com/maps/contrib/114403909686630191508/reviews?hl=pt-BR"
  },
  {
    text: "Quero deixar a minha avaliação aqui,para agradecer ao meu instrutor Maurício.Que além do profissionalismo,tem muita paciência.\nObrigada pelo aprendizado,e confiança,nessa minha nova etapa.\nGRATIDÃO 🙏 🙏 🙏",
    author: "Eliana Maria",
    time: "um mês atrás",
    avatar: "/images/eliana-maria.jpg",
    link: "https://www.google.com/maps/contrib/111437819211051990617/reviews?hl=pt-BR"
  },
  {
    text: "Uma auto escola de Alta qualidade com profissionais especializados, educados, experientes e muito pacientes\nPassei de primeira em tudo muito boa recomendo 👍🏻😃",
    author: "Maria Vitória",
    time: "um mês atrás",
    avatar: "/images/maria-vitoria.jpg",
    link: "https://www.google.com/maps/contrib/117490362967759002379/reviews?hl=pt-BR"
  },
  {
    text: "Eu, Agente da Daexe a serviço do Sebrae, fui muito bem recepcionado pela Jicineide, na Auto Escola Patrícia, no dia 10/09, para a realização do Diagnóstico Empresarial do projeto Sebrae na Sua Empresa. Atendimento excelente e um negócio com grande potencial! Atenciosa e cordial ao nos receber.",
    author: "David Silva",
    time: "11 meses atrás",
    avatar: "/images/david-silva.jpg",
    link: "https://www.google.com/maps/contrib/111132689489045709268/reviews?hl=pt-BR"
  },
  {
    text: "Excelente autoescola!!! Instrutor Pablo foi super atencioso, as aulas foram muito explicativas. Recomendo demais!!!",
    author: "Marya Eduarda",
    time: "6 meses atrás",
    avatar: "/images/marya-eduarda.jpg",
    link: "https://www.google.com/maps/contrib/112500612522986858447/reviews?hl=pt-BR"
  },
  {
    text: "Recomendo a instrutora Michelle, suas instruções para a prova prática são maravilhosas, ela é atenciosa e dedicada, e realmente fica observando e pontuando o que pode melhorar no aluno.",
    author: "Raylane Emily",
    time: "8 meses atrás",
    avatar: "/images/raylane-emily.jpg",
    link: "https://www.google.com/maps/contrib/114324319784039334453/reviews?hl=pt-BR"
  },
  {
    text: "Eu só tenho que agradecer muito a autoescola Patrícia e o melhor instrutor que me ensinou e me ajudou muito que foi o Maurício , ótimas dicas e ensinamentos , vou tirar a minha próxima carta com vcs",
    author: "Jonathan Cauã",
    time: "2 meses atrás",
    avatar: "/images/jonathan-caua.jpg",
    link: "https://www.google.com/maps/contrib/111148429989295687577/reviews?hl=pt-BR"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" className="text-blue-500 fill-current" aria-hidden="true">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z" fill="white" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z" />
  </svg>
);

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Se for mobile (< 768px) = 4.5s; se for PC (>= 768px) = 9s
    const isDesktop = window.innerWidth >= 768;
    const delay = isDesktop ? 9000 : 4500;

    timerRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, delay);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    startAutoplay();
    
    emblaApi.on("select", startAutoplay);
    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", startAutoplay);

    return () => {
      stopAutoplay();
      emblaApi.off("select", startAutoplay);
      emblaApi.off("pointerDown", stopAutoplay);
      emblaApi.off("pointerUp", startAutoplay);
    };
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const handlePrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      startAutoplay();
    }
  }, [emblaApi, startAutoplay]);

  const handleNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      startAutoplay();
    }
  }, [emblaApi, startAutoplay]);

  return (
    <section id="depoimentos" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <div className="text-center sm:text-left">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Prova social
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              O que dizem nossos alunos
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-colors hover:bg-muted"
              aria-label="Avaliação anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-colors hover:bg-muted"
              aria-label="Próxima avaliação"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="flex touch-pan-y gap-6 pb-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={index}
                className="relative w-[85vw] max-w-[320px] flex-none sm:w-[340px] sm:max-w-none md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
              >
                <article className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 flex items-start justify-between">
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary font-bold text-primary-foreground">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            // Fallback to initials if image doesn't exist
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = testimonial.author.charAt(0);
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground leading-tight hover:underline">
                          {testimonial.author}
                        </h3>
                        <p className="text-xs text-muted-foreground">{testimonial.time}</p>
                      </div>
                    </a>
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer" title="Avaliação no Google">
                      <GoogleIcon />
                    </a>
                  </div>
                  
                  <div className="mb-3 flex items-center gap-1.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" aria-hidden="true" />
                      ))}
                    </div>
                    <VerifiedIcon />
                  </div>
                  
                  <blockquote className="text-sm leading-relaxed text-foreground/90">
                    <p className="whitespace-pre-wrap">
                      {testimonial.text}
                    </p>
                  </blockquote>
                  
                  <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="mt-auto pt-4 text-xs font-medium text-muted-foreground hover:text-foreground">
                    Leia mais no Google
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
