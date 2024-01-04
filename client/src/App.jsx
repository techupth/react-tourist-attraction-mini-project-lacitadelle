import "./App.css";
import Trip from "./components/Trip";
import Search from "./components/Search";
import { createContext, useState } from "react";

const SearchContext = createContext({});

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const tripsList = searchResults.map((trip) => {
    return (
      <Trip key={trip.eid}>
        <Trip.Image>{trip.photos[0]}</Trip.Image>
        <Trip.Info
          title={trip.title}
          description={trip.description}
          sourceUrl={trip.url}
          tags={trip.tags}
        >
          <Trip.Thumbnails thumbnailsSrc={trip.photos} />
        </Trip.Info>
        <Trip.LinkCopy url={trip.url} />
      </Trip>
    );
  });

  console.log(searchResults);
  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchResults,
        setSearchResults,
        isSearching,
        setIsSearching,
      }}
    >
      <div className="App">
        <Search />
        {tripsList}
      </div>
    </SearchContext.Provider>
  );
}

export default App;
export { SearchContext };
