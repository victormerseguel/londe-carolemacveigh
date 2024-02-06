import styles from "./What.module.css";

import { useEffect } from "react";
import parse from "html-react-parser";
import { whatis_title, whatis_db } from "../databases/whatis_db";

import { Fragment, useContext, useRef } from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import sophrology_logo from "../assets/sophrology-logo.png";

const What = ({ lang }) => {
  const { sophrologyVisible, setSophrologyVisible, options } =
    useContext(GlobalContext);
  const sophrologyRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setSophrologyVisible(+`${Math.floor(entry.intersectionRatio * 100)}`);
    }, options);

    observer.observe(sophrologyRef.current);
  }, [sophrologyVisible]);

  return (
    <section className={styles.what_wrap} id="sophrology" ref={sophrologyRef}>
      <div className={styles.what_header}>
        <h1>{whatis_title[0][lang]}</h1>
        <img src={sophrology_logo} alt="Logo Sofrologia" />
      </div>
      <div className={styles.what_content}>
        {whatis_db[0][lang].map((paragraph, i) => (
          <Fragment key={i}>
            {paragraph.includes("title - ") ? (
              <h2>{parse(paragraph.replace("title - ", ""))} </h2>
            ) : (
              <p>{parse(paragraph)}</p>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default What;
