import React from "react";
import styles from "./CountryCard.module.scss";
import { useNavigate } from "react-router-dom";

const CountryCard = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.CountryCard}
      onClick={() => navigate(props.name)}
    >
      <img src={props.img} alt={props.name} />
      <div className={styles.Name}>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default CountryCard;
