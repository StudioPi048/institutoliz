import banner from "@/assets/sala-visitas.webp";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { handleImageError } from "@/lib/image-fallback";

export const WelcomeBar = () => (
  <section className="bg-background py-16 md:py-24">
    <div className="reveal mx-auto grid max-w-7xl px-6 md:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:px-12">
      <div className="relative min-h-72 overflow-hidden bg-deep md:min-h-96">
        <img
          src={banner}
          alt="Sala de Visitas — comunidade Instituto Liz"
          width={1600}
          height={600}
          loading="lazy"
          onError={handleImageError}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-deep/28" />
      </div>
      <div className="flex flex-col justify-center bg-primary px-7 py-10 text-primary-foreground md:px-12 md:py-14">
        <h2 className="font-display text-4xl font-extrabold leading-none md:text-5xl">Sala de Visitas</h2>
        <p className="mt-5 max-w-[50ch] leading-relaxed text-primary-foreground/78">
          A porta de entrada gratuita do Instituto Liz: uma comunidade no WhatsApp com conteúdo semanal e os primeiros passos na Psicogenealogia.
        </p>
        <a
          href="https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-[52px] w-fit items-center gap-3 rounded-lg bg-background px-5 font-semibold text-deep transition-colors hover:bg-[hsl(var(--gold))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
        >
          <MessageCircle className="h-5 w-5" />
          Entrar na comunidade
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);
