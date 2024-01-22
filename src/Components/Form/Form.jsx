// Form component is created here to show the form for add or update album.
// Imports
import styles from "./Form.module.css";

// Component Here
export default function Form() {
    // Returning JSX
    return (
        <div className={styles.formContainer}>
            <form>
                <input type="number" placeholder="User Id..."/>
                <input type="text" placeholder="Album name"/>
                <button type="submit">Add Album</button>
            </form>
        </div>
    )
}