// Main parent component is here.
// Imports
import Navbar from "./Components/Navbar/Navbar";
import AlbumsList from "./Components/Albums List/Albums-List";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/loader.jsx";
import Form from "./Components/Form/Form.jsx";
// Toastify notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // States
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

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

  // Handle add album button here to show form.
  const formToggle = () => {
    setFormVisible(!formVisible);
  };

  // Add new album function here.
  const addAlbum = async (userId, albumName) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums",
        {
          method: "POST",
          body: JSON.stringify({
            userId: userId,
            id: albums.length + 1,
            title: albumName,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      const album = await response.json();
      // Adding to state here new album after getting the response.
      setAlbums([album, ...albums]);
      toast.success("New Albums Added Successfully :)");
    } catch (error) {
      console.log(error);
    }
  };

  // Delete album
  const deleteAlbum = async (id) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/id",
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Showing notification
        toast.success("Album Deleted Successfully!");
        setAlbums((prevAlbums) =>
          prevAlbums.filter((album) => album.id !== id)
        );
      } else {
        toast.error("Error Deleting Album!");
      }
    } catch (error) {
      toast.error("Error Deleting Album!");
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar formToggle={formToggle} />
      {/* Showing form conditionally */}
      {formVisible && <Form formToggle={formToggle} addAlbum={addAlbum} />}
      {loading ? (
        <Loader />
      ) : (
        <AlbumsList albums={albums} deleteAlbum={deleteAlbum} />
      )}
    </>
  );
}

export default App;
