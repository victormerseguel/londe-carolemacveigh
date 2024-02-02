import styles from "./ServicesCard.module.css";
import "../App.css";

const ServicesCard = ({ title, text, icon }) => {
  return (
    <div className={styles.servicescard_wrap}>
      <img src={icon} />
      <div className={styles.background_card}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
