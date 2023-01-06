import React from "react";
import { motion } from "framer-motion";

export default function Header(props) {
  return (
    <div className="header-container">
      <div className="header">
        <div className="user-info">
          {props.ava ? (
            <img src={props.ava} alt="avatar" className="avatar" />
          ) : (
            <img src="/user-fill.svg" alt="avatar" className="avatar" />
          )}
          <h3>{props.name}</h3>
        </div>
        <motion.img
          initial={{ opacity: 0.72 }}
          whileHover={{ rotate: 180, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.48 }}
          src="/settings-outline.svg"
          alt="settings-outline"
          className="settings-logo"
        />
      </div>
    </div>
  );
}
