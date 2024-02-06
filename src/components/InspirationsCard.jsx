import styles from "./InspirationsCard.module.css";
import "../App.css";

const InspirationsCard = ({ title, text, icon }) => {
  return (
    <div className={styles.inspirationscard_wrap}>
      <img src={icon} />
      <div className={styles.background_card}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InspirationsCard;
