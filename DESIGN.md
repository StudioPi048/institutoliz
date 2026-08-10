---
name: Instituto Liz
description: Um campo editorial, humano e sereno para compreender histórias familiares e abrir caminhos.
colors:
  amethyst: "hsl(270 44% 44%)"
  deep-violet: "hsl(264 62% 27%)"
  lilac: "hsl(273 41% 62%)"
  soft-rose: "hsl(316 35% 63%)"
  relational-gold: "hsl(43 52% 54%)"
  warm-white: "hsl(285 24% 98%)"
  pure-white: "hsl(0 0% 100%)"
  ink-violet: "hsl(266 52% 16%)"
  soft-lilac-surface: "hsl(278 28% 93%)"
  muted-lilac-surface: "hsl(282 17% 91%)"
  soft-rose-surface: "hsl(316 30% 91%)"
  violet-divider: "hsl(270 21% 78%)"
typography:
  display:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "clamp(3rem, 6vw, 5.8rem)"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 96"
  headline:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 96"
  title:
    fontFamily: "Anybody, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 96"
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  gutter-mobile: "24px"
  gutter-tablet: "32px"
  gutter-desktop: "48px"
  section: "80px"
  section-wide: "112px"
components:
  button-primary:
    backgroundColor: "{colors.amethyst}"
    textColor: "{colors.warm-white}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.deep-violet}"
    textColor: "{colors.warm-white}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
    height: "52px"
  button-dark:
    backgroundColor: "{colors.deep-violet}"
    textColor: "{colors.warm-white}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
    height: "52px"
  button-light:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.ink-violet}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "16px 20px"
    height: "52px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink-violet}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "16px 24px"
    height: "52px"
---

# Design System: Instituto Liz

## Overview

**Creative North Star: "Campo de Relações"**

O sistema visual apresenta o Instituto Liz como um campo vivo de histórias, vínculos e escolhas. A página tem presença editorial e humana: grandes títulos conduzem a leitura, fotografias reais de Letícia sustentam a autoridade, e superfícies chapadas de ametista, violeta, lilás e rosa suave organizam os diferentes ritmos sem transformar o conteúdo em um catálogo impessoal.

A experiência é serena, mas não etérea. O branco quente oferece respiro, o dourado cria continuidade entre partes e o contraste violeta mantém a leitura adulta e precisa. A geometria nasce do símbolo do Instituto e de relações entre linhas, colunas e blocos assimétricos; ela nunca depende de ornamento genérico, efeitos de vidro ou profundidade cenográfica.

O conteúdo permanece visível e legível em todos os estados. A única animação autoral é o traçado da linha relacional dourada; demais mudanças de estado são transições discretas de cor ou pequenos deslocamentos de ícones.

Esta expressão foi consolidada a partir do seed FORM `625b6959`; novas superfícies devem preservar seu campo editorial e relacional sem copiar mecanicamente a composição da home.

**Key Characteristics:**

- Editorial, humano e sereno, com hierarquia tipográfica firme.
- Fotografia real como evidência de autoria e presença.
- Blocos cromáticos chapados e módulos assimétricos.
- Dourado usado como fio relacional, não como decoração abundante.
- Conteúdo sempre visível; movimento reduzido preserva integralmente a compreensão.

**The Continuous Field Rule.** A composição deve parecer uma sequência de relações, não uma coleção de peças autônomas ou cartões intercambiáveis.

## Colors

A paleta é quente dentro do espectro violeta: ametista e violeta profundo sustentam a identidade, lilás e rosa suavizam a jornada, branco abre espaço e dourado marca conexões.

### Primary

- **Ametista Institucional** (`colors.amethyst`): cor de marca para ações principais, seções de alta presença e palavras-chave.
- **Violeta de Profundidade** (`colors.deep-violet`): base escura para autoridade, rodapé, biografia e contraste de alto impacto.

### Secondary

- **Lilás Vivo** (`colors.lilac`): apoio cromático expressivo e referência à luz ametista.
- **Lilás de Respiro** (`colors.soft-lilac-surface`): superfície editorial para alternar capítulos sem criar caixas flutuantes.
- **Lilás Silencioso** (`colors.muted-lilac-surface`): estados e superfícies discretas de apoio.

