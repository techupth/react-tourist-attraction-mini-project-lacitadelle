function TripImage({ children }) {
  return (
    <div className="trip-image-container">
      <img src={children} className="trip-image-element" />
    </div>
  );
}
export default TripImage;
