import styles from "./MenuMobileLanguage.module.css";

import { useContext } from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import NavItem from "./NavItem";
import { languages_class_db, languages_db } from "../databases/smalltexts_db";
import { useNavigate } from "react-router-dom";

import logo from "../assets/londe-logo.png";
import close from "../assets/menu-close.svg";

const MenuMobile = ({ lang }) => {
  const navigate = useNavigate();
  const { language, setLanguage, setMenuMobileLanguage } =
    useContext(GlobalContext);
  let { globalLanguage } = useContext(GlobalContext);

  const handleClick = (l) => {
    setLanguage(l);

    languages_db.map((lang, i) => {
      if (lang === l) {
        globalLanguage = languages_class_db[i];
      }
    });
    navigate("/" + globalLanguage);
    setMenuMobileLanguage(false);
  };

  return (
    <div className={styles.menu_mobile_wrap + " " + styles.animeUp}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo L'Onde" />
      </div>
      <div
        className={styles.close}
        onClick={() => setMenuMobileLanguage(false)}
      >
        <img src={close} alt="Close Menu" />
      </div>
      <nav>
        <ul>
          <li
            onClick={() => {
              handleClick("Français");
            }}
          >
            <span className={language === "Français" ? styles.active : null}>
              Français
            </span>
          </li>
          <li
            onClick={() => {
              handleClick("Português");
            }}
          >
            <span className={language === "Português" ? styles.active : null}>
              Português
            </span>
          </li>
          <li
            onClick={() => {
              handleClick("English");
            }}
          >
            <span className={language === "English" ? styles.active : null}>
              English
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuMobile;