### Tertiary

- **Rosa de Cuidado** (`colors.soft-rose`): acento humano e acolhedor em composições que pedem calor.
- **Rosa de Fundo** (`colors.soft-rose-surface`): superfície suave, usada com parcimônia.
- **Ouro Relacional** (`colors.relational-gold`): linha contínua, números de sequência, pequenos marcos e focos especiais.

### Neutral

- **Branco Acolhedor** (`colors.warm-white`): fundo principal e texto claro sobre violeta.
- **Branco Puro** (`colors.pure-white`): superfície neutra quando uma separação tonal mínima é necessária.
- **Tinta Violeta** (`colors.ink-violet`): texto principal; substitui qualquer preto azulado ou azul-marinho.
- **Divisor Violeta** (`colors.violet-divider`): bordas finas e separadores estruturais.

### Named Rules

**The No Navy Rule.** Azul-marinho não pertence à identidade do Instituto Liz e não deve ser introduzido como substituto de violeta profundo, tinta ou neutral escuro.

**The Flat Color Rule.** Cores aparecem em campos chapados. Não usar gradientes decorativos, halos, mesh gradients ou misturas atmosféricas.

**The Golden Thread Rule.** O dourado é raro e relacional: conecta, numera ou sinaliza. Ele não preenche grandes superfícies nem disputa protagonismo com a ametista.

## Typography

**Display Font:** Anybody (com `system-ui` e `sans-serif` como fallback)

**Body Font:** Public Sans (com `system-ui` e `sans-serif` como fallback)

**Campaign Display Font:** Cormorant Garamond (com `Georgia` e `serif` como fallback), restrita ao nome e à frase-manifesto do Congresso III Tempus.

**Character:** Anybody traz uma voz contemporânea, autoral e acolhedora aos títulos; Public Sans mantém textos longos, navegação e ações diretos e acessíveis. A combinação evita tanto a solenidade mística quanto a frieza corporativa.

### Hierarchy

- **Display** (extrabold, fluido de 3rem a 5.8rem, altura de linha 0.96): reservado ao enunciado principal da página; pode destacar uma segunda ideia em ametista.
- **Headline** (extrabold, de 2.25rem a 3.75rem, altura de linha 1–1.02): abre grandes capítulos e deve permanecer curto, com quebras equilibradas.
- **Title** (bold, 1.25rem–1.5rem, altura de linha 1.25): nomeia cursos, caminhos, etapas e itens do diretório editorial.
- **Body** (regular, 1rem–1.125rem, altura de linha relaxada): explica contexto e próximos passos; manter linhas normalmente entre 40 e 72 caracteres.
- **Label** (semibold, 0.75rem–0.875rem): informa navegação, sequência, detalhes operacionais e microcopy; caixa alta e espaçamento maior só aparecem em notas curtas e no descritor do logotipo.
- **Campaign Display** (medium ou semibold, 3rem–6rem, altura de linha 1): exceção local para “Tempus” e sua frase-manifesto; nunca substitui a hierarquia institucional.

### Named Rules

**The Human Authority Rule.** Títulos são grandes e firmes, mas o corpo nunca é reduzido para parecer sofisticado; clareza e leitura adulta têm prioridade.

**The Two-Voice Rule.** Anybody fala pela visão e pelos nomes; Public Sans explica, orienta e permite agir. Cormorant Garamond é a única exceção documentada e permanece confinada à campanha Tempus.

## Layout

A home usa um fluxo editorial contínuo: acolhimento, biografia e caminhos, jornada, livro, YouTube e ecossistema. O ritmo alterna fotografia e texto, faixas cromáticas e diretórios sequenciais; cada capítulo conduz ao seguinte em vez de competir como unidade promocional isolada.

O contêiner editorial principal tem largura máxima de 1280px, com exceções conscientes no cabeçalho (1440px) e no hero (1600px). As margens laterais crescem de 24px no celular para 32px em telas médias e 48px no desktop. A separação vertical principal é de 80px no celular e 112px no desktop; faixas mais compactas usam 64px e 96px.

