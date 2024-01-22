// Main parent component is here.
// Imports
import Navbar from "./Components/Navbar/Navbar";
import AlbumsList from "./Components/Albums List/Albums-List";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/loader.jsx";

function App() {
  // States
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    };

    // Call
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? <Loader /> : <AlbumsList albums={albums} />}
    </>
  );
}

export default App;
