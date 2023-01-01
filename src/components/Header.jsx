import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <div className="user-info">
        {props.ava ? (
          <img src={props.ava} alt="avatar" className="avatar"/>
        ) : (
          <img src="/user-fill.svg" alt="avatar" className="avatar"/>
        )}
        <h3>{props.name}</h3>
      </div>
      <img
        src="/settings-outline.svg"
        alt="settings-outline"
        className="settings-logo"
      />
    </div>
  );
}
