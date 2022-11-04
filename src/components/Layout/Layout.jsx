import React from "react";
import styles from "./Layout.module.css";
import Store from "../../assets/store.svg";
import { Link } from "react-router-dom";

export const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <Link className={styles.header__text} to="/">
            Магазин
          </Link>
          <Link to="/basket">
            <img src={Store} alt="store" />
          </Link>
        </div>
      </header>
      <section className={styles.content}>
        <div className={styles.content__wrapper}>{children}</div>
      </section>
    </div>
  );
};
