import { about_title } from "./about_db";
import { inspirations_title } from "./inspirations_db";
import { method_title } from "./method_db";
import { whatis_menu_title } from "./whatis_db";

const date = new Date();
const currentYear = date.getFullYear();

const navbar_db = [
  {
    fr: "Accueil",
    pt: "Home",
    en: "Home",
  },
  {
    fr: method_title[0].fr,
    pt: method_title[0].pt,
    en: method_title[0].en,
  },
  {
    fr: inspirations_title[0].fr,
    pt: inspirations_title[0].pt,
    en: inspirations_title[0].en,
  },
  {
    fr: about_title[0].fr,
    pt: about_title[0].pt,
    en: about_title[0].en,
  },
  {
    fr: whatis_menu_title[0].fr,
    pt: whatis_menu_title[0].pt,
    en: whatis_menu_title[0].en,
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

const sentence_db = [
  {
    fr: `"Tout ce à quoi l'on résiste persiste. Tout ce que l'on embrasse s'efface..."`,
    pt: `“Tudo o que resistimos persiste. Tudo o que abraçamos desaparece...”`,
    en: `“Whatever we resist persists. Everything we embrace fades away...”`,
  },
  {
    fr: `“Il existe un pont entre la médecine conventionnelle et la médecine dite alternative. Je suis pleine de gratitude et je m’unis à tous ceux qui contribuent à sa construction.”`,
    pt: `“Existe uma ponte entre a medicina convencional e a chamada medicina alternativa. Estou cheia de gratidão e uno-me a todos aqueles que contribuem para a sua construção.”`,
    en: `“There is a bridge between conventional medicine and so-called alternative medicine. I am full of gratitude and join all those who contribute to its construction.”`,
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
  {
    email: "macveighc@gmail.com",
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
    fr: `COPYRIGHT © ${currentYear} L'ONDE - CAROLE MAC VEIGH`,
    pt: `COPYRIGHT © ${currentYear} L'ONDE - CAROLE MAC VEIGH`,
    en: `COPYRIGHT © ${currentYear} L'ONDE - CAROLE MAC VEIGH`,
  },
  {
    fr: `conditions d'utilisation`,
    pt: `termos de uso`,
    en: `terms of use`,
  },
  {
    fr: `POLITIQUE DE CONFIDENTIALITÉ`,
    pt: `POLÍTICA DE PRIVACIDADE`,
    en: `Privacy Policy`,
  },
  {
    fr: `concepteur de sites Web:`,
    pt: `web designer:`,
    en: `web designer:`,
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
  sentence_db,
  contacts_db,
  footer_db,
  languages_db,
  languages_class_db,
};
