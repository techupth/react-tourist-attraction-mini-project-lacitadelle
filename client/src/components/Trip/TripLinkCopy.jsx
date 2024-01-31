import { FaLink } from "react-icons/fa6";
import { useCopyToClipboard } from "@uidotdev/usehooks";

function TripLinkCopy({ url }) {
  const [copiedLink, sendToClipboard] = useCopyToClipboard();

  return (
    <div className="trip-link-copy" onClick={() => sendToClipboard(url)}>
      <FaLink />
    </div>
  );
}
export default TripLinkCopy;
