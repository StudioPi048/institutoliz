import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { handleImageError } from "@/lib/image-fallback";
import seedImg from "@/assets/jornada-semente.webp";
import sproutImg from "@/assets/jornada-arvore.webp";
import treeImg from "@/assets/livros.webp";
import forestImg from "@/assets/aula.webp";

const stages = [
  {
    name: "A Semente",
    title: "O despertar da sua história",
    text: "Aqui começa tudo. Você é convidado(a) a olhar para sua história familiar com novos olhos. Na Sala de Visitas e no Mapa do Tesouro, você dá o primeiro passo dentro do Instituto Liz.",
    image: seedImg,
    links: [
      { label: "Sala de Visitas", url: "https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG" },
      { label: "Mapa do Tesouro", url: "https://go.hotmart.com/Q104946299G?dp=1" },
    ],
  },
  {
    name: "O Broto",
    title: "Crescimento com nossas licenciadas",
    text: "O broto representa o cuidado contínuo. Nossas licenciadas oferecem grupos e encontros presenciais para que sua jornada cresça de forma firme, acolhida e em comunidade.",
    image: sproutImg,
    links: [
      { label: "Ver Licenciadas", url: "https://presencialliz.lovable.app/" },
      { label: "Inscrição Presencial", url: "https://docs.google.com/forms/d/e/1FAIpQLScEuGz_1-IFy9xq1CuHUY0-dwRq2csJrf-9Foh3I_DhQlB1-w/viewform" },
    ],
  },
  {
    name: "A Árvore",
    title: "Psicogenealogia para Todos",
    text: "Você se torna árvore: enraizada e com copa generosa. Aprofunde-se na Psicogenealogia e acesse os guias da Editora Liz.",
    image: treeImg,
    links: [
      { label: "Psicogenealogia", url: "https://psicogenealogializ.lovable.app/" },
      { label: "Editora Liz", url: "https://editoraliz.lovable.app/#guia" },
    ],
  },
  {
    name: "A Floresta",
    title: "Maestria e formação profissional",
    text: "A floresta é a comunidade de profissionais formados que atendem, ensinam e cuidam. Aqui você se forma como terapeuta e integra a rede de atendimento LKB.",
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

  return (
    <section id="jornada" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="reveal grid gap-10 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-none text-deep md:text-6xl">Uma jornada em quatro movimentos.</h2>
            <p className="mt-6 max-w-[42ch] leading-relaxed text-deep/66">Escolha a etapa que mais se aproxima do seu momento atual.</p>
          </div>

          <div>
            <div className="relation-axis grid grid-cols-2 border-t border-deep/20 md:grid-cols-4" aria-label="Etapas da Jornada Liz">
              {stages.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                  className={`min-h-24 border-b border-deep/20 px-3 py-4 text-left transition-colors md:border-r ${active === index ? "bg-deep text-primary-foreground" : "text-deep hover:bg-background"}`}
                >
                  <span className={`text-xs font-semibold ${active === index ? "text-[hsl(var(--gold))]" : "text-primary"}`}>0{index + 1}</span>
                  <span className="mt-2 block font-display text-lg font-bold">{item.name}</span>
                </button>
              ))}
            </div>

            <div className="grid bg-background md:grid-cols-[0.9fr_1.1fr]" aria-live="polite">
              <div className="relative min-h-72 overflow-hidden md:min-h-[430px]">
                <img
                  key={stage.name}
                  src={stage.image}
                  alt={`Imagem da etapa ${stage.name}`}
                  onError={handleImageError}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center px-7 py-10 md:px-10">
                <h3 className="font-display text-3xl font-extrabold leading-tight text-deep md:text-4xl">{stage.title}</h3>
                <p className="mt-5 leading-relaxed text-deep/68">{stage.text}</p>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                  {stage.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-[52px] items-center gap-3 rounded-lg bg-primary px-4 font-semibold text-primary-foreground transition-colors hover:bg-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-foreground/14" aria-hidden="true"><ExternalLink className="h-4 w-4" /></span>
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
