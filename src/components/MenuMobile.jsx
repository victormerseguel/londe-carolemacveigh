import styles from "./MenuMobile.module.css";

import { useContext } from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import NavItem from "./NavItem";

import logo from "../assets/londe-logo.png";
import languageIcon from "../assets/language.svg";
import close from "../assets/menu-close.svg";

const MenuMobile = ({ lang }) => {
  const { setMenuMobile, setMenuMobileLanguage } = useContext(GlobalContext);

  const handleClick = () => {
    setMenuMobile(false);
    setMenuMobileLanguage(true);
  };

  return (
    <div className={styles.menu_mobile_wrap + " " + styles.animeUp}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo L'Onde" />
      </div>
      <div className={styles.close} onClick={() => setMenuMobile(false)}>
        <img src={close} alt="Close Menu" />
      </div>
      <nav>
        <ul>
          <NavItem indice={1} lang={lang} item={"method"} />
          <NavItem indice={2} lang={lang} item={"services"} />
          <NavItem indice={3} lang={lang} item={"about"} />
          <NavItem indice={4} lang={lang} item={"contacts"} />
          <li
            onClick={() => {
              handleClick();
            }}
          >
            <img src={languageIcon} alt="Globe" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
