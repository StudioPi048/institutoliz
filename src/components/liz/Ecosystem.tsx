import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, BookOpen, GraduationCap, Map, MessageCircle, Smartphone, UsersRound } from "lucide-react";

const items = [
  { title: "App Psicogenealogia", desc: "Ferramenta oficial para acompanhar sua jornada.", url: "https://psicogenealogializ.lovable.app/", cta: "Acessar app", destination: "Página externa", icon: Smartphone },
  { title: "Mapa do Tesouro", desc: "Organize sua árvore genealógica e reconheça relações.", url: "https://mapadotesouroliz.lovable.app/", cta: "Abrir ferramenta", destination: "Página externa", icon: Map },
  { title: "Editora Liz", desc: "Livros e guias para aprofundar a leitura ancestral.", url: "https://editoraliz.lovable.app/#guia", cta: "Conhecer a editora", destination: "Catálogo da Editora", icon: BookOpen },
  { title: "Liz Indica!", desc: "Rede de profissionais formadas no método Liz.", url: "https://atendimentolkb.lovable.app", cta: "Ver profissionais", destination: "Rede de atendimento", icon: UsersRound },
  { title: "Atendimento com Letícia", desc: "Agendamento individual diretamente pelo WhatsApp.", url: "https://wa.me/5548996299166?text=Quero%20agendar%20atendimento%20com%20Let%C3%ADcia%20Baccin", cta: "Agendar", destination: "WhatsApp", icon: MessageCircle },
  { title: "Plataforma Hotmart", desc: "Cursos e conteúdos exclusivos do Instituto Liz.", url: "https://hotmart.com/club/instituto-liz", cta: "Acessar plataforma", destination: "Hotmart", icon: GraduationCap },
];

export const Ecosystem = () => (
  <section id="ecossistema" className="bg-primary text-primary-foreground">
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="reveal grid gap-12 lg:grid-cols-[0.42fr_1fr]">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-none md:text-6xl">O ecossistema Liz</h2>
          <p className="mt-6 max-w-[42ch] leading-relaxed text-primary-foreground/84">Ferramentas, livros, profissionais e plataformas que continuam a jornada fora desta página.</p>
        </div>
        <ol className="relation-axis border-t border-primary-foreground/32">
          {items.map((item, index) => {
            const Icon: LucideIcon = item.icon;
            return (
            <li key={item.url} className="border-b border-primary-foreground/32">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 py-6 transition-colors hover:bg-deep/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-foreground sm:grid-cols-[3.25rem_0.85fr_1.15fr_auto] sm:items-center sm:px-3"
              >
                <span className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/12 text-[hsl(var(--gold))]" aria-hidden="true">
                  <Icon className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 font-display text-xs font-bold text-primary-foreground/72">0{index + 1}</span>
                </span>
                <h3 className="font-display text-xl font-bold md:text-2xl">{item.title}</h3>
                <span>
                  <span className="block max-w-[42ch] text-sm leading-relaxed text-primary-foreground/82">{item.desc}</span>
                  <span className="mt-2 block text-xs font-semibold text-primary-foreground/70">Abre em: {item.destination}</span>
                </span>
                <span className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary-foreground px-4 text-sm font-semibold text-deep transition-colors group-hover:bg-[hsl(var(--gold))]">
                  {item.cta}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          )})}
        </ol>
      </div>
    </div>
  </section>
);
