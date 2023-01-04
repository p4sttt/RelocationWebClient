import React from "react";
import "./components.scss";

export default function ErrorBox(props) {
  const handleClick = () => {
    const element = document.getElementsByClassName("error");
    console.log(element[0])
  };

  return props.error ? (
    <div className="error">
      {/* <img
        src="./close-outline.svg"
        alt="close-outline"
        onClick={handleClick}
      /> */}
      <h1>Error</h1>
      <p>{props.error}</p>
    </div>
  ) : (
    <></>
  );
}
