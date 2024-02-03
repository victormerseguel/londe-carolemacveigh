const date = new Date();
const currentYear = date.getFullYear();

const navbar_db = [
  {
    fr: "Accueil",
    pt: "Home",
    en: "Home",
  },
  {
    fr: "Méthode de Travail",
    pt: "Método de Trabalho",
    en: "Work Method",
  },
  {
    fr: "Services",
    pt: "Serviços",
    en: "Services",
  },
  {
    fr: "À Propos de Moi",
    pt: "Sobre Mim",
    en: "About Me",
  },
  {
    fr: "Contact",
    pt: "Contacto",
    en: "Contact",
  },
];

const title_db = [
  {
    fr: "Sophrologue Caycédienne",
    pt: "Sofróloga Caycediana",
    en: "Caycedian Sophrologist",
  },
];

const phrase_db = [
  {
    fr: `"Tout ce à quoi je fais face s'efface, tout ce à quoi je résiste persiste"`,
    pt: `“Tudo que enfrento desaparece, tudo que resisto persiste”`,
    en: `“Everything I face fades, everything I resist persists”`,
  },
];
const contacts_db = [
  {
    fr: "Contact",
    pt: "Contacto",
    en: "Contact",
  },
  {
    fr: "Nom",
    pt: "Nome",
    en: "Name",
  },
  {
    fr: "Contacter",
    pt: "Contacto",
    en: "Contact",
  },
  {
    fr: "Envoyer",
    pt: "Enviar",
    en: "Send",
  },
];
const footer_db = [
  {
    fr: navbar_db[1].fr,
    pt: navbar_db[1].pt,
    en: navbar_db[1].en,
  },
  {
    fr: navbar_db[2].fr,
    pt: navbar_db[2].pt,
    en: navbar_db[2].en,
  },
  {
    fr: navbar_db[3].fr,
    pt: navbar_db[3].pt,
    en: navbar_db[3].en,
  },
  {
    fr: navbar_db[4].fr,
    pt: navbar_db[4].pt,
    en: navbar_db[4].en,
  },
  {
    fr: `COPYRIGHT © ${currentYear} L'ONDE - CAROLE MAC VEIGH | `,
    pt: `COPYRIGHT © ${currentYear} L'ONDE - CAROLE MAC VEIGH | `,
    en: `COPYRIGHT © ${currentYear} L'ONDE - CAROLE MAC VEIGH | `,
  },
  {
    fr: `conditions d'utilisation |`,
    pt: `termos de uso |`,
    en: `terms of use |`,
  },
  {
    fr: ` concepteur de sites Web: `,
    pt: ` web designer: `,
    en: ` web designer: `,
  },
  {
    fr: `Victor Merseguel`,
    pt: `Victor Merseguel`,
    en: `Victor Merseguel`,
  },
];

const languages_db = ["Français", "Português", "English"];

const languages_class_db = ["fr", "pt", "en"];

export {
  navbar_db,
  title_db,
  phrase_db,
  contacts_db,
  footer_db,
  languages_db,
  languages_class_db,
};
