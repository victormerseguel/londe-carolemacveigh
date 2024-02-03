import styles from "./MenuMobileLanguage.module.css";
import anime from "./css-helpers/Animate.module.css";

import { useContext } from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import { languages_class_db, languages_db } from "../databases/smalltexts_db";
import { useNavigate } from "react-router-dom";

import logo from "../assets/londe-logo.png";
import close from "../assets/menu-close.svg";

const MenuMobile = ({ lang }) => {
  const navigate = useNavigate();
  const {
    language,
    setLanguage,
    setMenuMobileLanguage,
    animate2,
    setAnimate2,
  } = useContext(GlobalContext);
  let { globalLanguage } = useContext(GlobalContext);

  const handleClick = (l) => {
    setLanguage(l);

    languages_db.map((lang, i) => {
      if (lang === l) {
        globalLanguage = languages_class_db[i];
      }
    });
    navigate("/" + globalLanguage);
    setAnimate2(false);
    setTimeout(() => {
      setMenuMobileLanguage(false);
      setAnimate2(true);
    }, 500);
  };

  const handleClickClose = () => {
    setAnimate2(false);
    setTimeout(() => {
      setMenuMobileLanguage(false);
      setAnimate2(true);
    }, 500);
  };

  return (
    <div
      className={`${styles.menu_mobile_wrap} ${
        animate2 ? anime.animeIn : anime.animeOut
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
