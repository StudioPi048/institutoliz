import leticia from "@/assets/leticia.webp";
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Radio,
  Sparkles,
  Youtube,
  type LucideIcon,
} from "lucide-react";

const ANAPAULA_WHATSAPP = "https://wa.me/5544991318081";
const LETICIA_WHATSAPP =
  "https://wa.me/5548996299166?text=Quero%20agendar%20atendimento%20com%20Let%C3%ADcia%20Baccin";
const CORPORATE_WHATSAPP =
  "https://wa.me/5548996299166?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20para%20contratar%20Let%C3%ADcia%20Baccin%20para%20palestra%20em%20evento%20corporativo";
const GEOVANNA_WHATSAPP =
  "https://wa.me/5548991618458?text=Quero%20receber%20a%20agenda%20atualizada%20de%20palestras%20e%20congressos%20com%20Let%C3%ADcia%20Baccin";
const BOOK_CLUB_URL =
  "https://hotmart.com/pt-br/marketplace/produtos/clube-do-livro-de-psicogenealogia-com-leticia-kuchockowolec-baccin/H101221528D";

const whatsappMessage = (message: string) =>
  ANAPAULA_WHATSAPP + "?text=" + encodeURIComponent(message);

type Course = {
  title: string;
  description: string;
  workload: string;
  detail: string;
  url: string;
  cta: string;
};

const courses: Course[] = [
  {
    title: "Formação em Psicogenealogia",
    description:
      "Formação completa para compreender o inconsciente familiar e aplicar a leitura do genossociograma.",
    workload: "25h de encontros ao vivo publicados",
    detail: "Carga horária completa confirmada antes da matrícula · acesso vitalício",
    url: "https://formacaopsico.lovable.app/",
    cta: "Conhecer a formação",
  },
  {
    title: "Psicogenealogia para Todos",
    description:
      "O ponto de partida para quem deseja conhecer a própria história e os padrões herdados da família.",
    workload: "Formato introdutório · carga horária reduzida",
    detail: "A equipe informa a carga horária vigente e a próxima turma",
    url: whatsappMessage(
      "Quero conhecer o curso Psicogenealogia para Todos e confirmar a carga horária.",
    ),
    cta: "Pedir informações",
  },
  {
    title: "Psicogenealogia na Prática",
    description:
      "Conteúdo gravado e orientação para participar das próximas aulas ao vivo com Letícia Baccin.",
    workload: "Aulas gravadas + encontros ao vivo",
    detail: "Carga horária e calendário confirmados pela equipe",
    url: "https://hotmart.com/pt-br/marketplace/produtos/psicogenealogia-basica/O97660733Q",
    cta: "Ver o curso",
  },
  {
    title: "Monte sua Árvore Comigo",
    description:
      "Uma experiência guiada para organizar informações, vínculos e repetições da sua árvore genealógica.",
    workload: "Curso guiado",
    detail: "Carga horária e próxima edição confirmadas pela equipe",
    url: whatsappMessage(
      "Quero informações sobre o curso Monte sua Árvore Comigo e sua carga horária.",
    ),
    cta: "Pedir informações",
  },
];

const clubBooks = [
  {
    title: "Meus Antepassados — Anne Ancelin Schützenberger",
    detail: "Estudo individual disponível na Hotmart",
    url: "https://hotmart.com/pt-br/marketplace/produtos/estudo-de-psicogenealogia-sobre-o-livro-meus-antepassados-de-anne-ancelin-schutzenberger/P103026810V",
  },
  {
    title: "Sair do Duelo — Anne Ancelin Schützenberger",
    detail: "Estudo individual disponível na Hotmart",
    url: "https://hotmart.com/pt-br/marketplace/produtos/leitura-do-livro-salir-del-duelo-de-anne-ancelin-schutzenberger/L104618768X",
  },
  {
    title: "Segredos Familiares — Diana Paris",
    detail: "Leitura finalizada · solicite disponibilidade",
    url: whatsappMessage(
      "Quero adquirir o estudo de Psicogenealogia sobre o livro Segredos Familiares, de Diana Paris.",
    ),
  },
];

type PathItem = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  cta: string;
  note?: string;
};

