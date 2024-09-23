import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos, onImageClick, index }) => {
  return (
    <ul className={s.ul}>
      {photos.length > 0 ? (
        photos.map((photo, index) => (
          <li key={`${photo.id}-${index}`}>
            <ImageCard photo={photo} onImageClick={onImageClick} />
          </li>
        ))
      ) : (
        <p>Немає результатів для показу.</p>
      )}
    </ul>
  );
};

export default ImageGallery;
