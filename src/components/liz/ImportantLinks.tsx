import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookMarked,
  BookOpen,
  Building2,
  CalendarDays,
  Clock3,
  GraduationCap,
  Mail,
  MessageCircle,
  Network,
  Play,
  ScrollText,
  Sprout,
  TreePine,
  Youtube,
} from "lucide-react";
import booksImg from "@/assets/livros.webp";
import leticiaPortraitImg from "@/assets/leticia-baccin-2026.webp";
import leticiaYoutubeImg from "@/assets/leticia-youtube.webp";
import salaVisitasImg from "@/assets/sala-visitas.webp";
import { handleImageError } from "@/lib/image-fallback";

const ANAPAULA_WHATSAPP = "https://wa.me/5544991318081";
const LETICIA_WHATSAPP =
  "https://wa.me/5548996299166?text=Quero%20agendar%20atendimento%20com%20Let%C3%ADcia%20Baccin";
const CORPORATE_WHATSAPP =
  "https://wa.me/5548996299166?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20para%20contratar%20Let%C3%ADcia%20Baccin%20para%20palestra%20em%20evento%20corporativo";
const GEOVANNA_WHATSAPP =
  "https://wa.me/5548991618458?text=Quero%20receber%20a%20agenda%20atualizada%20de%20cursos%2C%20palestras%20e%20eventos%20e%20informa%C3%A7%C3%B5es%20para%20inscri%C3%A7%C3%A3o%20no%20pr%C3%B3ximo%20congresso";
const BOOK_CLUB_URL =
  "https://hotmart.com/pt-br/marketplace/produtos/clube-do-livro-de-psicogenealogia-com-leticia-kuchockowolec-baccin/H101221528D";

const whatsappMessage = (message: string) =>
  ANAPAULA_WHATSAPP + "?text=" + encodeURIComponent(message);

const courses = [
  {
    title: "Formação em Psicogenealogia",
    description: "Formação completa para compreender o inconsciente familiar e aplicar a leitura do genossociograma.",
    workload: "25h de encontros ao vivo publicados",
    detail: "Carga horária completa confirmada antes da matrícula · acesso vitalício",
    url: "https://formacaopsico.lovable.app/",
    cta: "Conhecer a formação",
    destination: "Abrir página da formação",
    icon: GraduationCap,
    image: leticiaPortraitImg,
  },
  {
    title: "Psicogenealogia para Todos",
    description: "O ponto de partida para conhecer a própria história e os padrões herdados da família.",
    workload: "Formato introdutório · carga horária reduzida",
    detail: "A equipe informa a carga horária vigente e a próxima turma",
    url: whatsappMessage("Quero conhecer o curso Psicogenealogia para Todos e confirmar a carga horária."),
    cta: "Pedir informações",
    destination: "Conversar pelo WhatsApp",
    icon: Sprout,
    image: salaVisitasImg,
  },
  {
    title: "Psicogenealogia na Prática",
    description: "Conteúdo gravado e orientação para participar das próximas aulas ao vivo com Letícia Baccin.",
    workload: "Aulas gravadas + encontros ao vivo",
    detail: "Carga horária e calendário confirmados pela equipe",
    url: "https://hotmart.com/pt-br/marketplace/produtos/psicogenealogia-basica/O97660733Q",
    cta: "Ver o curso",
    destination: "Abrir na Hotmart",
    icon: Network,
    image: leticiaYoutubeImg,
  },
  {
    title: "Monte sua Árvore Comigo",
    description: "Uma experiência guiada para organizar informações, vínculos e repetições da sua árvore genealógica.",
    workload: "Curso guiado",
    detail: "Carga horária e próxima edição confirmadas pela equipe",
    url: whatsappMessage("Quero informações sobre o curso Monte sua Árvore Comigo e sua carga horária."),
    cta: "Pedir informações",
    destination: "Conversar pelo WhatsApp",
    icon: TreePine,
    image: booksImg,
  },
];

const clubBooks = [
  {
    title: "Meus Antepassados",
    author: "Anne Ancelin Schützenberger",
    detail: "Estudo individual disponível na Hotmart",
    url: "https://hotmart.com/pt-br/marketplace/produtos/estudo-de-psicogenealogia-sobre-o-livro-meus-antepassados-de-anne-ancelin-schutzenberger/P103026810V",
    destination: "Abrir na Hotmart",
  },
  {
    title: "Sair do Duelo",
    author: "Anne Ancelin Schützenberger",
    detail: "Estudo individual disponível na Hotmart",
    url: "https://hotmart.com/pt-br/marketplace/produtos/leitura-do-livro-salir-del-duelo-de-anne-ancelin-schutzenberger/L104618768X",
    destination: "Abrir na Hotmart",
  },
  {
    title: "Segredos Familiares",
    author: "Diana Paris",
    detail: "Leitura finalizada · solicite disponibilidade",
    url: whatsappMessage("Quero adquirir o estudo de Psicogenealogia sobre o livro Segredos Familiares, de Diana Paris."),
    destination: "Pedir pelo WhatsApp",
  },
];

