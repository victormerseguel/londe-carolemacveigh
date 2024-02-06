import styles from "./Intro.module.css";

import { useContext } from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import { navbar_db } from "../databases/smalltexts_db";

const NavItem = ({ indice, lang, classs }) => {
  const { menuState, setMenuMobile, setAnimate1, menuItems } =
    useContext(GlobalContext);

  return (
    <li
      className={classs ? styles.menu_desktop : null}
      onClick={() => {
        setAnimate1(false);
        setTimeout(() => {
          setMenuMobile(false);
          setAnimate1(true);
        }, 500);
      }}
    >
      <a
        href={`#${menuItems[indice]}`}
        id={`${menuItems[indice]}Button`}
        className={menuState === menuItems[indice] ? styles.active : null}
      >
        {navbar_db[indice][lang]}
      </a>
    </li>
  );
};

export default NavItem;
