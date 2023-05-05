import { useState } from "react";
import MusicSearch from "../Features/MusicSearch";
import useMusicSearch from "../hooks/useMusicSearch";

const MusicSearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, searchMusic] = useMusicSearch();

  const handleSearch = (query) => {
    searchMusic(query);
  };

  return (
    <div>
      <MusicSearch onSearch={handleSearch} />
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
      <h1>Music Search Page</h1>
    </div>
  );
};

export default MusicSearchPage;