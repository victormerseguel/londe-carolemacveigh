import styles from "./Phrase.module.css";
import "../App.css";

import { phrase_db } from "../databases/smalltexts_db";

import phrase_bg from "../assets/phrase-bg.png";

const Phrase = ({ lang }) => {
  return (
    <div className={styles.phrase_wrap}>
      <img src={phrase_bg} alt="" />
      <p>{phrase_db[0][lang]}</p>
    </div>
  );
};

export default Phrase;
