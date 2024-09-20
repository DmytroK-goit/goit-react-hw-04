import { useState, useEffect } from "react";
import getPhotos from "./components/apiService/foto";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import iziToast from "izitoast";
import ImageModal from "./components/ImageModal/ImageModal";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const onSubmit = (value) => {
    if (value !== searchValue) {
      setSearchValue(value);
      setPhotos([]);
      setCount(1);
    }
  };

  useEffect(() => {
    if (!searchValue) return;

    const getData = async () => {
      try {
        setLoading(true);
        const data = await getPhotos(searchValue, count);
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        setError(error.message);
        iziToast.error({
          title: "Помилка!",
          message: error.message,
          position: "topLeft",
        });
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [searchValue, count]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery photos={photos} ImageModal={ImageModal} />
      {loading && (
        <p>
          <LoadingSpinner />
        </p>
      )}
      {!loading && photos.length > 0 && (
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Завантажити ще
        </button>
      )}
    </>
  );
}

export default App;
