import styles from "./Footer.module.css";

import { Link } from "react-router-dom";

import { footer_db, navbar_db } from "../databases/smalltexts_db";
import logo from "../assets/londe-logo.png";

const Footer = ({ lang }) => {
  return (
    <footer>
      <div className={styles.footer_content}>
        <div className={styles.footer_left}>
          <a href="#home">{navbar_db[0][lang]}</a>
          <a href="#method">{navbar_db[1][lang]}</a>
          <a href="#inspirations">{navbar_db[2][lang]}</a>
          <a href="#about" className={styles.mobile}>
            {navbar_db[3][lang]}
          </a>
          <a href="#sophrology" className={styles.mobile}>
            {navbar_db[4][lang]}
          </a>
          <a href="#contacts" className={styles.mobile}>
            {navbar_db[5][lang]}
          </a>
        </div>
        <div className={styles.footer_center}>
          <img src={logo} alt="L'Onde logo" />
        </div>
        <div className={styles.footer_right}>
          <a href="#about" className={styles.desktop}>
            {navbar_db[3][lang]}
          </a>
          <a href="#sophrology" className={styles.desktop}>
            {navbar_db[4][lang]}
          </a>
          <a href="#contacts" className={styles.desktop}>
            {navbar_db[5][lang]}
          </a>
        </div>
      </div>
      <p className={styles.footer_legaltext}>
        {footer_db[4][lang]} | <br className={styles.mobile3} />
        <Link to={`/${lang}/terms`}>{footer_db[5][lang]}</Link> |{" "}
        <br className={styles.mobile2} />
        <Link to={`/${lang}/privacy`}>{footer_db[6][lang]}</Link> |{" "}
        <br className={styles.mobile1} />
        {footer_db[7][lang]}
        <a href="https://victormerseguel.com"> {footer_db[8][lang]}</a>
      </p>
    </footer>
  );
};

export default Footer;
