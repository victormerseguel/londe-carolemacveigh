import styles from "./Intro.module.css";
import "../App.css";

import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../hooks/GlobalContext";
import { title_db } from "../databases/smalltexts_db";
import { languages_db, languages_class_db } from "../databases/smalltexts_db";
import NavItem from "./NavItem";

import videobg from "../assets/videobackground-2.webm";
import londelogo from "../assets/londe-logo.png";
import languageIcon from "../assets/language.svg";
import menuMobileIcon from "../assets/menu-mobile.svg";
import thumb_videobg from "../assets/videobg-thumb4.jpg";
import Observer from "../hooks/Observer";

const Intro = ({ lang }) => {
  const { language, setLanguage, setMenuMobile } = useContext(GlobalContext);
  let { globalLanguage, homeVisible, setHomeVisible } =
    useContext(GlobalContext);
  const navigate = useNavigate();
  const [navScroll, setNavScroll] = useState(false);
  const homeRef = useRef();

  // select language
  const handleChanging = (target) => {
    setLanguage(target.value);

    languages_db.map((lang, i) => {
      if (lang === target.value) {
        globalLanguage = languages_class_db[i];
        localStorage.setItem("languageStore", JSON.stringify(globalLanguage));
      }
    });
    navigate("/" + globalLanguage);
  };

  // navbar color
  const scrollNav = () => {
    window.scrollY > 50 ? setNavScroll(true) : setNavScroll(false);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollNav);
  }

  return (
    <header className={styles.container} id="home">
      <Observer state={homeVisible} setState={setHomeVisible} ref={homeRef} />
      <div className={styles.background}>
        <img src={thumb_videobg} alt="" />
      </div>
      <div className={styles.background}>
        <video src={videobg} autoPlay loop muted ref={homeRef}></video>
      </div>
      <div className={styles.gradient_bg}></div>
      <div className={styles.content}>
        <nav className={navScroll ? styles.menu_scroll : ""}>
          <span className={styles.logo}>
            <a href="#home">
              <img src={londelogo} alt="L'Onde Logo" />
            </a>
          </span>
          <ul>
            <NavItem indice={0} lang={lang} classs={true} item={"home"} />
            <NavItem indice={1} lang={lang} classs={true} item={"method"} />
            <NavItem
              indice={2}
              lang={lang}
              classs={true}
              item={"inspirations"}
            />
            <NavItem indice={3} lang={lang} classs={true} item={"about"} />
            <NavItem indice={4} lang={lang} classs={true} item={"sophrology"} />
            <NavItem indice={5} lang={lang} classs={true} item={"contacts"} />
            <span
              className={styles.menu_mobile}
              onClick={() => setMenuMobile(true)}
            >
              <img src={menuMobileIcon} alt="Menu" />
            </span>
            <li className={styles.language + " " + styles.menu_desktop}>
              <img src={languageIcon} alt="Globe" />
              <select
                value={language}
                onChange={({ target }) => handleChanging(target)}
              >
                {languages_db.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </nav>
        <div className={styles.title_wrap}>
          <div className={styles.title_bg}></div>
          <h1>{title_db[0][lang]}</h1>
          <h2>Carole Mac Veigh</h2>
        </div>
        <div className={styles.intro_footer}></div>
      </div>
    </header>
  );
};

export default Intro;
