import styles from "./Inspirations.module.css";

import { useRef, useEffect, useContext } from "react";

import InspirationsCard from "./InspirationsCard";
import {
  inspirations_db,
  inspirations_title,
} from "../databases/inspirations_db";
import { GlobalContext } from "../hooks/GlobalContext";
import Observer from "../hooks/Observer";

const Inspirations = ({ lang }) => {
  const { inspirationsVisible, setInspirationsVisible } =
    useContext(GlobalContext);
  const inspirationsRef = useRef();

  return (
    <section
      className={styles.inspirations_wrap}
      id="inspirations"
      ref={inspirationsRef}
    >
      <Observer
        state={inspirationsVisible}
        setState={setInspirationsVisible}
        ref={inspirationsRef}
      />
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
