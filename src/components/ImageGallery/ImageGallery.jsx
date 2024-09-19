const ImageGallery = ({ photos }) => {
  return (
    <div>
      {photos.length > 0 ? (
        <div>
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.urls.small}
              alt={photo.alt_description}
            />
          ))}
        </div>
      ) : (
        <p>Немає результатів для показу.</p>
      )}
    </div>
  );
};

export default ImageGallery;
