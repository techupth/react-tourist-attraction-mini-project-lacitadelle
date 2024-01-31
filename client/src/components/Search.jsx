import { useContext, useEffect } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import axios from "axios";
import { SearchContext } from "../App";

function Search() {
  async function fetchTrips(searchTerm = "") {
    const result = await axios.get(
      "http://localhost:4001/trips/?keywords=" + searchTerm
    );
    return result.data.data;
  }

  const { searchTerm, setSearchTerm, setSearchResults, setIsSearching } =
    useContext(SearchContext);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchTrips(debouncedSearchTerm).then((data) => {
        setSearchResults(data);
        setIsSearching(false);
      });
    } else {
      fetchTrips().then((data) => {
        setSearchResults(data);
        setIsSearching(false);
      });
    }
  }, [debouncedSearchTerm]);

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="search-box">
      <label htmlFor="search-input" className="search-box-instruction">
        ค้นทาที่เที่ยว
      </label>
      <input
        className="search-input"
        id="search-input"
        name="search-input"
        placeholder="หาที่เที่ยวแล้วไปด้วยกัน..."
        value={searchTerm}
        onChange={handleInputChange}
      ></input>
    </div>
  );
}
export default Search;
