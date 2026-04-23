import { Youtube, MessageCircle, Sparkles, CalendarHeart, Compass, Megaphone, BookOpenCheck, GraduationCap, ArrowUpRight } from "lucide-react";

type LinkItem = {
  title: string;
  desc?: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  className: string;
  style: string;
};

const links: LinkItem[] = [
  {
    title: "Canal Último Testemunho",
    desc: "Vídeos e revelações no YouTube",
    url: "https://www.youtube.com/channel/UCmNEX5iTolD3ZSCufuSBBvQ",
    icon: Youtube,
    className: "sm:col-span-2 sm:row-span-2 min-h-[260px]",
    style: "bg-gradient-to-br from-[hsl(0_84%_55%)] to-[hsl(0_72%_42%)] text-white",
  },
  {
    title: "Grupo Mapa do Tesouro",
    desc: "Comunidade no WhatsApp",
    url: "https://chat.whatsapp.com/J2xsMF9nqQTBKw1pc28uxG",
    icon: MessageCircle,
    className: "sm:col-span-2",
    style: "bg-gradient-to-br from-[hsl(142_70%_45%)] to-[hsl(150_75%_32%)] text-white",
  },
  {
    title: "Jornada FIV",
    desc: "Fertilização & ancestralidade",
    url: "https://fivliz.lovable.app",
    icon: Sparkles,
    className: "",
    style: "bg-gradient-to-br from-primary to-lilac text-primary-foreground",
  },
  {
    title: "Agendar Atendimento",
    desc: "Marque sua sessão",
    url: "https://atendimentolkb.lovable.app/",
    icon: CalendarHeart,
    className: "",
    style: "bg-gradient-to-br from-primary to-lilac text-primary-foreground",
  },
  {
    title: "Psico para Consteladores",
    desc: "Formação avançada",
    url: "https://constelacaoliz.lovable.app",
    icon: Compass,
    className: "sm:row-span-2 min-h-[260px]",
    style: "bg-gradient-to-br from-deep to-[hsl(264_70%_18%)] text-deep-foreground",
  },
  {
    title: "Afilie-se ao LIZ!",
    desc: "Programa de afiliados Hotmart",
    url: "https://affiliate.hotmart.com/affiliate-recruiting/view/7027P97660754",
    icon: Megaphone,
    className: "sm:col-span-2",
    style: "bg-gradient-to-br from-[hsl(20_95%_55%)] to-[hsl(14_88%_45%)] text-white",
  },
  {
    title: "Códigos Secretos dos Evangelhos",
    desc: "Curso exclusivo na Hotmart",
    url: "https://pay.hotmart.com/M101773591L?off=vrz5f1yw",
    icon: BookOpenCheck,
    className: "sm:col-span-2",
    style: "bg-gradient-to-br from-[hsl(28_95%_58%)] to-[hsl(18_90%_48%)] text-white",
  },
  {
    title: "Info: Formações",
    desc: "Tire suas dúvidas no WhatsApp",
    url: "https://wa.me/5544991318081?text=Quero%20saber%20informa%C3%A7%C3%B5es%20sobre%20as%20forma%C3%A7%C3%B5es%20de%20Psicogenealogia",
    icon: GraduationCap,
    className: "sm:col-span-2",
    style: "bg-gradient-to-br from-rose to-lilac text-primary-foreground",
  },
];

export const ImportantLinks = () => (
  <section id="links-importantes" className="relative py-24 md:py-32">
    <div className="container mx-auto px-6 md:px-8">
      <div className="reveal text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
          Acesso rápido
        </div>
        <h2 className="font-display text-4xl md:text-6xl text-deep font-semibold leading-tight">
          Links <span className="italic text-gradient">Importantes</span>
        </h2>
        <p className="mt-5 text-lg text-deep/70">
          Tudo que você precisa, a um toque de distância.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] gap-4 md:gap-5 max-w-6xl mx-auto">
        {links.map((l, i) => {
          const Icon = l.icon;
          return (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${l.title} — abre em nova aba`}
              style={{ borderRadius: "20px", transitionDelay: `${i * 50}ms` }}
              className={`reveal group relative overflow-hidden p-5 md:p-6 flex flex-col justify-between shadow-soft hover:shadow-elegant hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${l.style} ${l.className}`}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-white/15 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex items-start justify-between">
                <span className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </span>
                <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300" />
              </div>

              <div className="relative">
                <h3 className="font-display font-semibold leading-tight text-lg md:text-xl">
                  {l.title}
                </h3>
                {l.desc && (
                  <p className="mt-1.5 text-sm opacity-85 leading-snug">{l.desc}</p>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);
