import "../App.css";

import Intro from "./Intro";
import Method from "./Method";
import Phrase from "./Phrase";
import Services from "./Services";
import About from "./About";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Head from "./Head";
import MenuMobile from "./MenuMobile";
import MenuMobileLanguage from "./MenuMobileLanguage";
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
