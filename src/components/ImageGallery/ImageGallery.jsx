import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={s.ul}>
      {photos.length > 0 ? (
        <ImageCard photos={photos} onImageClick={onImageClick} />
      ) : (
        <p>Немає результатів для показу.</p>
      )}
    </ul>
  );
};

export default ImageGallery;
