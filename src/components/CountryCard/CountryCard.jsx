import React from "react";
import styles from "./CountryCard.module.scss";

const CountryCard = (props) => {
  return (
    <div
      className={
        props.isActive
          ? `${styles.CountryCard} ${styles.Active}`
          : styles.CountryCard
      }
      onClick={props.onClick}
    >
      <img src={props.img} alt={props.name} />
      <div className={styles.Name}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default CountryCard;
