import React from "react";
import styles from "./NewsCard.module.scss";

const NewsCard = (props) => (
  <a
    className={styles.NewsCard}
    href={props.url}
    target="_blank"
    rel="noreferrer"
  >
    <img src={props.img} alt={props.title} />
    <div className={styles.Title}>
      <p>{props.title}</p>
    </div>
  </a>
);

export default NewsCard;
