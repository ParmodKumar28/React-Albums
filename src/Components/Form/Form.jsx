// Form component is created here to show the form for add or update album.
// Imports
import { useState } from "react";
import styles from "./Form.module.css";

// Component Here
export default function Form({ formToggle, addAlbum }) {
    // States
    const [userId, setUserId] = useState("");
    const [albumName, setAlbumName] = useState("");

    // Event handler
    const onSubmit = (event) => {
        event.preventDefault();
        // Calling here
        addAlbum(userId, albumName);
        setUserId(0);
        setAlbumName("");
    }

    // Returning JSX
    return (
        // Form container
        <div className={styles.formContainer}>
            {/* Form */}
            <form className={styles.form}>
                <input type="number" placeholder="User Id..." onChange={(event) => setUserId(event.target.value)} value={userId}/>
                <input type="text" placeholder="Album name" onChange={(event) => setAlbumName(event.target.value)} value={albumName}/>
                <button type="submit" onClick={(event) => onSubmit(event)}>Add Album</button>
            </form>

            {/* Close form */}
            <button type="button" onClick={formToggle}>Close</button>
        </div>
    )
}