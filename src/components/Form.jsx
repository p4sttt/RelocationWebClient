import React from "react";

export default function Form(props) {
  const [type, setType] = React.useState(props.type);

  function is_password() {
    if (props.is_password) {
      return type === "password" ? (
        <img
          src="./eye-outline.svg"
          alt="eye-open"
          onClick={() => setType("text")}
        />
      ) : (
        <img
          src="./eye-off-outline.svg"
          alt="eye-close"
          onClick={() => setType("password")}
        />
      );
    }
  }

  return (
    <div className="form">
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
