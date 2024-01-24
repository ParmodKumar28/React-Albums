// Navbar component is created here for app name and logo.
// Imports
import styles from "./Navbar.module.css";

// Component Here
export default function Navbar({ formToggle }) {
    // Returning JSX
    return (
        <div className={styles.navbarContainer}>
            <div className={styles.logo}>
                <img src="https://cdn-icons-png.flaticon.com/128/1358/1358994.png" alt="logo" className={styles.logoImage} />
                <p className={styles.item}> Albums</p>
            </div>
            <div className={styles.item} onClick={formToggle}>
                <p>Add Album</p>
            </div>
        </div>
    )
}