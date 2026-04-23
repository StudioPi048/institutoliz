import avatar from "@/assets/leticia-youtube.png";
import { Play, Youtube } from "lucide-react";
import { handleImageError } from "@/lib/image-fallback";

export const YoutubeBanner = () => (
  <section className="relative py-20 md:py-28">
    <div className="container mx-auto px-6 md:px-8 max-w-6xl">
      <div className="reveal relative rounded-[2rem] overflow-hidden shadow-elegant bg-gradient-amethyst">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--lilac))_0%,transparent_55%),radial-gradient(circle_at_20%_80%,hsl(var(--rose))_0%,transparent_55%)]" />

        <div className="relative grid md:grid-cols-5 gap-8 items-center p-8 md:p-12 lg:p-14">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-white/20 blur-xl animate-pulse-glow" />
              <img
                src={avatar}
                alt="Letícia Capriotti — Canal Psicogenealogia Liz no YouTube"
                width={420}
                height={420}
                loading="lazy"
                onError={handleImageError}
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white/40 shadow-glow"
              />
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-[#FF0000] flex items-center justify-center shadow-elegant border-4 border-white">
                <Youtube className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
          </div>

          <div className="md:col-span-3 text-center md:text-left text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.3em] text-lilac font-semibold mb-3">
              Canal no YouTube
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
              Aulas gratuitas de <span className="italic">Psicogenealogia</span>
            </h3>
            <p className="mt-4 text-primary-foreground/85 text-base md:text-lg max-w-xl">
              Conteúdo semanal com Letícia Capriotti para você compreender a sua
              história familiar e dar os primeiros passos no autoconhecimento ancestral.
            </p>
            <a
              href="https://www.youtube.com/@PsicogenealogiaLiz"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 bg-white text-deep rounded-full px-7 py-4 text-base md:text-lg font-semibold shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <Play className="w-5 h-5 fill-[#FF0000] text-[#FF0000]" />
              Assistir no YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
