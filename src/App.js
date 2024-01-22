// Main parent component is here.
// Imports
import Navbar from "./Components/Navbar/Navbar";
import AlbumsList from "./Components/Albums List/Albums-List";
import { useEffect, useState } from "react";

function App() {
  // States
  const [albums, setAlbums] = useState([]);

  // Side effects
  useEffect(() => {
    // Fetching data here
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums"
      );
      const albums = await response.json();
      // Setting state
      setAlbums(albums);
    };
  }, []);


  return (
    <>
      <Navbar />
      <AlbumsList />
    </>
  );
}

export default App;
