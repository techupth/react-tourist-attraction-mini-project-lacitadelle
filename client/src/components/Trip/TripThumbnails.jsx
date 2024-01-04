function TripThumbnails({ thumbnailsSrc }) {
  const thumbnailImages = thumbnailsSrc.slice(1, 4).map((imgSrc, index) => (
    <div className="trip-thumbnail-container" key={index}>
      <img src={imgSrc} />
    </div>
  ));
  return <div className="trip-thumbnails">{thumbnailImages}</div>;
}
export default TripThumbnails;
