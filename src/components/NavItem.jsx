import styles from "./Intro.module.css";

import { useContext } from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import { navbar_db } from "../databases/smalltexts_db";

const NavItem = ({ item, indice, lang, classs, state }) => {
  const { menuState, setMenuMobile } = useContext(GlobalContext);

  return (
    <li
      className={classs ? styles.menu_desktop : null}
      onClick={() => {
        setMenuMobile(false);
      }}
    >
      <a
        href={`#${item}`}
        id={`${item}Button`}
        className={menuState === item ? styles.active : null}
      >
        {typeof indice == "string" ? indice : navbar_db[indice][lang]}
      </a>
    </li>
  );
};

export default NavItem;
