import megtv from "@/assets/apps/megtv.png";
import apontamentos from "@/assets/apps/apontamentos.png";
import academia from "@/assets/apps/academia.png";
import outlook from "@/assets/apps/outlook.png";
import eventos from "@/assets/apps/eventos.png";
import cincoS from "@/assets/apps/5s.png";
import portal from "@/assets/apps/portal.png";

export const APPS_LIST = (environment: string) => {
  return environment === "production"
    ? [
        {
          label: "Outlook",
          icon: outlook,
          tag: "outlook",
          url: "https://outlook.office.com/mail/",
        },
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
          label: "Academia TV",
          icon: academia,
          tag: "academia",
          url: "https://academia.terraviva.agr.br/",
        },
      ]
    : [
        {
          label: "Outlook",
          icon: outlook,
          tag: "outlook",
          url: "https://outlook.office.com/mail/",
        },
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
          label: "Academia",
          icon: academia,
          tag: "academia",
          url: "https://academia.terraviva.agr.br/",
        },
      ];
};
