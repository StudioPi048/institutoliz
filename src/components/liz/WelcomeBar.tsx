import banner from "@/assets/sala-visitas.png";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { handleImageError } from "@/lib/image-fallback";

export const WelcomeBar = () => (
  <section className="relative py-14 md:py-20">
    <div className="container mx-auto px-6 md:px-8 max-w-7xl">
      <div className="reveal relative rounded-3xl overflow-hidden shadow-elegant">
        <img
          src={banner}
          alt="Sala de Visitas — comunidade Instituto Liz"
          width={1600}
          height={400}
          loading="lazy"
          onError={handleImageError}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/90 via-deep/70 to-deep/30 md:to-transparent" />

        <div className="relative p-8 md:p-12 lg:p-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.3em] text-lilac font-semibold mb-3">
              Boas-vindas · 100% gratuito
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
              Sala de Visitas
            </h3>
            <p className="mt-4 text-primary-foreground/85 text-base md:text-lg max-w-md leading-relaxed">
              Sua porta de entrada no Instituto Liz. Comunidade no WhatsApp com
              acolhimento, conteúdo semanal e os primeiros passos na Psicogenealogia.
            </p>
            <a
              href="https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 bg-[#25D366] text-white rounded-full px-7 py-4 text-base md:text-lg font-semibold shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Entrar no WhatsApp
              <ArrowUpRight className="w-4 h-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </div>
  </section>
);
