import { useState, useEffect } from "react";
import getPhotos from "./components/apiService/foto";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const onSubmit = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) return;

    const getData = async () => {
      try {
        const data = await getPhotos(searchValue, 1);
        setPhotos(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [searchValue]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery photos={photos} />
    </>
  );
}

export default App;
