import { useState, useEffect } from "react";
import getPhotos from "./components/apiService/foto";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const onSubmit = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {});

  useEffect(() => {
    if (!searchValue) return;

    const getData = async () => {
      try {
        const data = await getPhotos(searchValue, count);
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [searchValue, count]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery photos={photos} />
      {loading && <p>Завантаження...</p>}
      {!loading && photos.length > 0 && (
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Завантажити ще
        </button>
      )}
    </>
  );
}

export default App;
