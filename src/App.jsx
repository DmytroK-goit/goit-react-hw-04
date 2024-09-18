import { useState, useEffect } from "react";
import getPhotos from "./components/apiService/foto";
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
        setPhotos(data.photos);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [searchValue]);
  getPhotos();

  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={onSubmit} />
      <PhotosGallery photos={photos} />
      {error && <Text textAlign="center">{error}</Text>}
    </>
  );
}

export default App;
