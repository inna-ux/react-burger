import React from "react";
import { Link } from "react-router-dom";

import styles from "./not-found.module.css";

export function NotFound404() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Oops! 404 Error</h1>
          <p>Запрошенная вами страница не существует</p>
          <br />
          <br />
          <p>
            проверьте адрес или перейдите на{" "}
            <Link to="/" className={styles.link}>
              Главную
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
