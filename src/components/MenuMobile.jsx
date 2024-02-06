import styles from "./MenuMobile.module.css";
import anime from "./css-helpers/Animate.module.css";

import { useContext } from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import NavItem from "./NavItem";

import logo from "../assets/londe-logo.png";
import languageIcon from "../assets/language.svg";
import expand from "../assets/expand.svg";
import close from "../assets/menu-close.svg";

const MenuMobile = ({ lang }) => {
  const {
    menuItems,
    setMenuMobile,
    setMenuMobileLanguage,
    animate1,
    setAnimate1,
  } = useContext(GlobalContext);

  const handleClick = () => {
    setTimeout(() => {
      setMenuMobile(false);
    }, 500);
    setMenuMobileLanguage(true);
  };

  const handleClickClose = () => {
    setAnimate1(false);
    setTimeout(() => {
      setMenuMobile(false);
      setAnimate1(true);
    }, 500);
  };

  return (
    <div
      className={`${styles.menu_mobile_wrap} ${
        animate1 ? anime.animeIn : anime.animeOut
      }`}
    >
      <div className={styles.logo}>
        <img src={logo} alt="Logo L'Onde" />
      </div>
      <div className={styles.close} onClick={() => handleClickClose()}>
        <img src={close} alt="Close Menu" />
      </div>
      <nav>
        <ul>
          <NavItem indice={0} lang={lang} />
          <NavItem indice={1} lang={lang} />
          <NavItem indice={2} lang={lang} />
          <NavItem indice={3} lang={lang} />
          <NavItem indice={4} lang={lang} />
          <NavItem indice={5} lang={lang} />
          <li
            onClick={() => {
              handleClick();
            }}
            className={styles.languageLi}
          >
            <img src={languageIcon} alt="Globe" />
            Language
            <img src={expand} alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
