---
name: Almeida & Vasconcelos Advocacia
description: "Direito com clareza. Atendimento com proximidade."
colors:
  primary: "#C5A880"
  primary-light: "#E4D2BA"
  primary-dark: "#9A7B54"
  bg-obsidian: "#0C1624"
  bg-charcoal: "#132238"
  bg-charcoal-hover: "#1A2D4A"
  bg-cream: "#F9F8F6"
  bg-white: "#FFFFFF"
  text-white: "#FFFFFF"
  text-slate-dark: "#94A3B8"
  text-navy-main: "#0C1624"
  text-muted-light: "#64748B"
  whatsapp-green: "#25D366"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(2.75rem, 5vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 3.8vw, 3.25rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  sm: "6px"
  md: "14px"
  lg: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "36px"
  xl: "56px"
  2xl: "100px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-obsidian}"
    rounded: "{rounded.sm}"
    padding: "16px 34px"
  button-primary-hover:
    backgroundColor: "{colors.primary-light}"
    textColor: "{colors.bg-obsidian}"
    rounded: "{rounded.sm}"
    padding: "16px 34px"
  button-dark-outline:
    backgroundColor: "transparent"
    textColor: "{colors.text-white}"
    rounded: "{rounded.sm}"
    padding: "16px 34px"
  card-dark:
    backgroundColor: "{colors.bg-charcoal}"
    textColor: "{colors.text-white}"
    rounded: "{rounded.md}"
    padding: "44px 36px"
  card-light:
    backgroundColor: "{colors.bg-white}"
    textColor: "{colors.text-navy-main}"
    rounded: "{rounded.md}"
    padding: "44px 36px"
---

# Design System: Almeida & Vasconcelos Advocacia

## Overview

**Creative North Star: "A Chancelaria Contemporânea" (The Sovereign Counsel)**

O design system de Almeida & Vasconcelos materializa o equilíbrio entre tradição solene e acolhimento humano. Em vez de recorrer a layouts genéricos de duas colunas ou estéticas frias e intimidadoras de tribunais, a interface adota uma postura editorial de prestígio: grandes títulos centralizados, fotografia arquitetônica em proporção cinematográfica e contrastes deliberados entre fundos escuros nobres (Obsidian Navy) e seções de leitura em tons quentes de pergaminho (Alabaster Cream).

A linguagem visual é refinada, serena e calorosa. O ouro champanhe nunca é utilizado como preenchimento agressivo ou ostentoso, mas como um fio condutor cirúrgico: bordas delgadas de 1px, badges de compromisso ético, índices numerados e microinterações de brilho. A experiência transmite aos clientes a certeza de estarem diante de uma banca consolidada, que zela pelo rigor técnico sem abdicar da empatia e da clareza.

**Key Characteristics:**
- **Contraste Rítmico de Seções:** Alternância cadenciada entre a solenidade imponente do Obsidian Navy (`#0C1624`) e o conforto respirável do Creme Editorial (`#F9F8F6`).
- **Hero Editorial com Banner Panorâmico:** Rejeição do clichê de duas colunas em favor de uma composição hierárquica centralizada coroada por um panorama arquitetônico com barra flutuante de pilares.
- **Acabamento Metálico Suave:** Destaques em Champagne Gold (`#C5A880`) com iluminação difusa e glow dourado contido.
- **Tipografia de Alto Nível:** Diálogo harmonioso entre a nobreza clássica da `DM Serif Display` e a objetividade legível da `Manrope`.
- **Abertura Cerimonial (Curtain Split Reveal):** Entrada imersiva com monograma pulsante e revelação suave através de cortinas duplas.

## Colors

Paleta nobre inspirada na alta chancelaria jurídica, combinando o mistério sóbrio do azul-obsidiana com o calor metálico do ouro champanhe e o acolhimento do papel creme.

### Primary
- **Champagne Gold** (`#C5A880`): Acento nobre central. Utilizado em botões de conversão primários, badges de ética, ícones temáticos, índices numéricos e detalhes de destaque.
- **Light Champagne** (`#E4D2BA`): Estado de hover de botões e acentos luminosos.
- **Metallic Dark Gold** (`#9A7B54`): Bordas de precisão, divisores e gradientes lineares.

### Secondary
- **WhatsApp Green** (`#25D366`): Cor oficial de conversão imediata, reservada exclusivamente para o botão flutuante e botões com gatilho direto para o mensageiro.

### Neutral
- **Obsidian Navy Base** (`#0C1624`): Fundo principal da página, cabeçalho e rodapé. Confere autoridade e serenidade imersiva.
- **Deep Charcoal Card** (`#132238`): Superfície de cartões, formulários e modais em ambiente escuro.
- **Charcoal Hover** (`#1A2D4A`): Estado de interação e elevação de cartões escuros.
- **Alabaster Cream** (`#F9F8F6`): Fundo de alto contraste para seções de leitura prolongada (Sobre, Equipe e FAQ).
- **Surface White** (`#FFFFFF`): Cartões e campos dentro das seções claras.
- **Muted Slate** (`#94A3B8`): Textos de apoio, legendas e metadados sobre fundo escuro.
- **Deep Navy Text** (`#0C1624`): Tipografia primária sobre fundo creme.
- **Muted Charcoal Text** (`#64748B`): Parágrafos e descrições sobre fundo claro.

### Named Rules
**The Rarity of Gold Rule.** O Champagne Gold é um metal de precisão, não uma tinta de parede. Ele deve ocupar menos de 8% da área de qualquer tela. Sua força provém da sua escassez estratégica.

## Typography

**Display Font:** DM Serif Display (com Georgia, serif como fallback)  
**Body Font:** Manrope (com -apple-system, BlinkMacSystemFont, Segoe UI, Roboto como fallback)  

**Character:** A solidez atemporal e a autoridade da serif clássica ancoram a credibilidade institucional, enquanto a geometria aberta e neutra da Manrope assegura uma leitura transparente, sem ruídos ou rebuscamentos.

### Hierarchy
- **Display** (400, `clamp(2.75rem, 5vw, 4.25rem)`, line-height 1.2, letter-spacing -0.02em): Título principal da Hero Section.
- **Headline** (400, `clamp(2.25rem, 3.8vw, 3.25rem)`, line-height 1.2, letter-spacing -0.01em): Títulos de seções principais.
- **Title** (400, `1.45rem` a `1.65rem`, line-height 1.3): Títulos de cartões de serviço, manifesto, artigos e nomes de profissionais.
- **Body** (400, `1rem`, line-height 1.7): Parágrafos de leitura, explicações jurídicas e respostas do FAQ.
- **Label** (700, `0.75rem`, letter-spacing 0.2em, uppercase): Eyebrows de cabeçalho de seção, tags de OAB e badges de categoria.

### Named Rules
**The Legibility Rule.** Textos explicativos e jurídicos nunca devem exceder 75 caracteres por linha (ch), preservando a cadência natural de leitura do cliente.

## Layout

O layout baseia-se em um container centralizado com largura máxima de `1240px` (`padding: 0 24px`) e respiros verticais generosos de `100px` entre seções (`70px` no mobile).

- **Grid de Serviços (Matrix):** 3 colunas no desktop, adaptando-se para 2 colunas em tablets e 1 coluna em smartphones.
- **Grid de Equipe:** 2 colunas amplas lado a lado com retratos profissionais e badges OAB.
- **Grid de Pilares:** 5 colunas compactas horizontais no desktop, 3 em tablets e pilha vertical no mobile.
- **Formulário & Contato:** Grid assimétrico de 2 colunas (50% dados de contato e endereço / 50% cartão de formulário elevado).

## Elevation & Depth

O sistema utiliza **tonal layering com bordas douradas sutis e sombras difusas** em vez de elevações genéricas em cinza.

### Shadow Vocabulary
- **Subtle Ambient** (`0 4px 20px rgba(0, 0, 0, 0.06)`): Superfícies claras e cartões sobre fundo creme.
- **Dark Void** (`0 16px 44px rgba(0, 0, 0, 0.4)`): Cartões profundos em Deep Charcoal sobre o Obsidian Navy.
- **Gold Glow** (`0 12px 32px rgba(197, 168, 128, 0.25)`): Efeito de aproximação em hover nos cartões escuros e no botão primário.

### Named Rules
**The Luminous Edge Rule.** A profundidade sobre fundos escuros não é transmitida por sombras pretas, mas pela iluminação de bordas finas (`1px solid rgba(197, 168, 128, 0.35)`) combinadas com gradientes sutis no topo dos cartões.

## Shapes

A linguagem geométrica é sóbria e estruturada:
- **Botões e Campos:** Cantos ligeiramente arredondados (`radius: 6px`), conferindo aspecto firme e contemporâneo.
- **Cartões e Banners:** Cantos suavizados em `14px`, proporcionando ergonomia visual acolhedora.
- **Badges e Pílulas:** Geometria em cápsula total (`radius: 9999px`) para selos e chamadas de ética.

## Components

### Buttons
- **Shape:** Raio de 6px (`rounded.sm`), tipografia Manrope 600, `padding: 16px 34px`.
- **Primary:** Fundo Champagne Gold (`#C5A880`), texto Obsidian Navy (`#0C1624`), sombra difusa dourada. Hover em Light Champagne (`#E4D2BA`) com deslocamento vertical de `-2px`.
- **Dark Outline:** Fundo transparente, borda fina em branco translúcido (`rgba(255, 255, 255, 0.25)`), texto branco. Hover com borda e texto em ouro champanhe.
- **WhatsApp Action:** Fundo verde oficial (`#25D366`), texto branco, sombra pulsante verde.

### Cards / Containers
- **Dark Bento Card:** Fundo `#132238`, borda ouro champanhe translúcida de 1px, acento de luz linear superior. Hover com elevação de 8px e transição suave de 0.4s.
- **Light Editorial Card:** Fundo `#FFFFFF`, borda cinza sutil, topo com friso dourado de 3px.

### Inputs / Fields
- **Style:** Fundo translúcido escuro (`rgba(12, 22, 36, 0.8)`), borda ouro sutil, tipografia branca legível, rótulos superiores em caixa alta dourada.
- **Focus:** Borda clara em `#E4D2BA` com anel de foco luminoso (`0 0 0 3px rgba(197, 168, 128, 0.22)`).

### Navigation & Header
- **Desktop:** Barra fixa com desfoque de vidro (`backdrop-filter: blur(16px)`), fundo translúcido a 94%, logotipo em serifa clássica e links com indicador de sublinhado em ouro ativo.
- **Mobile:** Menu sanduíche responsivo com painel expansivo suave em `#132238`.

### Signature Component: Preloader Curtain Split
- **Estrutura:** Tela inteira em `#060B12` com monograma **AV** em anel dourado pulsante, barra de progresso em gradiente metálico e contador 0–100%. Ao concluir, cortinas laterais dividem-se ao meio deslizando para fora em `cubic-bezier(0.77, 0, 0.175, 1)`.

## Do's and Don'ts

### Do:
- **Do** preservar a integridade da paleta Obsidian Navy e Champagne Gold em qualquer nova seção.
- **Do** utilizar exclusivamente ícones da biblioteca Font Awesome 6 com significado contextual direto.
- **Do** manter a garantia de visibilidade imediata com fallback de acessibilidade para usuários com `prefers-reduced-motion`.
- **Do** aplicar o espaçamento vertical padrão de 100px entre seções para manter o ar editorial desobstruído.

### Don't:
- **Don't** utilizar clichês jurídicos desgastados como balanças gigantescas ou martelos de juiz soltos no meio do layout.
- **Don't** incluir mensagens de "causa ganha", promessas de resultado ou linguagem sensacionalista que infrinjam a ética da OAB.
- **Don't** criar cartões com bordas excessivamente arredondadas (>16px) que quebrem a solenidade da banca.
- **Don't** usar degradês multicoloridos ou cores fluorescentes que destoem da atmosfera chancelar.
