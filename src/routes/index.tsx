import { createFileRoute } from "@tanstack/react-router";
import { type CSSProperties, useState, useEffect } from "react";

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

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

function Index() {
  const [pointer, setPointer] = useState({ x: 50, y: 35 });
  const [pageScrollProgress, setPageScrollProgress] = useState(0);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );

      setPageScrollProgress(Math.min(window.scrollY / scrollableHeight, 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pageStyle = {
    "--pointer-x": `${pointer.x}%`,
    "--pointer-y": `${pointer.y}%`,
    "--page-scroll": pageScrollProgress,
  } as CSSProperties;

  return (
    <>
      {/* Ambient fora do living-site: overflow-x:clip aprisionava o fixed dentro */}
      <div className="site-ambient" aria-hidden="true" />
      <div className="living-site min-h-screen bg-background text-foreground" style={pageStyle}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      {/* FloatingWhatsApp também fora: same reason — position:fixed precisa de body como ancestral */}
      <FloatingWhatsApp />
    </>
  );
}
