// Main parent component is here.
// Imports
import Navbar from "./Components/Navbar/Navbar";
import AlbumsList from "./Components/Albums List/Albums-List";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader/loader.jsx";
import Form from "./Components/Form/Form.jsx";
import { v4 as uuidv4 } from "uuid";
// Toastify notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // States
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [albumToUpdateData, setAlbumToUpdateData] = useState({});
  const [update, setUpdate] = useState(false);

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

  // Handle to show form here.
  const formToggle = () => {
    setFormVisible(!formVisible);
    if (update) {
      setUpdate(false);
    }
  };

  // Add new album function here.
  const addAlbum = async (userId, albumName) => {
    try {
      // Generate a unique ID using uuid
      const uniqueId = uuidv4();

      // Passing the POST request to add new album
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums",
        {
          method: "POST",
          body: JSON.stringify({
            userId: userId,
            id: uniqueId,
            title: albumName,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const album = await response.json();
      album.id = uniqueId;
      // Adding to state here new album after getting the response.
      setAlbums([album, ...albums]);
      // Showing notifications
      toast.success("New Albums Added Successfully :)");
      formToggle();
    } catch (error) {
      toast.error("Error Adding Album!");
      console.log(error);
    }
  };

  // Delete album
  const deleteAlbum = async (id) => {
    try {
      // Passing DELETE Request to delete the album
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${id}`,
        {
          method: "DELETE",
        }
      );
      // If response is ok then showing notification and updating state
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

  // Update album Show form and data
  const updateAlbum = async ({ id, userId, title }) => {
    setUpdate(true);
    setFormVisible(true);
    setAlbumToUpdateData({ id, userId, title });
  };

  // Updating the album here
  const updateAlbumData = async ({ id, userId, albumName }) => {
    try {
      if (id <= 100) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              id: id,
              userId: userId,
              title: albumName,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );

        const updatedAlbum = await response.json();
        setAlbums(
          albums.map((album) => {
            if (album.id === id) {
              return updatedAlbum;
            } else {
              return album;
            }
          })
        );
        toast.success("Album Updated Successfully!");
        // Close the form
        formToggle();
      } else {
        setAlbums(
          albums.map((album) => {
            if (album.id === id) {
              return {
                id: id,
                userId: userId,
                title: albumName,
              };
            } else {
              return album;
            }
          })
        );
        toast.success("Album Updated Successfully!");
        // Close the form
        formToggle();
      }
    } catch (error) {
      toast.error("Error Updating Album");
      console.log(error);
    }
  };

  // Returning JSX
  return (
    <>
      {/* Notification Component */}
      <ToastContainer />
      <Navbar formToggle={formToggle} />
      {/* Showing form conditionally */}
      {formVisible && (
        <Form
          formToggle={formToggle}
          addAlbum={addAlbum}
          update={update}
          albumToUpdateData={albumToUpdateData}
          updateAlbumData={updateAlbumData}
        />
      )}
      {loading ? (
        <Loader />
      ) : (
        <AlbumsList
          albums={albums}
          deleteAlbum={deleteAlbum}
          updateAlbum={updateAlbum}
        />
      )}
    </>
  );
}

// Exporting App
export default App;
