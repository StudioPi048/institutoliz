import { useEffect, useState } from "react";
import { LizLogo } from "./Logo";
import { MessageCircle } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`container mx-auto px-4 md:px-8 transition-all duration-500`}>
        <div className={`glass rounded-2xl px-4 md:px-7 py-3 flex items-center justify-between ${scrolled ? "shadow-elegant" : ""}`}>
          <LizLogo />
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-deep/85">
            <button onClick={() => scrollTo("jornada")} className="hover:text-primary transition-colors">
              A Jornada
            </button>
            <button onClick={() => scrollTo("ecossistema")} className="hover:text-primary transition-colors">
              Ecossistema
            </button>
          </nav>
          <a
            href="https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gradient-amethyst text-primary-foreground rounded-full px-4 md:px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Entrar na Sala de Visitas no WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Sala de Visitas</span>
          </a>
        </div>
      </div>
    </header>
  );
};
