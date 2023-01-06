import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AgencyCard.module.scss';

const AgencyCard = (props) => (
  <Link to={`${props.name}`} className={styles.AgencyCard}>
    <div className={styles.title}>
      <img src={props.logo ? props.logo : "/user-fill.svg"} alt={props.name}/>
      <h1>{props.name}</h1>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quaerat voluptatibus aut quam doloremque quo consequatur voluptate. Sint, necessitatibus!</p>
  </Link>
);

export default AgencyCard;
