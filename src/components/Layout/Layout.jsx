import React from 'react';
import styles from './Layout.module.scss';
import { Outlet } from "react-router-dom";

const Layout = () => (
  <div className={styles.Layout}>
    <Outlet />
  </div>
);

export default Layout;
