import { FaLink } from "react-icons/fa6";

function Trip({ children }) {
  return (
    <div className="trip-container">
      {children}
      <div className="trip-link-copy">
        <FaLink />
      </div>
    </div>
  );
}
export default Trip;
