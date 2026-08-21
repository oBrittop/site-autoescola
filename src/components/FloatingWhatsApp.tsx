import { useState, useEffect } from "react";
import { WHATSAPP_LINK } from "./constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Mesma lógica do Header:
      // — header some quando está rolando para BAIXO e já passou de 90px
      // — header volta quando rola para CIMA ou volta ao topo
      const scrollingDown = currentScrollY > lastScrollY;
      const pastThreshold = currentScrollY > 90;

      if (scrollingDown && pastThreshold) {
        // Header sumindo → botão aparece
        setIsVisible(true);
      } else if (!scrollingDown || currentScrollY <= 90) {
        // Rolando para cima ou perto do topo → header voltando → botão some
        setIsVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      // Desliza da direita para dentro quando visível,
      // some para a direita quando o header volta
      className={[
        "fixed bottom-6 right-6 z-50",
        "flex h-14 w-14 items-center justify-center",
        "rounded-full bg-green-500 text-white shadow-2xl",
        "transition-all duration-500 ease-in-out",
        "hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2",
        // Visível: posição normal | Oculto: desliza 80px para a direita e some
        isVisible
          ? "translate-x-0 opacity-100"
          : "translate-x-20 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
