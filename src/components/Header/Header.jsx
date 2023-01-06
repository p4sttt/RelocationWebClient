import React from "react";
import styles from "./Header.module.scss";
import UserAvatar from "./user-fill.svg";
import Settings from "./settings-outline.svg";
import { motion } from "framer-motion";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { singout, token } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.HeaderWrapper}>
        <div className={styles.Header}>
          <div className={styles.Title}>
            <img src={props.avatar ? props.avatar : UserAvatar} alt="avatar" />
            <p>{props.name}</p>
          </div>
          <div>
            {isOpen && (
              <div className={styles.PopUp}>
                <p>Change settings</p>
                <div className={styles.Line}></div>
                <p onClick={() => singout(() => navigate("/"))}>Log out</p>
                <div className={styles.Line}></div>
                <p className={styles.Delete}>Delete account</p>
              </div>
            )}
            <motion.img
              initial={{ opacity: 0.72 }}
              whileHover={{ rotate: 180, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.48 }}
              src={Settings}
              alt="Settings"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
