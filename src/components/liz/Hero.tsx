import heroTree from "@/assets/hero-tree.jpg";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
    <div className="absolute inset-0 -z-10">
      <img
        src={heroTree}
        alt="Árvore ancestral majestosa com raízes profundas e cristais de ametista, simbolizando sabedoria familiar"
        width={1920}
        height={1280}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/30 via-transparent to-transparent" />
    </div>

    <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
      <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-sm text-deep/80 font-medium tracking-wide">Sabedoria ancestral · Cura familiar</span>
      </div>

      <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.05] font-semibold text-deep animate-fade-in" style={{ animationDelay: "0.15s", animationFillMode: "both" }}>
        Nosso propósito é{" "}
        <span className="italic text-gradient">ajudar você</span>
        <br />
        a encontrar o seu.
      </h1>

      <p className="mt-8 text-lg md:text-xl text-deep/75 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.35s", animationFillMode: "both" }}>
        Decodifique o inconsciente familiar e transforme heranças invisíveis em
        consciência, liberdade e propósito através da Psicogenealogia.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
        <a
          href="#jornada"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("jornada")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group inline-flex items-center gap-2 bg-gradient-amethyst text-primary-foreground rounded-full px-8 py-4 text-base md:text-lg font-semibold shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
        >
          Iniciar Minha Jornada
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="https://www.youtube.com/@PsicogenealogiaLiz"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 glass text-deep rounded-full px-8 py-4 text-base md:text-lg font-semibold hover:bg-white/80 transition-all duration-500 hover:-translate-y-1"
        >
          <Play className="w-5 h-5 fill-primary text-primary" />
          Aulas no YouTube
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-deep/50">
      <span className="text-xs uppercase tracking-[0.3em]">Role para descobrir</span>
      <div className="w-px h-12 bg-gradient-to-b from-deep/40 to-transparent" />
    </div>
  </section>
);
