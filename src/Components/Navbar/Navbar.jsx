// Navbar component is created here for app name and logo.
// Imports
import styles from "./Navbar.module.css";

// Component Here
export default function Navbar(){
    // Returning JSX
    return(
        <div className={styles.navbarContainer}>
            <p className={styles.item}>Albums</p>
            <p className={styles.item}>Add Album</p>
        </div>
    )
}