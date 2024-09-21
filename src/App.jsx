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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [totalPage, setTotalPage] = useState(0);

  const onSubmit = (value) => {
    if (value !== searchValue) {
      setSearchValue(value);
      setPhotos([]);
      setCount(1);
      setTotalPage(0);
    }
  };

  useEffect(() => {
    if (!searchValue)
      return iziToast.show({
        title: "Помилка!",
        message: "geeeceee",
        position: "top",
      });

    const getData = async () => {
      try {
        setLoading(true);
        const data = await getPhotos(searchValue, count);
        setTotalPage(data.total_pages);
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

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery photos={photos} onImageClick={openModal} />
      {loading && (
        <p>
          <LoadingSpinner />
        </p>
      )}

      {count < totalPage && (
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          Завантажити ще
        </button>
      )}

      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
    </>
  );
}

export default App;
