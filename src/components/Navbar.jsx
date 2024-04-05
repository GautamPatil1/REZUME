// Navbar.js

import React from 'react';
import styles from "./styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>  
      <div className={styles.brand}>
        <div className={styles.logo}>
          <img
            src="/logo.png"
            alt="rezumelogo"
            style={{
              display: "inline",
              width: "50px",
              height: "50px",
            }}
          />
        </div>
        <div className={styles.name}>
          <a href="/">REZUME</a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.howItWorks}>
          How it works
        </div>

        <div className={styles.auth}>
          <div className={styles.login}>
            Start Rezume
          </div>
        </div>
      </div>
    </div>
  );
}
