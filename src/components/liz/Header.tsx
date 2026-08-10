import { LizLogo } from "./Logo";
import { MessageCircle } from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Header = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-deep/10 bg-background/95">
    <div className="mx-auto flex h-[76px] max-w-[1440px] items-center px-5 md:px-8 lg:px-12">
      <a href="#top" aria-label="Ir ao início" className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        <LizLogo />
      </a>

      <div className="relation-axis mx-8 hidden h-px flex-1 bg-deep/12 lg:block" aria-hidden="true" />

      <nav className="ml-auto hidden items-center gap-7 text-sm font-semibold text-deep/75 md:flex" aria-label="Navegação principal">
        <button onClick={() => scrollTo("bio")} className="relation-link py-2 hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          Letícia & caminhos
        </button>
        <button onClick={() => scrollTo("jornada")} className="relation-link py-2 hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          Jornada
        </button>
      </nav>

      <a
        href="https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-deep px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Entrar na Sala de Visitas no WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Sala de Visitas</span>
      </a>
    </div>
  </header>
);
