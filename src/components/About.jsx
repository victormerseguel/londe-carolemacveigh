import styles from "./About.module.css";

import { about_db, about_title } from "../databases/about_db";

import carole_photo from "../assets/carole-photo.png";
import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../hooks/GlobalContext";

const About = ({ lang }) => {
  let { aboutVisible, setAboutVisible, options } = useContext(GlobalContext);
  const aboutRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setAboutVisible(+`${Math.floor(entry.intersectionRatio * 100)}`);
    }, options);

    observer.observe(aboutRef.current);
  }, [aboutVisible]);

  return (
    <section className={styles.about_wrap} id="about" ref={aboutRef}>
      <div className={styles.about_img_wrap + " " + styles.mobile}>
        <img src={carole_photo} alt="Carole Mac Veigh" />
      </div>
      <h3>{about_title[0][lang]}</h3>
      <div className={styles.about_content}>
        <div className={styles.about_img_wrap + " " + styles.desktop}>
          <img src={carole_photo} alt="Carole Mac Veigh" />
        </div>
        <div className={styles.about_text}>
          {about_db[0][lang].map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
