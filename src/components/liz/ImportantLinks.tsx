import { ExternalLink } from "lucide-react";

type LinkItem = {
  title: string;
  desc: string;
  url: string;
  thumb: string;
  bg: string;
};

const links: LinkItem[] = [
  {
    title: "Canal Último Testemunho",
    desc: "Vídeos e revelações no YouTube",
    url: "https://www.youtube.com/channel/UCmNEX5iTolD3ZSCufuSBBvQ",
    thumb: "https://www.google.com/s2/favicons?sz=128&domain=youtube.com",
    bg: "from-[hsl(0_84%_55%)] to-[hsl(0_72%_42%)]",
  },
  {
    title: "Grupo Mapa do Tesouro",
    desc: "Comunidade no WhatsApp",
    url: "https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG",
    thumb: "https://www.google.com/s2/favicons?sz=128&domain=whatsapp.com",
    bg: "from-[hsl(142_70%_45%)] to-[hsl(150_75%_32%)]",
  },
  {
    title: "Jornada FIV",
    desc: "Fertilização & ancestralidade",
    url: "https://fivliz.lovable.app",
    thumb: "https://www.google.com/s2/favicons?sz=128&domain=fivliz.lovable.app",
    bg: "from-primary to-lilac",
  },
  {
    title: "Agendar Atendimento",
    desc: "Marque sua sessão com a equipe Liz",
    url: "https://atendimentolkb.lovable.app/",
    thumb: "https://www.google.com/s2/favicons?sz=128&domain=atendimentolkb.lovable.app",
    bg: "from-primary to-lilac",
  },
  {
    title: "Psico para Consteladores",
    desc: "Formação avançada em Psicogenealogia",
    url: "https://constelacaoliz.lovable.app",
    thumb: "https://www.google.com/s2/favicons?sz=128&domain=constelacaoliz.lovable.app",
    bg: "from-deep to-[hsl(264_70%_18%)]",
  },
  {
    title: "Afilie-se ao LIZ!",
    desc: "Programa de afiliados Hotmart",
    url: "https://affiliate.hotmart.com/affiliate-recruiting/view/7027P97660754",
    thumb: "https://www.google.com/s2/favicons?sz=128&domain=hotmart.com",
    bg: "from-[hsl(20_95%_55%)] to-[hsl(14_88%_45%)]",
  },
  {
    title: "Códigos Secretos dos Evangelhos",
    desc: "Curso exclusivo na Hotmart",
    url: "https://pay.hotmart.com/M101773591L?off=vrz5f1yw",
    thumb: "https://www.google.com/s2/favicons?sz=128&domain=hotmart.com",
    bg: "from-[hsl(28_95%_58%)] to-[hsl(18_90%_48%)]",
  },
  {
    title: "Info: Formações",
    desc: "Tire suas dúvidas no WhatsApp",
    url: "https://wa.me/5544991318081?text=Quero%20saber%20informa%C3%A7%C3%B5es%20sobre%20as%20forma%C3%A7%C3%B5es%20de%20Psicogenealogia",
    thumb: "https://www.google.com/s2/favicons?sz=128&domain=whatsapp.com",
    bg: "from-rose to-lilac",
  },
];

export const ImportantLinks = () => (
  <section id="links-importantes" className="relative py-24 md:py-32">
    <div className="container mx-auto px-6 md:px-8">
      <div className="reveal text-center max-w-3xl mx-auto mb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
          Acesso rápido
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-deep font-semibold leading-tight">
          Links <span className="italic text-gradient">Importantes</span>
        </h2>
        <p className="mt-5 text-lg md:text-xl text-deep/70">
          Toque no botão desejado para abrir.
        </p>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {links.map((l, i) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${l.title} — abre em nova aba`}
            style={{ transitionDelay: `${i * 60}ms` }}
            className={`reveal group relative flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-gradient-to-r ${l.bg} text-white shadow-soft hover:shadow-elegant hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40`}
          >
            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white flex items-center justify-center overflow-hidden shadow-inner">
              <img
                src={l.thumb}
                alt=""
                loading="lazy"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-display font-semibold text-xl md:text-2xl leading-tight">
                {l.title}
              </h3>
              <p className="mt-1 text-sm md:text-base opacity-90 leading-snug">
                {l.desc}
              </p>
            </div>

            <ExternalLink className="shrink-0 w-6 h-6 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
        ))}
      </div>
    </div>
  </section>
);
