import { Star } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
}

const TESTIMONIALS: Testimonial[] = [
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

export function TestimonialsSection() {
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
              className="alive-card scroll-reveal relative rounded-2xl border border-border bg-background p-6 shadow-sm"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-4 flex gap-1" aria-label="Avaliação 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
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