const paths: PathItem[] = [
  {
    number: "03",
    title: "Cabalá aplicada à Psicogenealogia",
    description:
      "Aprofunde a aplicação prática da Cabalá no cotidiano e na leitura da história familiar.",
    icon: Sparkles,
    url: whatsappMessage(
      "Quero começar pelo pré-requisito Psicogenealogia para Todos para depois cursar Cabalá aplicada à Psicogenealogia.",
    ),
    cta: "Começar pelo pré-requisito",
    note: "Pré-requisito: Psicogenealogia para Todos",
  },
  {
    number: "04",
    title: "Atendimento com Letícia Baccin",
    description:
      "Agende um atendimento individual diretamente pelo WhatsApp.",
    icon: HeartHandshake,
    url: LETICIA_WHATSAPP,
    cta: "Agendar atendimento",
  },
  {
    number: "05",
    title: "Palestras e congressos",
    description:
      "Fale com Geovanna para saber onde Letícia estará nos próximos meses.",
    icon: CalendarDays,
    url: GEOVANNA_WHATSAPP,
    cta: "Consultar com Geovanna",
  },
  {
    number: "06",
    title: "Canal Psicogenealogia LIZ",
    description:
      "Aulas, conversas e conteúdos gratuitos para compreender sua história familiar.",
    icon: Youtube,
    url: "https://youtube.com/@psicogenealogializ?si=hz8qqaD2TmOb_Q4n",
    cta: "Assistir no YouTube",
  },
  {
    number: "07",
    title: "Fale conosco",
    description:
      "Fale com Anapaula para tirar dúvidas sobre cursos, inscrições e a jornada LIZ.",
    icon: MessageCircle,
    url: whatsappMessage("Olá, Anapaula. Quero informações sobre o Instituto LIZ."),
    cta: "Conversar com Anapaula",
  },
  {
    number: "08",
    title: "Contrate Letícia Baccin",
    description:
      "Capacitações e palestras sobre promoção de saúde mental nas empresas.",
    icon: BriefcaseBusiness,
    url: CORPORATE_WHATSAPP,
    cta: "Solicitar proposta",
  },
  {
    number: "09",
    title: "Canal O Último Testemunho",
    description:
      "Vídeos, relatos e reflexões no segundo canal de Letícia no YouTube.",
    icon: Radio,
    url: "https://www.youtube.com/channel/UCmNEX5iTolD3ZSCufuSBBvQ",
    cta: "Conhecer o canal",
  },
];

const ActionLink = ({ url, children }: { url: string; children: React.ReactNode }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group/link inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-primary transition-colors hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
  >
    {children}
    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
  </a>
);

