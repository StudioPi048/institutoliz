import avatar from "@/assets/leticia-youtube.webp";
import { Play, Youtube } from "lucide-react";
import { handleImageError } from "@/lib/image-fallback";

export const YoutubeBanner = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="reveal mx-auto grid max-w-7xl gap-0 px-6 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
      <div className="relative min-h-80 overflow-hidden bg-secondary">
        <img
          src={avatar}
          alt="Letícia Kuchockowolec Baccin no canal Psicogenealogia Liz"
          width={800}
          height={800}
          loading="lazy"
          onError={handleImageError}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <span className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-md bg-[#FF0000] text-white">
          <Youtube className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-col justify-center border border-deep/16 bg-secondary px-7 py-12 md:px-12 md:py-16 lg:border-l-0">
        <h2 className="font-display text-4xl font-extrabold leading-[1.02] text-deep md:text-6xl">Psicogenealogia para assistir, ouvir e compreender.</h2>
        <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-deep/68 md:text-lg">
          Aulas e conversas com Letícia Kuchockowolec Baccin para reconhecer padrões familiares e conhecer o trabalho do Instituto Liz.
        </p>
        <a
          href="https://youtube.com/@psicogenealogializ?si=hz8qqaD2TmOb_Q4n"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[52px] w-fit items-center gap-3 rounded-lg bg-deep px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <Play className="h-4 w-4 fill-current" />
          Assistir no YouTube
        </a>
      </div>
    </div>
  </section>
);