No desktop, as composições adotam colunas assimétricas como 42/58, 72/128 e 112/88 para criar tensão editorial. No celular, elas se tornam uma sequência linear com fotografia antes ou junto do texto, botões empilhados e diretórios preservados como listas. O hero ocupa aproximadamente a primeira altura útil da tela após o cabeçalho fixo de 76px.

**The Sequential Directory Rule.** Conjuntos extensos de caminhos ou ofertas usam linhas editoriais em sequência, separadas por traços finos; nunca uma grade genérica de cards.

**The Narrative Evidence Rule.** Números e credenciais entram na biografia ou nos detalhes do caminho correspondente. Não criar faixas de métricas ou contadores artificiais.

## Elevation & Depth

O sistema é plano por padrão. A profundidade vem da alternância de campos cromáticos, recortes fotográficos, bordas translúcidas e sobreposição funcional do cabeçalho fixo. Sombras são discretas, raras e ambientais; não são necessárias para separar as seções principais.

### Shadow Vocabulary

- **Editorial amplo** (`0 24px 50px -32px hsl(var(--deep) / 0.42)`): apoio eventual para uma peça editorial que precise destacar-se do fundo sem parecer flutuante.
- **Suave** (`0 16px 36px -30px hsl(var(--deep) / 0.35)`): separação mínima de superfícies claras.
- **Ametista ambiente** (`0 18px 42px -30px hsl(var(--primary) / 0.38)`): resposta rara em elementos de marca; nunca um brilho decorativo.

### Named Rules

**The Tonal Depth Rule.** Primeiro separe planos com cor, borda e composição; sombra é último recurso e nunca cria glassmorphism.

## Shapes

Os controles usam cantos suavemente arredondados entre 8px e 12px para manter conforto tátil. Grandes superfícies, imagens, faixas e diretórios permanecem majoritariamente retangulares, permitindo que cor e fotografia definam a silhueta. Bordas têm um pixel e baixa opacidade, atuando como linhas editoriais, não como molduras pesadas.

A linha relacional é horizontal ou vertical, fina e contínua. Pequenos losangos dourados podem marcar sua terminação quando derivados diretamente da geometria do símbolo; círculos, pílulas e blobs decorativos não formam parte do vocabulário principal.

**The Rectangular Field Rule.** Arredondamento pertence a controles e pequenos focos; não arredondar todas as imagens, seções e contêineres.

## Components

### Buttons

- **Shape:** confortável e compacto, com raio de 12px e altura mínima de 52px nas ações principais; alvos compactos nunca ficam abaixo de 44px.
- **Primary:** campo ametista, texto em branco acolhedor, peso semibold e espaço interno de 16px por 24px; passa a violeta profundo no hover.
- **Dark:** campo violeta profundo com texto claro; passa a ametista no hover e é indicado sobre fundos claros.
- **Light:** campo branco com texto violeta; pode passar a ouro relacional quando inserido sobre ametista ou violeta.
- **Secondary / Outline:** fundo transparente, borda violeta discreta e texto em tinta violeta; no hover, borda e texto assumem ametista.
- **Focus:** anel de 2px com contraste contextual e deslocamento quando o fundo exigir; nunca depender apenas da mudança de cor.

### Cards / Containers

- **Corner Style:** superfícies editoriais são retangulares; o raio não é aplicado por padrão.
- **Background:** alternância entre branco acolhedor, lilás de respiro, ametista e violeta profundo.
- **Shadow Strategy:** tonal e plana por padrão; seguir a seção de profundidade.
- **Border:** traço de 1px em violeta ou branco com opacidade moderada.
- **Internal Padding:** de 28px no celular a 48px em telas maiores quando imagem e texto formam um módulo único.

### Navigation

O cabeçalho fixo tem 76px, fundo branco acolhedor quase opaco e uma borda inferior discreta. No desktop, a linha relacional ocupa o espaço entre a marca e links textuais sem pílula; o hover desenha um sublinhado dourado. Em telas menores, os links secundários saem da barra, mas a marca e a ação Sala de Visitas permanecem disponíveis. Estados de foco usam anel visível de 2px.

### Journey Tabs

