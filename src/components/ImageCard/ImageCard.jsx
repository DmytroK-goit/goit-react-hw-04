const ImageCard = ({ photo, onImageClick }) => {
  return (
    <>
      <div>
        <img
          src={photo.urls.small_s3}
          alt={photo.alt_description}
          width={300}
          height={300}
          onClick={() => onImageClick(photo.urls.small)}
        />
      </div>
    </>
  );
};

export default ImageCard;
