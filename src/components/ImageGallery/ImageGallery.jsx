import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos, ImageModal }) => {
  return (
    <ul className={s.ul}>
      {photos.length > 0 ? (
        <ImageCard photos={photos} ImageModal={ImageModal} />
      ) : (
        <p>Немає результатів для показу.</p>
      )}
    </ul>
  );
};

export default ImageGallery;
