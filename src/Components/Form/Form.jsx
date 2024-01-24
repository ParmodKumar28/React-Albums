// Form component is created here to show the form for add or update album.
// Imports
import { useState } from "react";
import styles from "./Form.module.css";
import { toast } from "react-toastify";

// Component Here
export default function Form({ formToggle, addAlbum, albumToUpdateData, update, updateAlbumData }) {
    // States
    const [userId, setUserId] = useState(update ? albumToUpdateData.userId : "");
    const [albumName, setAlbumName] = useState(update ? albumToUpdateData.title : "");

    // Event handler
    const onSubmit = (event) => {
        event.preventDefault();
        // Calling here
        if (userId > 0 && albumName !== "") {
            if (update) {
                updateAlbumData({ userId, albumName });
            }
            else {
                addAlbum(userId, albumName);
            }
        }
        else {
            toast.error("Enter Valid Data!");
        }
        // Clearing states
        setUserId(0);
        setAlbumName("");
    }

    // Returning JSX
    return (
        // Form container
        <div className={styles.formContainer}>
            {/* Form */}
            <form className={styles.form}>
                <input type="number" placeholder="User Id..." onChange={(event) => setUserId(event.target.value)} value={userId} required />
                <input type="text" placeholder="Album name" onChange={(event) => setAlbumName(event.target.value)} value={albumName} required />
                {update ? <button type="submit" onClick={(event) => onSubmit(event)}>Update</button>
                    : <button type="submit" onClick={(event) => onSubmit(event)}>Add Album</button>
                }
            </form>
            {/* Close form */}
            <button type="button" onClick={formToggle}>Close</button>
        </div>
    )
}