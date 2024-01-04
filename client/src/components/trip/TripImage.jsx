function TripImage({ children }) {
  return (
    <div className="trip-image">
      <img src={children} />
    </div>
  );
}
export default TripImage;