As quatro etapas formam uma faixa semântica de botões, não abas ornamentais. Cada etapa exibe número e nome; a selecionada usa violeta profundo, texto claro e número dourado. O painel abaixo conserva estrutura e conteúdo legível enquanto troca fotografia e texto por interação, com `aria-pressed` e anúncio de atualização.

### Editorial Directory

Cursos, livros, outros caminhos e ecossistema usam listas com bordas superior e inferior. Cada linha inteira é um link e combina título, descrição factual, ícone semântico, indicação do destino e uma ação explícita. Cursos podem incorporar uma miniatura fotográfica para reconhecimento rápido; os demais diretórios preservam o ritmo com ícones em campos compactos. No ecossistema, a numeração dourada reforça a sequência. O hover altera apenas cor ou fundo de forma sutil e o foco permanece nítido.

**The Visual Door Rule.** Todo redirecionamento central deve ser reconhecível antes da leitura completa: área inteira clicável, ícone relacionado ao destino, verbo de ação, canal de saída e seta externa. Ícones informam função — nunca decoram — e seguem o mesmo traço Lucide.

### Campaign Window — Tempus 2026

O Congresso III entra na jornada como um território editorial temporário e claramente demarcado, não como uma mudança na identidade principal do Instituto Liz. A seção usa o universo oficial do evento — verde quase preto (`#050D0A`), ouro antigo (`#D8A82C`), turquesa oxidada (`#53D4CC`) e marfim (`#EEE6D7`) — em uma composição retangular de imagem e texto, sem gradientes ou cartões internos.

O relógio com engrenagens, ramos e raízes é a imagem-chave. `Cormorant Garamond` aparece apenas no nome Tempus e na frase-manifesto para aproximar a assinatura editorial do Congresso; informações práticas e ações permanecem em Public Sans. A data, o local e o destino externo são sempre texto vivo. Toda a campanha oferece uma porta visual clicável e uma ação explícita para o site oficial.

**The Campaign Territory Rule.** Identidades de eventos podem formar uma janela cromática local quando documentadas e factuais; elas nunca substituem a paleta Liz no restante da página nem se espalham para componentes institucionais.

### Relational Line

A linha dourada é o componente-assinatura do sistema. Seu traçado acontece uma vez, em 900ms, com curva de desaceleração expressiva e atraso curto; links relacionais podem revelar um sublinhado em 220ms. Com movimento reduzido, toda linha aparece completa e estática. Nenhum conteúdo depende da animação ou começa oculto.

**The Only Motion Rule.** A linha relacional é o único momento de motion expressivo. Não adicionar entradas em cascata, parallax, flutuação, shimmer, pulsos ou revelações que ocultem conteúdo.

## Do's and Don'ts

### Do:

- **Do** usar fotografias reais de Letícia e dos materiais do Instituto como evidência humana.
- **Do** estruturar a leitura como um campo contínuo de capítulos, relações e próximos passos.
- **Do** manter títulos curtos em Anybody e explicações claras em Public Sans.
- **Do** usar ametista, violeta, lilás, rosa suave, branco e dourado em campos chapados com contraste legível.
- **Do** preservar conteúdo visível e uma experiência equivalente quando a pessoa prefere movimento reduzido.
- **Do** incorporar credenciais, duração e números confirmados diretamente na narrativa à qual pertencem.
- **Do** usar miniaturas de conteúdo e ícones semânticos para tornar destinos externos reconhecíveis em uma varredura rápida.
- **Do** manter a identidade Tempus restrita à seção do Congresso III e preservar todas as informações práticas como texto acessível.

### Don't:

- **Don't** usar azul-marinho, preto azulado ou uma paleta corporativa fria como neutral escuro.
- **Don't** usar gradientes decorativos, glassmorphism, brilho difuso ou superfícies translúcidas cenográficas.
- **Don't** converter caminhos e ofertas em grades genéricas de cards.
- **Don't** criar eyebrows decorativos, faixas de métricas, contadores ou números promocionais sem função narrativa.
- **Don't** animar conteúdo, imagens ou seções; apenas a linha relacional pode ter motion expressivo.
- **Don't** transformar todos os elementos em pílulas, caixas arredondadas ou componentes de template.
