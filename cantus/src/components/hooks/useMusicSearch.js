import { useState } from "react";

const useMusicSearch = () => {
  const [results, setResults] = useState([]);

  const searchMusic = async (query) => {
    try {
      const response = await fetch(`https://localhost:7008/api/SpotifyMusic/search?query=${query}&type=track`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  return [results, searchMusic];
};

export default useMusicSearch;