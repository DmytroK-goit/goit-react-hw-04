import { useState, useEffect } from "react";
import getPhotos from "./components/apiService/foto";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    if (!value) {
      toast.info("Пошуковий запит не введений");
      return;
    }
    if (value !== searchValue) {
      setSearchValue(value);
      setPhotos([]);
      setCount(1);
      setTotalPage(0);
      setError(null);
    }
  };

  useEffect(() => {
    if (!searchValue) return;

    const getData = async () => {
      try {
        setLoading(true);
        const data = await getPhotos(searchValue, count);
        setTotalPage(data.total_pages);
        toast.success("Успішно виконано!");
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        setError(error.message);
        toast.error(`Сталася помилка: ${error.message}`);
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </>
  );
}

export default App;
