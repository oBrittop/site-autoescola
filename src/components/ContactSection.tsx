import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { WHATSAPP_LINK } from "./constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Link direto para Google Maps com o endereço da autoescola
const MAPS_DIRECTIONS_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=Autoescola+Patr%C3%ADcia+Riacho+Fundo+Bras%C3%ADlia+DF";

// Embed do Google Maps — sem API key, pesquisa pelo nome/endereço
const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Autoescola+Patricia+QS+6+Conj+1+Lote+37+Riacho+Fundo+Bras%C3%ADlia+DF+71820-601&output=embed&hl=pt-BR&z=16";

export function ContactSection() {
  return (
    <section id="contato" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Cabeçalho ── */}
        <div className="mb-12 text-center scroll-reveal">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Entre em contato
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Vamos tirar suas dúvidas?
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-lg text-muted-foreground">
            Entre em contato pelo WhatsApp e converse com um atendente. Atendimento rápido,
            humanizado e sem complicação.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-all hover:bg-brand-yellow-dark hover:shadow-xl"
          >
            <WhatsAppIcon className="h-6 w-6" aria-hidden="true" />
            Falar pelo WhatsApp
          </a>
        </div>

        {/* ── Grid: cards de info + mapa ── */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">

          {/* Cards de contato */}
          <div className="grid gap-4 content-start scroll-reveal">
            <div className="alive-card flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Endereço</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Riacho Fundo QS 6 conj 01 lote 37 — Riacho Fundo, Brasília - DF, 71820-601
                </p>
                <a
                  href={MAPS_DIRECTIONS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-brand-yellow-dark"
                >
                  <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                  Traçar rota no Google Maps
                </a>
              </div>
            </div>

            <div className="alive-card flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Telefone / WhatsApp</h3>
                <p className="mt-1 text-sm text-muted-foreground">(61) 99981-0011</p>
              </div>
            </div>

            <div className="alive-card flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Horário de Funcionamento</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Seg a Sex: 08:00 às 18:00
                  <br />
                  Sábado: 08:00 às 12:00
                </p>
              </div>
            </div>
          </div>

          {/* ── Mapa do Google Maps ── */}
          <div className="scroll-reveal overflow-hidden rounded-2xl border border-border shadow-sm" style={{ animationDelay: "80ms" }}>
            <iframe
              title="Localização da Autoescola Patrícia no Google Maps"
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              className="min-h-72 w-full border-0 sm:min-h-80 lg:min-h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
