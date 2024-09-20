const ImageCard = ({ photos, ImageModal }) => {
  console.log(photos);

  return (
    <>
      {photos.map((photo) => (
        <li onClick={ImageModal}>
          <img
            key={photo.id}
            src={photo.urls.small_s3}
            alt={photo.alt_description}
            width={300}
            height={300}
          />
        </li>
      ))}
    </>
  );
};

export default ImageCard;
