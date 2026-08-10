import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import congressArtwork from "@/assets/congresso-tempus-2026.webp";
import { handleImageError } from "@/lib/image-fallback";

const CONGRESS_URL = "https://congressoiii.lovable.app";

export const CongressBanner = () => (
  <section
    id="congresso-2026"
    aria-labelledby="congresso-title"
    className="bg-[#050d0a] py-16 text-[#eee6d7] md:py-24"
  >
    <div className="mx-auto grid max-w-[1440px] px-6 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12">
      <a
        href={CONGRESS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="reveal group relative min-h-[360px] overflow-hidden border border-[#cda532]/35 bg-[#08130f] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#efc95b] md:min-h-[520px]"
        aria-label="Conhecer o Congresso III Tempus no site oficial"
      >
        <img
          src={congressArtwork}
          alt="Relógio antigo com engrenagens, ramos e raízes, símbolo do Congresso III Tempus"
          width={1448}
          height={1086}
          loading="lazy"
          onError={handleImageError}
          className="absolute inset-0 h-full w-full object-cover object-left"
        />
        <span className="absolute inset-x-0 bottom-0 flex min-h-[64px] items-center justify-between gap-4 border-t border-[#cda532]/35 bg-[#050d0a] px-5 text-sm font-semibold text-[#eee6d7] transition-colors group-hover:bg-[#10231c] md:px-7">
          Conheça o Congresso III
          <ArrowUpRight className="h-5 w-5 shrink-0 text-[#efc95b]" aria-hidden="true" />
        </span>
      </a>

      <div className="reveal flex flex-col justify-center border border-t-0 border-[#cda532]/35 bg-[#08130f] px-7 py-12 md:px-12 md:py-16 lg:border-l-0 lg:border-t lg:px-14">
        <h2 id="congresso-title" className="leading-none">
          <span className="block font-body text-lg font-semibold uppercase tracking-[0.18em] text-[#53d4cc] md:text-xl">
            Congresso III
          </span>
          <span className="font-tempus mt-2 block text-7xl font-semibold text-[#e0ad2f] md:text-8xl">
            Tempus
          </span>
        </h2>
        <p className="mt-3 max-w-[32ch] text-sm font-semibold uppercase tracking-[0.13em] text-[#eee6d7]/72 md:text-base">
          Ciclos invisíveis das gerações
        </p>

        <div className="mt-9 border-y border-[#cda532]/28 py-5">
          <p className="flex items-start gap-3 text-sm font-medium text-[#eee6d7] md:text-base">
            <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-[#53d4cc]" aria-hidden="true" />
            <time dateTime="2026-11-06">06</time>, <time dateTime="2026-11-07">07</time> e <time dateTime="2026-11-08">08 de novembro de 2026</time>
          </p>
          <p className="mt-3 flex items-center gap-3 text-sm font-medium text-[#eee6d7] md:text-base">
            <MapPin className="h-5 w-5 shrink-0 text-[#53d4cc]" aria-hidden="true" />
            Florianópolis · SC
          </p>
        </div>

        <p className="font-tempus mt-8 max-w-[30ch] text-3xl italic leading-tight text-[#f0d99d] md:text-4xl">
          O tempo que herdamos. A consciência que transforma o legado.
        </p>
        <p className="mt-5 max-w-[58ch] text-sm leading-relaxed text-[#eee6d7]/68 md:text-base">
          Um congresso para investigar as heranças invisíveis que atravessam famílias, corpos, vínculos e destinos — e abrir novos ciclos de consciência.
        </p>

        <a
          href={CONGRESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex min-h-[54px] w-full items-center justify-between gap-4 rounded-lg bg-[#d8a82c] px-6 font-semibold text-[#08130f] transition-colors hover:bg-[#efc95b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#53d4cc] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08130f] sm:w-fit sm:min-w-[300px]"
        >
          Ver programação e participar
          <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
        </a>
        <p className="mt-3 text-xs text-[#eee6d7]/52">Abre o site oficial do Congresso III.</p>
      </div>
    </div>
  </section>
);