const paths = [
  {
    title: "Cabalá aplicada à Psicogenealogia",
    description: "Aprofunde a aplicação prática da Cabalá no cotidiano e na leitura da história familiar.",
    note: "Requer Psicogenealogia para Todos",
    url: whatsappMessage("Quero começar pelo pré-requisito Psicogenealogia para Todos para depois cursar Cabalá aplicada à Psicogenealogia."),
    cta: "Começar pelo pré-requisito",
    destination: "WhatsApp",
    icon: ScrollText,
  },
  {
    title: "Atendimento com Letícia Baccin",
    description: "Agende um atendimento individual diretamente pelo WhatsApp.",
    url: LETICIA_WHATSAPP,
    cta: "Agendar atendimento",
    destination: "WhatsApp",
    icon: MessageCircle,
  },
  {
    title: "Agenda, palestras e congressos",
    description: "Geovanna atualiza a agenda de cursos, eventos e palestras e informa como se inscrever no próximo congresso.",
    url: GEOVANNA_WHATSAPP,
    cta: "Consultar agenda e inscrições",
    destination: "WhatsApp",
    icon: CalendarDays,
  },
  {
    title: "Canal Psicogenealogia Liz",
    description: "Aulas e conversas gratuitas para compreender sua história familiar.",
    url: "https://youtube.com/@psicogenealogializ?si=hz8qqaD2TmOb_Q4n",
    cta: "Assistir no YouTube",
    destination: "YouTube",
    icon: Youtube,
  },
  {
    title: "Fale conosco",
    description: "Fale com Anapaula sobre cursos, inscrições e a jornada Liz.",
    url: whatsappMessage("Olá, Anapaula. Quero informações sobre o Instituto LIZ."),
    cta: "Conversar com Anapaula",
    destination: "WhatsApp",
    icon: Mail,
  },
  {
    title: "Contrate Letícia Baccin",
    description: "Capacitações e palestras sobre promoção de saúde mental nas empresas.",
    url: CORPORATE_WHATSAPP,
    cta: "Solicitar proposta",
    destination: "WhatsApp",
    icon: Building2,
  },
  {
    title: "Canal O Último Testemunho",
    description: "Vídeos, relatos e reflexões no segundo canal de Letícia no YouTube.",
    url: "https://www.youtube.com/channel/UCmNEX5iTolD3ZSCufuSBBvQ",
    cta: "Conhecer o canal",
    destination: "YouTube",
    icon: Play,
  },
];

