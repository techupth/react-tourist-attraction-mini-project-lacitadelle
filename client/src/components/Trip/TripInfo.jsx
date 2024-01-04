import { useContext } from "react";
import { SearchContext } from "../../App";

function TripInfo({
  children: thumbnails,
  title,
  description,
  sourceUrl,
  tags,
}) {
  const {setSearchTerm} = useContext(SearchContext);
  const shortDescription = description.slice(0, 100);
  const tagsSpan = tags.map((tag, index) => {
    return <span className="trip-info-tag" onClick={() => setSearchTerm(tag)}>{tag}</span>;
  });
  return (
    <div className="trip-info">
      <h2 className="trip-info-title">{title}</h2>
      <p className="trip-info-description">{shortDescription} ...</p>
      <p className="trip-info-article-link">
        <a href={sourceUrl}>อ่านต่อ</a>
      </p>
      <p>หมวด {tagsSpan}</p>
      {thumbnails}
    </div>
  );
}
export default TripInfo;
