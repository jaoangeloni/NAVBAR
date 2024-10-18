import megtv from "@/assets/apps/megtv.png";
import apontamentos from "@/assets/apps/apontamentos.png";
import solicitacoes from "@/assets/apps/solicitacoes.png";
import frota from "@/assets/apps/frota.webp";
import indicadores from "@/assets/apps/indicadores.png";
import eventos from "@/assets/apps/eventos.png";
import portaria from "@/assets/apps/portaria.png";
import cincoS from "@/assets/apps/5s.png";
import portal from "@/assets/apps/portal.png";

export const APPS_LIST = (environment: string) => {
  return environment === "production"
    ? [
        {
          label: "Portal Viva",
          icon: portal,
          tag: "portal",
          url: "https://portal.terraviva.agr.br/",
        },
        {
          label: "MEGTV",
          icon: megtv,
          tag: "megtv",
          url: "https://megtv.terraviva.agr.br/",
        },
        {
          label: "5S",
          icon: cincoS,
          tag: "5s",
          url: "https://apps.terraviva.agr.br/5s",
        },
        {
          label: "Indicadores",
          icon: indicadores,
          tag: "indicadores",
          url: "https://apps.terraviva.agr.br/indicadores",
        },
        {
          label: "Apontamentos",
          icon: apontamentos,
          tag: "apontamentos",
          url: "https://apps.terraviva.agr.br/apontamentos",
        },
        {
          label: "Eventos",
          icon: eventos,
          tag: "eventos",
          url: "https://apps.terraviva.agr.br/eventos",
        },
        {
          label: "Frota",
          icon: frota,
          tag: "gestao_frota",
          url: "https://apps.terraviva.agr.br/frota",
        },
        {
          label: "Solicitações",
          icon: solicitacoes,
          tag: "solicitacoes",
          url: "https://apps.terraviva.agr.br/solicitacoes",
        },
        {
          label: "Portaria",
          icon: portaria,
          tag: "portaria",
          url: "https://apps.terraviva.agr.br/portaria",
        },
      ]
    : [
        {
          label: "Portal Viva",
          icon: portal,
          tag: "portal",
          url: "https://portal.hml.terraviva.agr.br/",
        },
        {
          label: "MEGTV",
          icon: megtv,
          tag: "megtv",
          url: "https://megtv.hml.terraviva.agr.br/",
        },
        {
          label: "5S",
          icon: cincoS,
          tag: "5s",
          url: "https://apps.hml.terraviva.agr.br/5s",
        },
        {
          label: "Indicadores",
          icon: indicadores,
          tag: "indicadores",
          url: "https://apps.hml.terraviva.agr.br/indicadores",
        },
        {
          label: "Apontamentos",
          icon: apontamentos,
          tag: "apontamentos",
          url: "https://apps.hml.terraviva.agr.br/apontamentos",
        },
        {
          label: "Eventos",
          icon: eventos,
          tag: "eventos",
          url: "https://apps.hml.terraviva.agr.br/eventos",
        },
        {
          label: "Frota",
          icon: frota,
          tag: "gestao_frota",
          url: "https://apps.hml.terraviva.agr.br/frota",
        },
        {
          label: "Solicitações",
          icon: solicitacoes,
          tag: "solicitacoes",
          url: "https://apps.hml.terraviva.agr.br/solicitacoes",
        },
        {
          label: "Portaria",
          icon: portaria,
          tag: "portaria",
          url: "https://apps.hml.terraviva.agr.br/portaria",
        },
      ];
};
