import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";
import { useAuth } from "../../store";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import shallow from "zustand/shallow";

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { singout, token } = useAuth((state) => ({
    singout: state.singout, token: state.token
  }), shallow);
  const navigate = useNavigate();

  const deleteAccount = () => {
    axios({
      url: "/deleteaccount",
      headers: {
        token: token,
      },
    });
    singout();
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className={styles.HeaderWrapper}>
        <div className={styles.Header}>
          <div className={styles.Title}>
            <img
              src={props.img ? props.img : "/icons/user-fill.svg"}
              alt="avatar"
            />
            <p>{props.name}</p>
          </div>
          <div>
            {isOpen && (
              <div className={styles.PopUp}>
                <p>Change settings</p>
                <div className={styles.Line}></div>
                <p
                  onClick={() => {
                    singout();
                    navigate("/", { replace: true });
                  }}
                >
                  Log out
                </p>
                <div className={styles.Line}></div>
                <p className={styles.Delete} onClick={() => deleteAccount()}>
                  Delete account
                </p>
              </div>
            )}
            <motion.img
              initial={{ opacity: 0.72 }}
              whileHover={{ rotate: 180, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.48 }}
              src="/icons/settings-outline.svg"
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
