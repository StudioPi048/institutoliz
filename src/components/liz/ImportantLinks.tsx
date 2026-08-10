import { ArrowUpRight, BookOpen, Clock3 } from "lucide-react";

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

const courses = [
  {
    title: "Formação em Psicogenealogia",
    description: "Formação completa para compreender o inconsciente familiar e aplicar a leitura do genossociograma.",
    workload: "25h de encontros ao vivo publicados",
    detail: "Carga horária completa confirmada antes da matrícula · acesso vitalício",
    url: "https://formacaopsico.lovable.app/",
    cta: "Conhecer a formação",
  },
  {
    title: "Psicogenealogia para Todos",
    description: "O ponto de partida para conhecer a própria história e os padrões herdados da família.",
    workload: "Formato introdutório · carga horária reduzida",
    detail: "A equipe informa a carga horária vigente e a próxima turma",
    url: whatsappMessage("Quero conhecer o curso Psicogenealogia para Todos e confirmar a carga horária."),
    cta: "Pedir informações",
  },
  {
    title: "Psicogenealogia na Prática",
    description: "Conteúdo gravado e orientação para participar das próximas aulas ao vivo com Letícia Baccin.",
    workload: "Aulas gravadas + encontros ao vivo",
    detail: "Carga horária e calendário confirmados pela equipe",
    url: "https://hotmart.com/pt-br/marketplace/produtos/psicogenealogia-basica/O97660733Q",
    cta: "Ver o curso",
  },
  {
    title: "Monte sua Árvore Comigo",
    description: "Uma experiência guiada para organizar informações, vínculos e repetições da sua árvore genealógica.",
    workload: "Curso guiado",
    detail: "Carga horária e próxima edição confirmadas pela equipe",
    url: whatsappMessage("Quero informações sobre o curso Monte sua Árvore Comigo e sua carga horária."),
    cta: "Pedir informações",
  },
];

const clubBooks = [
  {
    title: "Meus Antepassados",
    author: "Anne Ancelin Schützenberger",
    detail: "Estudo individual disponível na Hotmart",
    url: "https://hotmart.com/pt-br/marketplace/produtos/estudo-de-psicogenealogia-sobre-o-livro-meus-antepassados-de-anne-ancelin-schutzenberger/P103026810V",
  },
  {
    title: "Sair do Duelo",
    author: "Anne Ancelin Schützenberger",
    detail: "Estudo individual disponível na Hotmart",
    url: "https://hotmart.com/pt-br/marketplace/produtos/leitura-do-livro-salir-del-duelo-de-anne-ancelin-schutzenberger/L104618768X",
  },
  {
    title: "Segredos Familiares",
    author: "Diana Paris",
    detail: "Leitura finalizada · solicite disponibilidade",
    url: whatsappMessage("Quero adquirir o estudo de Psicogenealogia sobre o livro Segredos Familiares, de Diana Paris."),
  },
];

const paths = [
  {
    title: "Cabalá aplicada à Psicogenealogia",
    description: "Aprofunde a aplicação prática da Cabalá no cotidiano e na leitura da história familiar.",
    note: "Requer Psicogenealogia para Todos",
    url: whatsappMessage("Quero começar pelo pré-requisito Psicogenealogia para Todos para depois cursar Cabalá aplicada à Psicogenealogia."),
    cta: "Começar pelo pré-requisito",
  },
  {
    title: "Atendimento com Letícia Baccin",
    description: "Agende um atendimento individual diretamente pelo WhatsApp.",
    url: LETICIA_WHATSAPP,
    cta: "Agendar atendimento",
  },
  {
    title: "Palestras e congressos",
    description: "Fale com Geovanna para saber onde Letícia estará nos próximos meses.",
    url: GEOVANNA_WHATSAPP,
    cta: "Consultar com Geovanna",
  },
  {
    title: "Canal Psicogenealogia Liz",
    description: "Aulas e conversas gratuitas para compreender sua história familiar.",
    url: "https://youtube.com/@psicogenealogializ?si=hz8qqaD2TmOb_Q4n",
    cta: "Assistir no YouTube",
  },
  {
    title: "Fale conosco",
    description: "Fale com Anapaula sobre cursos, inscrições e a jornada Liz.",
    url: whatsappMessage("Olá, Anapaula. Quero informações sobre o Instituto LIZ."),
    cta: "Conversar com Anapaula",
  },
  {
    title: "Contrate Letícia Baccin",
    description: "Capacitações e palestras sobre promoção de saúde mental nas empresas.",
    url: CORPORATE_WHATSAPP,
    cta: "Solicitar proposta",
  },
  {
    title: "Canal O Último Testemunho",
    description: "Vídeos, relatos e reflexões no segundo canal de Letícia no YouTube.",
    url: "https://www.youtube.com/channel/UCmNEX5iTolD3ZSCufuSBBvQ",
    cta: "Conhecer o canal",
  },
];

