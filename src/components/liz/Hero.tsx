import leticia from "@/assets/leticia.png";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export const Hero = () => (
  <section className="relative pt-32 md:pt-36 pb-20 md:pb-28 overflow-hidden">
    {/* Ambient background */}
    <div className="absolute inset-0 -z-10 bg-gradient-soft" />
    <div className="absolute -z-10 top-20 -left-24 w-[420px] h-[420px] rounded-full bg-lilac/30 blur-3xl" />
    <div className="absolute -z-10 bottom-0 -right-24 w-[460px] h-[460px] rounded-full bg-rose/25 blur-3xl" />

    <div className="container mx-auto px-6 md:px-8">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center max-w-7xl mx-auto">
        {/* LEFT — copy */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-7 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-deep/80 font-medium tracking-wide">
              Letícia Capriotti · Psicogenealogia
            </span>
          </div>

          <h1
            className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.04] font-semibold text-deep animate-fade-in"
            style={{ animationDelay: "0.15s", animationFillMode: "both" }}
          >
            Nosso propósito é{" "}
            <span className="italic text-gradient">ajudar você</span>
            <br />
            a encontrar o seu.
          </h1>

          <p
            className="mt-7 text-lg md:text-xl text-deep/75 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.35s", animationFillMode: "both" }}
          >
            Decodifique o inconsciente familiar e transforme heranças invisíveis
            em consciência, liberdade e propósito.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            <a
              href="#jornada"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("jornada")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-amethyst text-primary-foreground rounded-full px-7 py-4 text-base md:text-lg font-semibold shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            >
              Iniciar Minha Jornada
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://www.youtube.com/@PsicogenealogiaLiz"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 glass text-deep rounded-full px-7 py-4 text-base md:text-lg font-semibold hover:bg-white/85 transition-all duration-500 hover:-translate-y-1"
            >
              <Play className="w-5 h-5 fill-primary text-primary" />
              Aulas no YouTube
            </a>
          </div>

          {/* Trust row */}
          <div
            className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 animate-fade-in"
            style={{ animationDelay: "0.7s", animationFillMode: "both" }}
          >
            {[
              { n: "+20", l: "anos de prática" },
              { n: "+50k", l: "vidas tocadas" },
              { n: "4", l: "etapas da jornada" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="font-display text-3xl md:text-4xl text-gradient font-semibold">
                  {s.n}
                </div>
                <div className="text-xs md:text-sm text-deep/60 mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — portrait */}
        <div className="lg:col-span-5 relative">
          <div
            className="relative mx-auto max-w-md lg:max-w-none animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-amethyst rounded-[2.5rem] blur-2xl opacity-30" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-rose blur-2xl opacity-60" />

            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-white/40 bg-gradient-amethyst">
              <img
                src={leticia}
                alt="Letícia Capriotti, fundadora do Instituto Liz, sorrindo em seu estúdio"
                width={1200}
                height={1500}
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-amethyst flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <div className="font-display text-deep font-semibold leading-tight">
                    Letícia Capriotti
                  </div>
                  <div className="text-xs text-deep/70">
                    Fundadora · Instituto Liz
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