export const ImportantLinks = () => (
  <section id="bio" className="relative overflow-hidden py-24 md:py-32">
    <div className="absolute left-0 top-48 h-96 w-96 -translate-x-1/2 rounded-full bg-lilac/15 blur-3xl" />
    <div className="container relative mx-auto px-6 md:px-8">
      <div className="reveal mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rotate-2 rounded-[2.25rem] border border-primary/20" />
          <img
            src={leticia}
            alt="Letícia Kuchockowolec Baccin, fundadora do Instituto LIZ"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top shadow-elegant"
          />
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl bg-deep px-5 py-4 text-primary-foreground shadow-elegant md:left-8 md:right-auto md:max-w-xs">
            <p className="font-display text-lg italic leading-snug">
              “A família é a escola da alma.”
            </p>
          </div>
        </div>

        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Bio · Letícia Baccin
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-deep md:text-6xl">
            Da leitura das leis à leitura das{" "}
            <span className="italic text-gradient">histórias familiares</span>
          </h2>
          <div className="mt-7 space-y-4 text-base leading-relaxed text-deep/75 md:text-lg">
            <p>
              Letícia Kuchockowolec Baccin atuou por 25 anos como advogada e foi
              sócia e cofundadora de um dos maiores escritórios de advocacia do Brasil.
              Hoje, é fundadora do Instituto LIZ e da Escola LIZ.
            </p>
            <p>
              Docente internacional de Psicogenealogia, conduz formações no Brasil,
              em Portugal e em países de língua portuguesa. É pós-graduada em
              Parapsicologia Clínica, possui formação em Neurociências e aprofunda seus
              estudos em Cabalá.
            </p>
            <p>
              Autora de 12 obras e palestrante TEDx, une histórias reais, ciência,
              espiritualidade e comportamento humano para ajudar cada pessoa a
              compreender seus frutos a partir de suas raízes.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              ["25 anos", "no Direito"],
              ["12 obras", "publicadas"],
              ["Internacional", "Brasil e Portugal"],
            ].map(([value, label]) => (
              <div key={value} className="border-l border-primary/25 pl-3 md:pl-4">
                <div className="font-display text-lg font-semibold text-deep md:text-2xl">
                  {value}
                </div>
                <div className="mt-1 text-xs leading-tight text-deep/60 md:text-sm">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="reveal mx-auto mb-12 mt-28 max-w-3xl text-center">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Escolha seu caminho
        </div>
        <h2 className="font-display text-4xl font-semibold leading-tight text-deep md:text-6xl">
          Comece pelo que sua história{" "}
          <span className="italic text-gradient">pede agora</span>
        </h2>
        <p className="mt-5 text-lg text-deep/70">
          Cursos, leituras, atendimentos e conteúdos para diferentes momentos da
          sua jornada.
        </p>
      </div>

      <article className="reveal mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-primary/20 bg-white/65 shadow-elegant backdrop-blur-xl">
        <div className="grid gap-8 bg-gradient-amethyst p-7 text-primary-foreground md:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
          <div>
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 font-display text-lg text-white">
                01
              </span>
              Cursos
            </div>
            <GraduationCap className="h-12 w-12 text-lilac" />
            <h3 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Psicogenealogia para cada momento
            </h3>
            <p className="mt-4 leading-relaxed text-white/80">
              Da primeira aproximação à formação completa, escolha a profundidade
              adequada para sua jornada.
            </p>
            <div className="mt-6 flex gap-2 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-relaxed text-white/85">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0" />
              <span>
                As cargas horárias vigentes são confirmadas pela equipe antes da
                matrícula.
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {courses.map((course) => (
              <div
                key={course.title}
                className="flex flex-col rounded-2xl bg-white p-5 text-deep shadow-soft"
              >
                <h4 className="font-display text-xl font-semibold leading-tight">
                  {course.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-deep/70">
                  {course.description}
                </p>
                <div className="mt-4 rounded-xl bg-secondary p-3">
                  <div className="flex items-start gap-2 text-sm font-semibold text-primary">
                    <Clock3 className="mt-0.5 h-4 w-4 shrink-0" />
                    {course.workload}
                  </div>
                  <p className="mt-1 pl-6 text-xs leading-relaxed text-deep/60">
                    {course.detail}
                  </p>
                </div>
                <div className="mt-auto pt-3">
                  <ActionLink url={course.url}>{course.cta}</ActionLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <article className="reveal mx-auto mt-6 grid max-w-6xl overflow-hidden rounded-[2rem] border border-primary/20 bg-white/65 shadow-soft backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-gradient-to-br from-rose/35 via-lilac/20 to-transparent p-7 md:p-10">
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-lg">
              02
            </span>
            Clube do Livro
          </div>
          <BookOpen className="h-11 w-11 text-primary" />
          <h3 className="mt-5 font-display text-3xl font-semibold text-deep md:text-4xl">
            Leia sua história em comunidade
          </h3>
          <p className="mt-4 leading-relaxed text-deep/70">
            Encontros semanais ao vivo, às quartas-feiras, das 8h às 9h. As
            reuniões são gravadas e permanecem disponíveis na Hotmart enquanto
            sua assinatura estiver ativa.
          </p>
          <div className="mt-5">
            <ActionLink url={BOOK_CLUB_URL}>Fazer minha inscrição</ActionLink>
          </div>
        </div>

        <div className="p-7 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Leituras já realizadas
          </p>
          <div className="mt-5 space-y-3">
            {clubBooks.map((book) => (
              <a
                key={book.title}
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-primary/15 bg-white px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="flex items-start gap-3 text-sm leading-relaxed text-deep md:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <span className="block font-medium">{book.title}</span>
                    <span className="mt-0.5 block text-xs text-deep/55">
                      {book.detail}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </article>

      <div className="mx-auto mt-6 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {paths.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              key={item.number}
              className="reveal group flex min-h-[310px] flex-col rounded-[1.75rem] border border-primary/15 bg-white/65 p-6 shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-elegant"
              style={{ transitionDelay: String(index * 55) + "ms" }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-primary/65">
                  {item.number}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-amethyst text-primary-foreground shadow-soft">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
              <h3 className="mt-7 font-display text-2xl font-semibold leading-tight text-deep">
                {item.title}
              </h3>
              {item.note && (
                <p className="mt-3 inline-flex w-fit rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">
                  {item.note}
                </p>
              )}
              <p className="mt-3 text-[15px] leading-relaxed text-deep/70">
                {item.description}
              </p>
              <div className="mt-auto pt-5">
                <ActionLink url={item.url}>{item.cta}</ActionLink>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
