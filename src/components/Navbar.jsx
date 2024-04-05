// Navbar.js

import React from "react";
import styles from "./styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <a href="/">
            <img
              src="/logo.png"
              alt="rezumelogo"
              style={{
                display: "inline",
                width: "50px",
                height: "50px",
              }}
            />
          </a>
        </div>
        <div className={styles.name}>
          <a href="/">REZUME</a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.howItWorks}>Features</div>

        <div className={styles.auth}>
          <div className={styles.login}>Ayyo Rezume</div>
        </div>
      </div>
    </div>
  );
}
