import styles from "./TermsOfUse.module.css";
import { privacy_db } from "../databases/privacy_db";
import { useEffect } from "react";

const TermsOfUse = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.terms_wrap}>
      <h3>{privacy_db[0][lang]}</h3>
      {privacy_db[1][lang].map((item, i) => (
        <div key={i}>
          {item.includes("title - ") ? (
            <h4>{item.replace("title - ", "")}</h4>
          ) : null}
          {item.includes("subttl - ") ? (
            <h5>{item.replace("subttl - ", "")}</h5>
          ) : null}
          {item.includes("<p>") ? <p>{item.replace("<p> - ", "")}</p> : null}
          {item.includes("legaltext") ? (
            <p className={styles.legal}>{item.replace("legaltext - ", "")}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TermsOfUse;
