// Albums List component is created here to show all albums.
// Imports
import { useEffect, useState } from "react";
import styles from "./Albums-List.module.css";
import Album from "../Album/Album";

// Component Here
export default function AlbumsList({ albums }) {
    // Returning JSX
    return (
        <>
            {/* Mapping all albums to the album component */}
            <div className={styles.albumContainer}>
                {albums.map((album) => (
                    <Album key={album.id} id={album.id} userId={album.userId} title={album.title} />
                ))}
            </div>

        </>
    )
}