const ActionLink = ({ url, children, icon: Icon = ArrowUpRight, destination = "Abrir link" }: { url: string; children: React.ReactNode; icon?: LucideIcon; destination?: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex min-h-[52px] items-center gap-3 rounded-lg bg-primary px-4 font-semibold text-primary-foreground transition-colors hover:bg-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
  >
    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-foreground/14" aria-hidden="true"><Icon className="h-4 w-4" /></span>
    <span><span className="block">{children}</span><span className="block text-xs font-medium text-primary-foreground/72">{destination}</span></span>
    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);

export const ImportantLinks = () => (
  <section id="bio">
    <div className="bg-deep text-primary-foreground">
      <div className="reveal mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <div className="grid content-start gap-7">
          <p className="font-display text-2xl font-bold text-[hsl(var(--gold))]">Letícia Baccin</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/62">Fundadora do Instituto Liz, docente internacional, autora e palestrante TEDx.</p>
          <figure className="relative hidden aspect-[4/5] max-w-xs overflow-hidden border border-primary-foreground/18 lg:block">
            <img src={leticiaPortraitImg} alt="Letícia Baccin, fundadora do Instituto Liz" loading="lazy" onError={handleImageError} className="absolute inset-0 h-full w-full object-cover object-top" />
          </figure>
        </div>
        <div>
          <h2 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.02] md:text-6xl">
            Das leis às histórias familiares: uma trajetória dedicada a compreender o que nos antecede.
          </h2>
          <div className="mt-8 max-w-[72ch] space-y-4 text-base leading-relaxed text-primary-foreground/82 md:text-lg">
            <p>Letícia Kuchockowolec Baccin atuou por 25 anos como advogada e foi sócia e cofundadora de um dos maiores escritórios de advocacia do Brasil. Hoje, é fundadora do Instituto Liz e da Escola Liz.</p>
            <p>É pós-graduada em Parapsicologia Clínica, possui formação em Neurociências e aprofunda seus estudos em Cabalá. Une histórias reais, ciência, espiritualidade e comportamento humano em formações no Brasil, em Portugal e em países de língua portuguesa.</p>
            <p>Autora de 12 obras, leva essa pesquisa a livros, cursos e encontros internacionais — uma trajetória que transforma experiência em caminhos de compreensão acessíveis a diferentes públicos.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="reveal grid gap-10 xl:grid-cols-[0.34fr_1fr]">
        <h2 className="font-display text-4xl font-extrabold leading-none text-deep md:text-6xl">Cursos para diferentes profundidades.</h2>
        <div className="border-t border-deep/20">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
            <a key={course.title} href={course.url} target="_blank" rel="noopener noreferrer" className="group grid gap-5 border-b border-deep/20 py-6 transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:grid-cols-[9rem_1fr_1.15fr] md:items-center md:gap-8 md:px-3">
              <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
                <img src={course.image} alt="" loading="lazy" onError={handleImageError} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" aria-hidden="true" />
                <span className="absolute bottom-2 left-2 flex h-9 w-9 items-center justify-center rounded-md bg-background text-primary" aria-hidden="true"><Icon className="h-5 w-5" /></span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-deep">{course.title}</h3>
                <p className="mt-3 leading-relaxed text-deep/66">{course.description}</p>
              </div>
              <div className="flex flex-col justify-between gap-5 md:items-start">
                <div className="flex gap-3 text-sm leading-relaxed text-deep/68">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div><strong className="block font-semibold text-deep">{course.workload}</strong>{course.detail}</div>
                </div>
                <span className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 font-semibold text-primary-foreground transition-colors group-hover:bg-deep">
                  <span><span className="block">{course.cta}</span><span className="block text-xs font-medium text-primary-foreground/72">{course.destination}</span></span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          )})}
        </div>
      </div>
    </div>

    <div className="bg-secondary">
      <div className="reveal mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 md:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
        <div>
          <BookOpen className="h-7 w-7 text-primary" />
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-none text-deep md:text-5xl">Clube do Livro</h2>
          <p className="mt-5 max-w-[48ch] leading-relaxed text-deep/68">Encontros semanais ao vivo, às quartas-feiras, das 8h às 9h. As reuniões são gravadas e ficam disponíveis na Hotmart enquanto a assinatura estiver ativa.</p>
          <div className="mt-6"><ActionLink url={BOOK_CLUB_URL} icon={BookOpen} destination="Abrir inscrição na Hotmart">Fazer minha inscrição</ActionLink></div>
          <div className="relative mt-9 aspect-[16/10] max-w-md overflow-hidden">
            <img src={booksImg} alt="Livros e estudos do Instituto Liz" loading="lazy" onError={handleImageError} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
        <div className="border-t border-deep/20">
          {clubBooks.map((book) => (
            <a key={book.title} href={book.url} target="_blank" rel="noopener noreferrer" className="group grid gap-4 border-b border-deep/20 py-6 transition-colors hover:bg-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:px-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground" aria-hidden="true"><BookMarked className="h-5 w-5" /></span>
              <div>
                <h3 className="font-display text-xl font-bold">{book.title}</h3>
                <p className="mt-1 text-sm text-deep/72">{book.author} · {book.detail}</p>
                <p className="mt-2 text-xs font-semibold text-primary">{book.destination}</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/30 text-primary" aria-hidden="true"><ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="reveal grid gap-10 xl:grid-cols-[0.34fr_1fr]">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-none text-deep md:text-6xl">Outros caminhos</h2>
          <p className="mt-5 max-w-[40ch] leading-relaxed text-deep/72">Atendimento, agenda, canais e contato com as pessoas certas.</p>
        </div>
        <div className="border-t border-deep/20">
          {paths.map((item) => {
            const Icon = item.icon;
            return (
            <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="group grid gap-4 border-b border-deep/20 py-6 transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:grid-cols-[3.5rem_0.8fr_1.2fr_auto] md:items-center md:gap-6 md:px-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground" aria-hidden="true"><Icon className="h-5 w-5" /></span>
              <div>
                <h3 className="font-display text-xl font-bold text-deep">{item.title}</h3>
                {item.note && <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-primary">{item.note}</p>}
              </div>
              <div>
                <p className="leading-relaxed text-deep/66">{item.description}</p>
                <p className="mt-3 text-sm font-semibold text-primary">{item.cta}</p>
                <p className="mt-1 text-xs font-medium text-deep/64">Abre no {item.destination}</p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/30 text-primary" aria-hidden="true"><ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </a>
          )})}
        </div>
      </div>
    </div>
  </section>
);
