// Imports
import React from 'react';
import styles from "./Album.module.css";

// Component Here
export default function Album({ id, userId, title }) {
  // Returning JSX
  return (
    <div className={styles.albumContainer}>
      <div className={styles.imageContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/8371/8371705.png"
          alt="img"
          className={styles.image}
        />
      </div>
      <div className={styles.albumInfo}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}
