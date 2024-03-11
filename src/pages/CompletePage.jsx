import "../App.css";

import { useContext, useEffect } from "react";
import { GlobalContext } from "../hooks/GlobalContext";

import Intro from "../components/Intro";
import Method from "../components/Method";
import Sentence from "../components/Sentence";
import Inspirations from "../components/Inspirations";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Head from "../components/Head";
import MenuMobile from "../components/MenuMobile";
import MenuMobileLanguage from "../components/MenuMobileLanguage";

import { metatags_db } from "../databases/metatags_db";
import { languages_class_db, languages_db } from "../databases/smalltexts_db";
import What from "../components/What";

const CompletePage = ({ lang }) => {
  const { menuMobile, menuMobileLanguage, setLanguage, setGlobalLanguage } =
    useContext(GlobalContext);
  let { storageCookie } = useContext(GlobalContext);

  useEffect(() => {
    storageCookie = JSON.parse(localStorage.getItem("languageStore"));
    storageCookie === null
      ? null
      : (setGlobalLanguage(storageCookie),
        languages_class_db.map((lang, i) => {
          if (lang === storageCookie) {
            setLanguage(languages_db[i]);
          }
        }));
  }, []);

  return (
    <>
      <Head lang={lang} db={metatags_db} />
      <Intro lang={lang} />
      <Sentence lang={lang} />
      <Method lang={lang} />
      <Inspirations lang={lang} />
      <About lang={lang} />
      <What lang={lang} />
      <Contacts lang={lang} />
      <Footer lang={lang} />
      {menuMobile && <MenuMobile lang={lang} />}
      {menuMobileLanguage && <MenuMobileLanguage />}
    </>
  );
};

export default CompletePage;
