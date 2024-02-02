import "../App.css";

import Intro from "../components/Intro";
import Method from "../components/Method";
import Phrase from "../components/Phrase";
import Services from "../components/Services";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import Head from "../components/Head";
import MenuMobile from "../components/MenuMobile";
import MenuMobileLanguage from "../components/MenuMobileLanguage";
import { useContext } from "react";
import { GlobalContext } from "../hooks/GlobalContext";

const CompletePage = ({ lang }) => {
  const { menuMobile, menuMobileLanguage } = useContext(GlobalContext);
  return (
    <>
      <Head lang={lang} description="essa é a descrição" />
      <Intro lang={lang} />
      <Phrase lang={lang} />
      <Method lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <Contacts lang={lang} />
      <Footer lang={lang} />
      {menuMobile && <MenuMobile lang={lang} />}
      {menuMobileLanguage && <MenuMobileLanguage />}
    </>
  );
};

export default CompletePage;
