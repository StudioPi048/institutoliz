import { ArrowRight, BookOpen } from "lucide-react";
import bannerImg from "@/assets/banner-codigo-sagrado.png";
import { handleImageError } from "@/lib/image-fallback";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfPlaceholder/viewform"; // fallback
const FORM_LINK =
  "https://docs.google.com/forms/d/1Jo3TLST_9AeDUVUN9ODtX1t9Gje-K08-0VJmsAT9LiM/viewform";

export const BookBanner = () => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto px-6 md:px-8">
      <div className="reveal max-w-7xl mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-white/40 bg-deep">
          {/* Badge */}
          <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2">
            <BookOpen className="w-4 h-4 text-primary-glow" />
            <span className="text-xs md:text-sm font-semibold text-white tracking-wide uppercase">
              Pré-venda · Lançamento
            </span>
          </div>

          {/* Banner image */}
          <a
            href={FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            aria-label="Acessar pré-venda do livro O Código Sagrado dos Dentes"
          >
            <img
              src={bannerImg}
              alt="O Código Sagrado dos Dentes — Letícia Kuchockowolec Baccin"
              onError={handleImageError}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </a>

          {/* CTA bar */}
          <div className="bg-gradient-amethyst px-6 md:px-10 py-6 md:py-7 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl text-primary-foreground font-semibold leading-tight">
                Garanta seu exemplar na pré-venda
              </h3>
              <p className="text-primary-foreground/80 text-sm md:text-base mt-1">
                Vagas limitadas · Edição especial de lançamento
              </p>
            </div>
            <a
              href={FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-white text-deep rounded-full px-7 py-4 text-base md:text-lg font-semibold shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-1 whitespace-nowrap"
            >
              Quero meu livro
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
