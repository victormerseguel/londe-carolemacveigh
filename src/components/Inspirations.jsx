import styles from "./Inspirations.module.css";

import { useRef, useEffect, useContext } from "react";

import InspirationsCard from "./InspirationsCard";
import {
  inspirations_db,
  inspirations_title,
} from "../databases/inspirations_db";
import { GlobalContext } from "../hooks/GlobalContext";

const Inspirations = ({ lang }) => {
  let { inspirationsVisible, options, setInspirationsVisible } =
    useContext(GlobalContext);
  const inspirationsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setInspirationsVisible(+`${Math.floor(entry.intersectionRatio * 100)}`);
    }, options);

    observer.observe(inspirationsRef.current);
  }, [inspirationsVisible]);

  return (
    <section
      className={styles.inspirations_wrap}
      id="inspirations"
      ref={inspirationsRef}
    >
      <h3>{inspirations_title[0][lang]}</h3>
      <div className={styles.inspirations_cards}>
        {inspirations_db.map((inspirations) => (
          <InspirationsCard
            key={inspirations.title[lang]}
            icon={inspirations.icon}
            title={inspirations.title[lang]}
            text={inspirations.text[lang]}
          />
        ))}
      </div>
    </section>
  );
};

export default Inspirations;
