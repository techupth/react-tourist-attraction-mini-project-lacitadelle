function TripInfo({ children: thumbnails, title, description, sourceUrl }) {
  const shortDescription = description.slice(0, 100);

  return (
    <div className="trip-info">
      <h2 className="trip-info-title">{title}</h2>
      <p className="trip-info-description">{shortDescription} ...</p>
      <p className="trip-info-article-link">
        <a href={sourceUrl}>อ่านต่อ</a>
      </p>
      {thumbnails}
    </div>
  );
}
export default TripInfo;
