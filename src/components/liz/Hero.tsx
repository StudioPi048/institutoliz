import leticia from "@/assets/leticia-baccin-2026.webp";
import logoLiz from "@/assets/logo-liz.webp";
import { ArrowDownRight, Play } from "lucide-react";
import { handleImageError } from "@/lib/image-fallback";

export const Hero = () => (
  <section id="top" className="relative pt-[76px]">
    <div className="mx-auto grid min-h-[calc(100svh-76px)] max-w-[1600px] lg:grid-cols-[1.02fr_0.98fr]">
      <div className="relative min-h-[54svh] overflow-hidden bg-secondary lg:min-h-0">
        <img
          src={leticia}
          alt="Letícia Kuchockowolec Baccin, fundadora do Instituto Liz"
          width={1200}
          height={1500}
          onError={handleImageError}
          className="absolute inset-0 h-full w-full object-cover object-[50%_24%]"
          fetchPriority="high"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-deep/92 px-6 py-4 text-primary-foreground md:px-9">
          <div>
            <p className="font-display text-lg font-bold md:text-xl">Letícia Kuchockowolec Baccin</p>
            <p className="mt-1 text-xs text-primary-foreground/70">Fundadora do Instituto Liz</p>
          </div>
          <img src={logoLiz} alt="" className="h-9 w-9 object-contain" aria-hidden="true" />
        </div>
      </div>

      <div className="relative flex bg-background px-6 py-14 md:px-12 md:py-20 lg:items-center lg:px-16 xl:px-24">
        <div className="relation-axis-vertical absolute left-0 top-0 hidden h-full w-px bg-deep/12 lg:block" aria-hidden="true" />
        <div className="absolute right-8 top-0 hidden h-32 w-px bg-[hsl(var(--gold))] md:block">
          <span className="absolute -bottom-1 -left-1 block h-2 w-2 rotate-45 bg-[hsl(var(--gold))]" />
        </div>

        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(3rem,6vw,5.8rem)] font-extrabold leading-[0.96] text-deep">
            Toda história deixa marcas.
            <span className="mt-2 block text-primary">Compreendê-las abre caminhos.</span>
          </h1>

          <p className="mt-8 max-w-[62ch] text-base leading-relaxed text-deep/72 md:text-lg">
            O Instituto Liz reúne formação, leitura, atendimento e conteúdo para quem deseja reconhecer padrões familiares e fazer escolhas mais conscientes.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#bio"
              className="group inline-flex min-h-[52px] items-center justify-between gap-6 rounded-lg bg-primary px-6 py-4 font-semibold text-primary-foreground transition-colors hover:bg-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Encontrar meu caminho
              <ArrowDownRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="https://youtube.com/@psicogenealogializ?si=hz8qqaD2TmOb_Q4n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-lg border border-deep/25 px-6 py-4 font-semibold text-deep transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Play className="h-4 w-4 fill-current" />
              Ver aulas abertas
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
