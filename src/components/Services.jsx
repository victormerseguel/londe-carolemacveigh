import styles from "./Services.module.css";

import { useRef, useEffect, useContext } from "react";

import ServicesCard from "./ServicesCard";
import { services_db, services_title } from "../databases/services_db";
import { GlobalContext } from "../hooks/GlobalContext";

const Services = ({ lang }) => {
  let { servicesVisible, options, setServicesVisible } =
    useContext(GlobalContext);
  const servicesRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setServicesVisible(+`${Math.floor(entry.intersectionRatio * 100)}`);
    }, options);

    observer.observe(servicesRef.current);
  }, [servicesVisible]);

  return (
    <section className={styles.services_wrap} id="services" ref={servicesRef}>
      <h3>{services_title[0][lang]}</h3>
      <div className={styles.services_cards}>
        {services_db.map((service) => (
          <ServicesCard
            key={service.title[lang]}
            icon={service.icon}
            title={service.title[lang]}
            text={service.text[lang]}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