const ActionLink = ({ url, children }: { url: string; children: React.ReactNode }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex min-h-11 items-center gap-2 rounded-md font-semibold text-primary transition-colors hover:text-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  >
    {children}
    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
);

export const ImportantLinks = () => (
  <section id="bio">
    <div className="bg-deep text-primary-foreground">
      <div className="reveal mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <div>
          <p className="font-display text-2xl font-bold text-[hsl(var(--gold))]">Letícia Baccin</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/62">Fundadora do Instituto Liz, docente internacional, autora e palestrante TEDx.</p>
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
      <div className="reveal grid gap-10 lg:grid-cols-[0.42fr_1fr]">
        <h2 className="font-display text-4xl font-extrabold leading-none text-deep md:text-6xl">Cursos para diferentes profundidades.</h2>
        <div className="border-t border-deep/20">
          {courses.map((course) => (
            <article key={course.title} className="grid gap-5 border-b border-deep/20 py-7 md:grid-cols-[1fr_1.25fr] md:gap-8">
              <div>
                <h3 className="font-display text-2xl font-bold text-deep">{course.title}</h3>
                <p className="mt-3 leading-relaxed text-deep/66">{course.description}</p>
              </div>
              <div className="flex flex-col justify-between gap-5 md:items-start">
                <div className="flex gap-3 text-sm leading-relaxed text-deep/68">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div><strong className="block font-semibold text-deep">{course.workload}</strong>{course.detail}</div>
                </div>
                <ActionLink url={course.url}>{course.cta}</ActionLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-secondary">
      <div className="reveal mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 md:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:px-12">
        <div>
          <BookOpen className="h-7 w-7 text-primary" />
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-none text-deep md:text-5xl">Clube do Livro</h2>
          <p className="mt-5 max-w-[48ch] leading-relaxed text-deep/68">Encontros semanais ao vivo, às quartas-feiras, das 8h às 9h. As reuniões são gravadas e ficam disponíveis na Hotmart enquanto a assinatura estiver ativa.</p>
          <div className="mt-6"><ActionLink url={BOOK_CLUB_URL}>Fazer minha inscrição</ActionLink></div>
        </div>
        <div className="border-t border-deep/20">
          {clubBooks.map((book) => (
            <a key={book.title} href={book.url} target="_blank" rel="noopener noreferrer" className="group grid gap-2 border-b border-deep/20 py-6 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:grid-cols-[1fr_auto]">
              <div>
                <h3 className="font-display text-xl font-bold">{book.title}</h3>
                <p className="mt-1 text-sm text-deep/72">{book.author} · {book.detail}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-12">
      <div className="reveal grid gap-10 lg:grid-cols-[0.42fr_1fr]">
        <div>
          <h2 className="font-display text-4xl font-extrabold leading-none text-deep md:text-6xl">Outros caminhos</h2>
          <p className="mt-5 max-w-[40ch] leading-relaxed text-deep/72">Atendimento, agenda, canais e contato com as pessoas certas.</p>
        </div>
        <div className="border-t border-deep/20">
          {paths.map((item) => (
            <article key={item.title} className="grid gap-4 border-b border-deep/20 py-6 md:grid-cols-[1fr_1.2fr] md:gap-8">
              <div>
                <h3 className="font-display text-xl font-bold text-deep">{item.title}</h3>
                {item.note && <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-primary">{item.note}</p>}
              </div>
              <div>
                <p className="leading-relaxed text-deep/66">{item.description}</p>
                <div className="mt-3"><ActionLink url={item.url}>{item.cta}</ActionLink></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
