// Imports
import React, { useState } from 'react';
import styles from "./Album.module.css";

// Component Here
export default function Album({ id, userId, title }) {
  const [visible, setVisible] = useState(false);

  // Returning JSX
  return (
    <div className={styles.albumContainer} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
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

      {/* Delete update icon container */}
      {visible && <div className={styles.iconContainer}>
        <img src="https://cdn-icons-png.flaticon.com/128/6460/6460112.png" alt="delete" className={styles.icon} />
        <img src="https://cdn-icons-png.flaticon.com/128/12493/12493756.png" alt="update" className={styles.icon} />
      </div>}
    </div>
  );
}
