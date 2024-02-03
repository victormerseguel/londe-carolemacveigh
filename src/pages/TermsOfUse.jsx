import styles from "./TermsOfUse.module.css";
import { terms_db } from "../databases/terms_db";
import { useEffect } from "react";

const TermsOfUse = ({ lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.terms_wrap}>
      <h3>{terms_db[0][lang]}</h3>
      {terms_db[1][lang].map((item, i) => (
        <div key={i}>
          {item.includes("title - ") ? (
            <h4>{item.replace("title - ", "")}</h4>
          ) : null}
          {item.includes("subttl - ") ? (
            <h5>{item.replace("subttl - ", "")}</h5>
          ) : null}
          {item.includes("<p>") ? <p>{item.replace("<p> - ", "")}</p> : null}
        </div>
      ))}
    </div>
  );
};

export default TermsOfUse;
