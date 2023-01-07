import React from 'react';
import styles from './Form.module.scss';

const Form = (props) => {
  const [type, setType] = React.useState(props.type);

  function is_password() {
    if (props.is_password) {
      return type === "password" ? (
        <img
          src="/icons/eye-outline.svg"
          alt="eye-open"
          onClick={() => setType("text")}
        />
      ) : (
        <img
          src="/icons/eye-off-outline.svg"
          alt="eye-close"
          onClick={() => setType("password")}
        />
      );
    }
  }

  return (
    <div className={styles.Form}>
      <input
        autoComplete="off"
        placeholder={props.placeholder}
        type={type}
        onChange={(e) => props.onValueChange(e.target.value)}
      />
      {props.icon ? <img src={props.icon} alt={props.icon} /> : false}
      {is_password()}
    </div>
  );
}

export default Form;
