import { ArrowUpRight, Smartphone, BookOpen, HeartHandshake, Link2, MessageCircle } from "lucide-react";

const items = [
  {
    title: "App Psicogenealogia",
    desc: "Mapa do Tesouro digital: ferramenta para mapear sua árvore genealógica.",
    icon: Smartphone,
    url: "https://mapadotesouroliz.lovable.app/",
    accent: "from-primary to-lilac",
    cta: "Acessar",
  },
  {
    title: "Editora Liz",
    desc: "Livros e guias para aprofundar a sua leitura ancestral.",
    icon: BookOpen,
    url: "https://editoraliz.lovable.app/#guia",
    accent: "from-deep to-primary",
    cta: "Acessar",
  },
  {
    title: "Atendimento LKB",
    desc: "Rede de profissionais formados para te atender com o método Liz.",
    icon: HeartHandshake,
    url: "https://atendimentolkb.lovable.app",
    accent: "from-lilac to-rose",
    cta: "Acessar",
  },
  {
    title: "Atendimento Letícia Baccin",
    desc: "Letícia Kuchockowolec Baccin · agendamento direto via WhatsApp com Anapaula K Farhat.",
    icon: MessageCircle,
    url: "https://wa.me/5544991318081?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento%20com%20a%20Let%C3%ADcia%20Baccin.",
    accent: "from-primary to-rose",
    cta: "Falar no WhatsApp",
  },
  {
    title: "Hub de Links",
    desc: "Todos os caminhos do universo Instituto Liz em um só lugar.",
    icon: Link2,
    url: "https://hubliz.lovable.app/",
    accent: "from-rose to-primary",
    cta: "Acessar",
  },
];

export const Ecosystem = () => (
  <section id="ecossistema" className="relative py-24 md:py-32">
    <div className="container mx-auto px-6 md:px-8">
      <div className="reveal text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
          Ecossistema
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-deep font-semibold leading-tight">
          Tudo que <span className="italic text-gradient">cuida de você</span>
        </h2>
        <p className="mt-5 text-lg text-deep/70">
          Uma rede de aplicativos, livros e atendimentos pensada para sustentar
          sua jornada do início à maestria.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6 max-w-7xl mx-auto">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <a
              key={it.url}
              href={it.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group relative glass rounded-3xl p-7 flex flex-col gap-5 hover:-translate-y-2 transition-all duration-500 hover:shadow-elegant overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${it.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />

              <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${it.accent} flex items-center justify-center shadow-soft`}>
                <Icon className="w-7 h-7 text-white" />
              </div>

              <div className="relative">
                <h3 className="font-display text-2xl text-deep font-semibold leading-tight">
                  {it.title}
                </h3>
                <p className="mt-3 text-deep/70 text-[15px] leading-relaxed">{it.desc}</p>
              </div>

              <div className="relative mt-auto flex items-center justify-between text-primary font-semibold text-sm pt-4 border-t border-primary/15">
                <span>{it.cta}</span>
                <span className="w-9 h-9 rounded-full bg-gradient-amethyst flex items-center justify-center text-primary-foreground transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);
