import { LizLogo } from "./Logo";
import { Mail, Instagram, Youtube, MessageCircle, ArrowUpRight } from "lucide-react";

const linkGroups = [
  {
    title: "Jornada",
    links: [
      { label: "Sala de Visitas", url: "https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG" },
      { label: "Mapa do Tesouro", url: "https://go.hotmart.com/Q104946299G?dp=1" },
      { label: "Licenciadas", url: "https://presencialliz.lovable.app/" },
      { label: "Formação 2026", url: "https://formacaopsico.lovable.app/" },
    ],
  },
  {
    title: "Ecossistema",
    links: [
      { label: "App Psicogenealogia", url: "https://mapadotesouroliz.lovable.app/" },
      { label: "Editora Liz", url: "https://editoraliz.lovable.app/#guia" },
      { label: "Atendimento LKB", url: "https://atendimentolkb.lovable.app" },
      { label: "Atendimento Letícia Baccin", url: "https://wa.me/5544991318081" },
      { label: "Hub de Links", url: "https://hubliz.lovable.app/" },
    ],
  },
];

export const Footer = () => (
  <footer className="relative mt-12 bg-gradient-amethyst text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--lilac))_0%,transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--rose))_0%,transparent_50%)]" />

    <div className="relative container mx-auto px-6 md:px-8 pt-20 pb-10">
      <div className="grid lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-5">
          <div className="[&_*]:text-primary-foreground">
            <LizLogo />
          </div>
          <p className="mt-6 text-primary-foreground/85 text-lg leading-relaxed max-w-md font-display italic">
            “Que cada raiz da sua história vire luz para os que vêm depois.”
          </p>
          <a
            href="mailto:gestao@iliz.com.br"
            className="mt-8 inline-flex items-center gap-3 glass-dark rounded-full pl-2 pr-5 py-2 text-sm font-medium hover:bg-white/15 active:bg-white/20 transition-colors"
          >
            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </span>
            gestao@iliz.com.br
          </a>
        </div>

        {linkGroups.map((g) => (
          <div key={g.title} className="lg:col-span-3">
            <h4 className="font-display text-xl mb-5">{g.title}</h4>
            <ul className="space-y-3">
              {g.links.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-1">
          <h4 className="font-display text-xl mb-5">Redes</h4>
          <div className="flex lg:flex-col gap-3">
            <a
              href="https://www.youtube.com/@PsicogenealogiaLiz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-11 h-11 rounded-full glass-dark flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full glass-dark flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/psicogenealogia.liz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full glass-dark flex items-center justify-center hover:bg-white/20 active:bg-white/25 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row gap-3 justify-between items-center text-sm text-primary-foreground/70">
        <div>© {new Date().getFullYear()} Instituto Liz · Psicogenealogia. Todos os direitos reservados.</div>
        <div className="font-display italic">Feito com cuidado e raízes profundas.</div>
      </div>
    </div>
  </footer>
);
