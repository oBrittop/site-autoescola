import { Instagram } from "lucide-react";
import { BRAND_LOGO_SRC, NAV_LINKS } from "./constants";

export function Footer() {
  return (
    <footer className="bg-brand-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={BRAND_LOGO_SRC}
                alt="Autoescola Patrícia"
                className="h-11 w-11 rounded-lg object-cover"
              />
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
              <li>Riacho Fundo QS 6 conj 01 lote 37 — Riacho Fundo, Brasília - DF, 71820-601</li>
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
