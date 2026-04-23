import { useState } from "react";
import { ArrowUpRight, Sprout, Leaf, TreePine, Trees } from "lucide-react";
import { handleImageError } from "@/lib/image-fallback";
import seedImg from "@/assets/jornada-semente.webp";
import sproutImg from "@/assets/jornada-arvore.webp";
import treeImg from "@/assets/livros.webp";
import forestImg from "@/assets/aula.webp";

type Stage = {
  id: number;
  name: string;
  title: string;
  description: string;
  longText: string;
  icon: typeof Sprout;
  image: string;
  links: { label: string; url: string }[];
};

const stages: Stage[] = [
  {
    id: 1,
    name: "A Semente",
    title: "O despertar da sua história",
    description: "O primeiro contato com a sua árvore. Sentir, escutar, perceber.",
    longText:
      "Aqui começa tudo. Você é convidado(a) a olhar para sua história familiar com novos olhos. Na Sala de Visitas e no Mapa do Tesouro, você dá o primeiro passo dentro do Instituto Liz.",
    icon: Sprout,
    image: seedImg,
    links: [
      { label: "Sala de Visitas", url: "https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG" },
      { label: "Mapa do Tesouro", url: "https://go.hotmart.com/Q104946299G?dp=1" },
    ],
  },
  {
    id: 2,
    name: "O Broto",
    title: "Crescimento com nossas licenciadas",
    description: "Aprofundamento guiado por profissionais formadas no método Liz.",
    longText:
      "O broto representa o cuidado contínuo. Nossas licenciadas oferecem grupos e encontros presenciais para que sua jornada cresça de forma firme, acolhida e em comunidade.",
    icon: Leaf,
    image: sproutImg,
    links: [
      { label: "Ver Licenciadas", url: "https://presencialliz.lovable.app/" },
      {
        label: "Inscrição Presencial",
        url: "https://docs.google.com/forms/d/e/1FAIpQLScEuGz_1-IFy9xq1CuHUY0-dwRq2csJrf-9Foh3I_DhQlB1-w/viewform",
      },
    ],
  },
  {
    id: 3,
    name: "A Árvore",
    title: "Especialização em Constelação Familiar",
    description: "Quando a Psicogenealogia encontra a Constelação e os ancestrais falam.",
    longText:
      "Você se torna árvore: enraizada e com copa generosa. Aprofunde-se na Psico aliada à Constelação Familiar e tenha acesso aos guias da Editora Liz para sustentar sua prática.",
    icon: TreePine,
    image: treeImg,
    links: [
      { label: "Psico e Constelação", url: "https://constelacaoliz.lovable.app/" },
      { label: "Editora Liz", url: "https://editoraliz.lovable.app/#guia" },
    ],
  },
  {
    id: 4,
    name: "A Floresta",
    title: "Maestria e Formação Profissional",
    description: "Tornar-se referência. Cuidar, formar e atender com excelência.",
    longText:
      "A floresta é a comunidade de profissionais formados que atendem, ensinam e cuidam. Aqui você se forma como terapeuta e integra a rede de atendimento LKB.",
    icon: Trees,
    image: forestImg,
    links: [
      { label: "Formação 2026", url: "https://formacaopsico.lovable.app/" },
      { label: "Atendimento LKB", url: "https://atendimentolkb.lovable.app" },
    ],
  },
];

export const Journey = () => {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  const Icon = stage.icon;

  return (
    <section id="jornada" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />

      <div className="container mx-auto px-6 md:px-8">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            A Jornada Liz
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-deep font-semibold leading-tight">
            Da semente à <span className="italic text-gradient">floresta</span>
          </h2>
          <p className="mt-5 text-lg text-deep/70">
            Quatro etapas vivas. Clique em cada uma e veja seu próximo passo.
          </p>
        </div>

        {/* Path map */}
        <div className="reveal relative max-w-5xl mx-auto mb-16">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-1 rounded-full bg-deep/10 overflow-hidden">
            <div
              className="h-full bg-gradient-amethyst transition-all duration-700 ease-out"
              style={{ width: `${(active / (stages.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
            {stages.map((s, i) => {
              const StageIcon = s.icon;
              const isActive = i === active;
              const isPassed = i < active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  aria-label={`Ver etapa ${s.name}`}
                  className="group flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl p-2 active:scale-95 transition-transform"
                >
                  <div
                    className={`relative w-[72px] h-[72px] md:w-[76px] md:h-[76px] rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-amethyst shadow-glow scale-110"
                        : isPassed
                        ? "bg-gradient-amethyst/80 shadow-soft"
                        : "bg-white border border-primary/20 shadow-soft group-hover:scale-105 group-hover:border-primary/40"
                    }`}
                  >
                    <StageIcon
                      className={`w-8 h-8 transition-colors ${
                        isActive || isPassed ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-primary/80 font-semibold">
                      Etapa {s.id}
                    </div>
                    <div
                      className={`font-display text-lg md:text-xl mt-1 transition-colors ${
                        isActive ? "text-deep" : "text-deep/70 group-hover:text-deep"
                      }`}
                    >
                      {s.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active card */}
        <div className="reveal max-w-5xl mx-auto">
          <div
            key={active}
            className="glass rounded-3xl overflow-hidden shadow-elegant grid md:grid-cols-2 animate-scale-in"
          >
            <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-amethyst">
              <img
                src={stage.image}
                alt={`Imagem simbólica da etapa ${stage.name}`}
                width={800}
                height={800}
                loading="lazy"
                onError={handleImageError}
                className="w-full h-full object-cover animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-deep/40 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-deep font-semibold">
                Etapa {stage.id}
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-amethyst flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="font-display italic text-xl text-primary">{stage.name}</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-deep font-semibold leading-tight">
                {stage.title}
              </h3>
              <p className="mt-4 text-deep/70 text-base md:text-lg leading-relaxed">
                {stage.longText}
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                {stage.links.map((l, idx) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center justify-between gap-3 rounded-full px-6 py-3.5 text-sm md:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      idx === 0
                        ? "bg-gradient-amethyst text-primary-foreground shadow-soft hover:shadow-glow"
                        : "bg-white/70 text-deep border border-primary/20 hover:bg-white hover:border-primary/40"
                    }`}
                  >
                    {l.label}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
