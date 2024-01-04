function TripThumbnails({ thumbnailsSrc }) {
  const thumbnailImages = thumbnailsSrc.map((imgSrc, index) => (
    <img src={imgSrc} className="thumbnails-img" key={index} />
  ));
  return <div className="trip-thumbnails-container">{thumbnailImages}</div>;
}
export default TripThumbnails;
