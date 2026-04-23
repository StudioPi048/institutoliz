import { MessageCircle, Sparkles } from "lucide-react";

export const WelcomeBar = () => (
  <section className="relative py-10 md:py-14">
    <div className="container mx-auto px-6 md:px-8">
      <div className="reveal glass rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft border-primary/20">
        <div className="flex items-start md:items-center gap-4 md:gap-5 text-center md:text-left flex-col md:flex-row">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-rose flex items-center justify-center shadow-glow">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-1">
              Boas-vindas · Gratuito
            </div>
            <h3 className="font-display text-xl md:text-2xl text-deep font-semibold">
              Sala de Visitas — sua porta de entrada no Instituto Liz
            </h3>
            <p className="text-deep/70 mt-1 text-sm md:text-base">
              Comunidade no WhatsApp com acolhimento, conteúdo e primeiros passos na Psicogenealogia.
            </p>
          </div>
        </div>
        <a
          href="https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-3 bg-[#25D366] text-white rounded-full px-6 py-3.5 text-base font-semibold shadow-soft hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5"
        >
          <MessageCircle className="w-5 h-5" />
          Entrar agora
        </a>
      </div>
    </div>
  </section>
);
