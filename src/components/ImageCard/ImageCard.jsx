const ImageCard = ({ photos }) => {
  return (
    <div>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.urls.small}
          alt={photo.alt_description}
          width={300}
          height={300}
        />
      ))}
    </div>
  );
};

export default ImageCard;
