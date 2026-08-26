import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Dados reais da Império Cafeteria                                   */
/* ------------------------------------------------------------------ */

export const INSTAGRAM_URL = "https://instagram.com/imperio_salgaderiaecafeteria";
export const INSTAGRAM_HANDLE = "@imperio_salgaderiaecafeteria";

export const ADDRESS_LINE_1 = "Av. Joaquim da Costa Lima, 10101 — Loja 3";
export const ADDRESS_LINE_2 = "Parque Veneza, Belford Roxo — RJ";
export const ADDRESS_ZIP = "CEP 26172-255";

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Av.+Joaquim+da+Costa+Lima,+10101+-+Loja+3+-+Parque+Veneza,+Belford+Roxo+-+RJ,+26172-255&z=16&output=embed";

export const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Av.+Joaquim+da+Costa+Lima,+10101+-+Loja+3+-+Parque+Veneza,+Belford+Roxo+-+RJ,+26172-255";

export const RATING = 4.6;
export const REVIEW_COUNT = 81;

export const OPEN_HOUR = 7;
export const CLOSE_HOUR = 23;

export const NAV_LINKS = [
  { label: "Destaques", href: "#destaques" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Onde estamos", href: "#onde-estamos" },
] as const;

export const TICKER_HERO = [
  "Aberto todos os dias",
  "07:00 — 23:00",
  "Café passado na hora",
  "Salgado saindo quente",
  "Doces & tortas da casa",
  "Climatizado",
  "Delivery em Belford Roxo",
];

export const TICKER_SERVICES = [
  "Consumo no local",
  "Retirada no balcão",
  "Delivery",
  "Entrega sem contato",
  "Segunda a domingo · 07:00–23:00",
];

/* ------------------------------------------------------------------ */
/*  Depoimentos (avaliações reais do Google)                           */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  name: string;
  text: string;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Luana Silva",
    initials: "LS",
    text: "Cafeteria acolhedora, o ambiente é muito agradável, ótimo para ir com a família ou para tomar um café com calma. Os salgados são deliciosos e o atendimento é impecável.",
  },
  {
    name: "Carlos Eduardo",
    initials: "CE",
    text: "Excelente opção na região! Os cafés especiais e as opções de sobremesa são nota 10. O espaço é muito limpo e bem decorado. Recomendo muito o cappuccino e a fatia de torta.",
  },
  {
    name: "Mariana Costa",
    initials: "MC",
    text: "Comida maravilhosa e de muita qualidade. Atendimento super atencioso e rápido. Um excelente lugar para tomar um café da manhã ou fazer um lanche no fim da tarde.",
  },
  {
    name: "Felipe Andrade",
    initials: "FA",
    text: "Local top! Ótimo para trabalhar um pouco no notebook enquanto toma um bom café. Bastante variedade no cardápio de salgados e doces.",
  },
  {
    name: "Beatriz Ramos",
    initials: "BR",
    text: "Lugar perfeito para reunir os amigos. Os preços são honestos pela qualidade entregue, e o ambiente é climatizado e super confortável.",
  },
];

/* ------------------------------------------------------------------ */
/*  Fotos                                                              */
/* ------------------------------------------------------------------ */

export const IMAGES = {
  hero: {
    src: "https://image.qwenlm.ai/generated-images/8c5ec54a-ca06-48e4-9ff6-b03e58f6099c/_result.png",
    alt: "Balcão da Império Cafeteria com barista finalizando um café coado na hora, sob luz quente de fim de tarde",
  },
  cafes: {
    src: "https://image.qwenlm.ai/generated-images/d8760312-f251-46a1-8360-690be3a8051c/_result.png",
    alt: "Espresso, cappuccino com latte art, café gelado, chá e um coquetel sobre o balcão de madeira",
  },
  salgados: {
    src: "https://image.qwenlm.ai/generated-images/33554507-6e86-46ba-a958-fce34c0af836/_result.png",
    alt: "Coxinhas, empadas, pão de queijo, fatia de torta e brigadeiros servidos sobre tábua rústica",
  },
  ambiente: {
    src: "https://image.qwenlm.ai/generated-images/c6c8afe2-e528-4e48-8e00-d78699e479df/_result.png",
    alt: "Salão climatizado da cafeteria com cliente trabalhando no notebook e família conversando ao fundo",
  },
  sobre: {
    src: "https://image.qwenlm.ai/generated-images/53608e45-0864-4206-9d72-f3584f4177d8/_result.png",
    alt: "Vista ampla do salão da Império Cafeteria ao anoitecer, com mesas ocupadas, luminárias de latão e vitrine de salgados",
  },
};

