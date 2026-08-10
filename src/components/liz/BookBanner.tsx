import { ArrowUpRight, BookOpen } from "lucide-react";
import bannerImg from "@/assets/banner-codigo-sagrado.png";
import { handleImageError } from "@/lib/image-fallback";

const BOOK_URL = "https://go.hotmart.com/X106406130U?dp=1";

export const BookBanner = () => (
  <section className="bg-deep py-16 text-primary-foreground md:py-24">
    <div className="mx-auto grid max-w-7xl gap-0 px-6 md:px-8 lg:grid-cols-[1.45fr_0.55fr]">
      <a
        href={BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="reveal group relative block overflow-hidden border border-primary-foreground/16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--gold))]"
        aria-label="Comprar o livro O Código Sagrado dos Dentes na Hotmart"
      >
        <img
          src={bannerImg}
          alt="O Código Sagrado dos Dentes, de Letícia Kuchockowolec Baccin"
          onError={handleImageError}
          loading="lazy"
          className="h-full min-h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </a>

      <div className="reveal flex flex-col justify-between border border-t-0 border-primary-foreground/16 bg-primary p-7 lg:border-l-0 lg:border-t lg:p-10">
        <div>
          <BookOpen className="h-7 w-7 text-[hsl(var(--gold))]" />
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight md:text-4xl">
            O Código Sagrado dos Dentes
          </h2>
          <p className="mt-4 leading-relaxed text-primary-foreground/78">
            O lançamento já está disponível. Compre seu exemplar diretamente pela Hotmart.
          </p>
        </div>
        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex min-h-[52px] items-center justify-between gap-4 rounded-lg bg-background px-5 font-semibold text-deep transition-colors hover:bg-[hsl(var(--gold))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
        >
          Comprar o livro
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
);
