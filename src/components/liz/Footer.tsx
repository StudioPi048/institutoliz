import { LizLogo } from "./Logo";
import { ArrowUpRight, Instagram, Mail, MessageCircle, Youtube } from "lucide-react";

const links = [
  { label: "Sala de Visitas", url: "https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG" },
  { label: "Formação 2026", url: "https://formacaopsico.lovable.app/" },
  { label: "Editora Liz", url: "https://editoraliz.lovable.app/#guia" },
  { label: "Atendimento", url: "https://wa.me/5548996299166?text=Quero%20agendar%20atendimento%20com%20Let%C3%ADcia%20Baccin" },
  { label: "Hub de Links", url: "https://hubliz.lovable.app/" },
];

export const Footer = () => (
  <footer className="bg-deep text-primary-foreground">
    <div className="h-1 bg-[hsl(var(--gold))]" />
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.75fr_0.45fr]">
        <div>
          <LizLogo invert />
          <p className="mt-7 max-w-md text-lg leading-relaxed text-primary-foreground/72">Que cada compreensão sobre o passado amplie as escolhas de quem vem depois.</p>
          <a href="mailto:gestao@iliz.com.br" className="mt-7 inline-flex items-center gap-2 font-semibold text-[hsl(var(--gold))] hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground">
            <Mail className="h-4 w-4" />
            gestao@iliz.com.br
          </a>
        </div>

        <nav aria-label="Links do rodapé" className="border-t border-primary-foreground/18">
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b border-primary-foreground/18 py-3.5 text-sm text-primary-foreground/74 transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground">
              {link.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </nav>

        <div className="flex gap-3 lg:justify-end">
          {[
            ["YouTube", "https://www.youtube.com/@PsicogenealogiaLiz", Youtube],
            ["WhatsApp", "https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG", MessageCircle],
            ["Instagram", "https://www.instagram.com/psicogenealogia.liz", Instagram],
          ].map(([label, url, Icon]) => (
            <a key={String(label)} href={String(url)} target="_blank" rel="noopener noreferrer" aria-label={String(label)} className="flex h-11 w-11 items-center justify-center rounded-md border border-primary-foreground/24 text-primary-foreground/74 transition-colors hover:border-[hsl(var(--gold))] hover:text-[hsl(var(--gold))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground">
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/18 pt-6 text-xs text-primary-foreground/72 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Instituto Liz. Todos os direitos reservados.</span>
        <span>Psicogenealogia · formação · livros · atendimento</span>
      </div>
    </div>
  </footer>
);
