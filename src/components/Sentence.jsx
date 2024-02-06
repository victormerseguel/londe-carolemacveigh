import styles from "./Sentence.module.css";
import "../App.css";

import { sentence_db } from "../databases/smalltexts_db";

import sentence_bg from "../assets/sentence-bg.png";
import sentence_head from "../assets/sentencewave-bg.png";
import sentence_footer from "../assets/sentencefooter-bg.png";

const Sentence = ({ lang }) => {
  return (
    <div className={styles.sentence_wrap}>
      {/* <img src={sentence_bg} alt="" />
      <p>{sentence_db[0][lang]}</p> */}
      <img src={sentence_head} alt="" />
      <div className={styles.sentences_content}>
        <p>
          {sentence_db[0][lang]}
          <br />
          <span>Carl Gustav Jung</span>
        </p>
        <p>
          {sentence_db[1][lang]}
          <br />
          <span>Carole Mac Veigh</span>
        </p>
      </div>
      <img src={sentence_footer} alt="" />
    </div>
  );
};

export default Sentence;
