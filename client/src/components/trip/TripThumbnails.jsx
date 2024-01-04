function TripThumbnails({ thumbnailsSrc }) {
  const thumbnailImages = thumbnailsSrc.map((imgSrc, index) => (
    <div className="trip-thumbnail-container" key={index}>
      <img src={imgSrc} />
    </div>
  ));
  return <div className="trip-thumbnails">{thumbnailImages}</div>;
}
export default TripThumbnails;