/* ------------------------------------------------------------------ */
/*  Destaques (ziguezague)                                             */
/* ------------------------------------------------------------------ */

export type Highlight = {
  icon: "cup" | "pastry" | "sofa";
  label: string;
  title: string;
  text: string;
  chips: string[];
  cornerTag: string;
  img: { src: string; alt: string };
  imageSide: "left" | "right";
};

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: "cup",
    label: "Cafés & bebidas",
    title: "Do espresso da manhã ao brinde da noite.",
    text: "Café de alta qualidade passado na hora: espresso encorpado, coado na medida, cappuccino cremoso e as bebidas geladas que salvam a tarde. Tem chás, sucos e — quando o dia pede — coquetéis e bebidas alcoólicas para fechar a noite no balcão.",
    chips: ["Espresso", "Cappuccino", "Coado", "Chás", "Geladas", "Coquetéis"],
    cornerTag: "Extração na hora",
    img: IMAGES.cafes,
    imageSide: "left",
  },
  {
    icon: "pastry",
    label: "Salgados & doces",
    title: "Salgado quente saindo o dia inteiro.",
    text: "Salgaderia de verdade: coxinha crocante, empada que desmancha, esfiha e pão de queijo saindo do forno e da fritura sem parar. De manhã, café da manhã completo; à tarde, lanche com sobremesa, torta na fatia e porções para dividir no meio da mesa.",
    chips: ["Coxinha", "Empadas", "Pão de queijo", "Café da manhã", "Tortas", "Porções"],
    cornerTag: "Fornada fresca",
    img: IMAGES.salgados,
    imageSide: "right",
  },
  {
    icon: "sofa",
    label: "Espaço para você ficar",
    title: "Chegou, sentou, ficou.",
    text: "Ambiente climatizado, mesas para grupos grandes e clima de casa: bom para a família — com cadeirão e menu infantil —, para o papo comprido com amigos e para quem quer trabalhar no notebook com um bom café do lado. Casa acessível para cadeirantes.",
    chips: ["Climatizado", "Bom para grupos", "Menu infantil", "Cadeirão", "Notebook bem-vindo", "Acessível"],
    cornerTag: "Climatizado",
    img: IMAGES.ambiente,
    imageSide: "left",
  },
];

/* ------------------------------------------------------------------ */
/*  Serviços (Sobre)                                                   */
/* ------------------------------------------------------------------ */

export type Service = {
  icon: "cloche" | "bag" | "speed" | "shield";
  title: string;
  desc: string;
};

export const SERVICES: Service[] = [
  {
    icon: "cloche",
    title: "Consumo no local",
    desc: "Sente, peça e fique à vontade — a casa é sua das sete às vinte e três.",
  },
  {
    icon: "bag",
    title: "Retirada no balcão",
    desc: "Pediu, passou, levou: seu pedido sai quente e embalado na hora.",
  },
  {
    icon: "speed",
    title: "Delivery",
    desc: "O café e o salgado chegam quentinhos na sua porta, em Belford Roxo e região.",
  },
  {
    icon: "shield",
    title: "Entrega sem contato",
    desc: "Da cozinha até a sua mão, com segurança do começo ao fim.",
  },
];

/* ------------------------------------------------------------------ */
/*  Horário vivo — a tese da marca                                     */
/* ------------------------------------------------------------------ */

export function useOpenStatus() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const hour = now.getHours() + now.getMinutes() / 60;
  const open = hour >= OPEN_HOUR && hour < CLOSE_HOUR;

  const label = open
    ? "Aberto agora · fecha às 23:00"
    : hour < OPEN_HOUR
      ? "Fechado · abre hoje às 07:00"
      : "Fechado · abre amanhã às 07:00";

  return { open, label };
}
