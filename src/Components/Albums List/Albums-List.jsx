// Albums List component is created here to show all albums.
// Imports
import { useEffect, useState } from "react";
import styles from "./Albums-List.module.css";

// Component Here
export default function AlbumsList(){
    // States
    const[albums, setAlbums] = useState([]);

    // Side effects
    useEffect(() => {
        // Fetching data here
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/albums");
            const albums = await response.json();
            // Setting state
            setAlbums(albums);
        }
    }, []);

    // Returning JSX
    return(
        <>
        </>
    )
}