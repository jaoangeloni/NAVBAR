export const NAV_BAR_ITEMS = [
  {
    label: "Início",
    tag: "inicio",
    path: "/inicio",
  },
  {
    label: "Em aberto",
    tag: "em-aberto",
    path: "/em-aberto",
  },
  {
    label: "Teste",
    tag: "teste-dropdown",
    path: "/teste",
    items: [
      {
        label: "Primeira página",
        tag: "primeira_pagina",
        path: "/primeira-pagina",
        description: "Esta é a primeira página",
      },
      {
        label: "Segunda página",
        tag: "segunda_pagina",
        path: "/segunda-pagina",
        description: "Esta é a segunda página",
      },
    ],
  },
];
