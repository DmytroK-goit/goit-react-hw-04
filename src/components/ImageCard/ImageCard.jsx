const ImageCard = ({ photos, onImageClick }) => {
  return (
    <>
      {photos.map((photo) => (
        <li>
          <img
            key={photo.id}
            src={photo.urls.small_s3}
            alt={photo.alt_description}
            width={300}
            height={300}
            onClick={() => onImageClick(photo.urls.small)}
          />
        </li>
      ))}
    </>
  );
};

export default ImageCard;
