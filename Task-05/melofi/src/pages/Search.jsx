import Sidebar from "../components/Sidebar";
import "./Search.css";
import "../global.css";
import Songcard from "../components/Songcard";
import { useEffect, useState } from "react";

function Search() {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetch(`http://localhost:5000/songs?query=${searchTerm}`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });

    return () => controller.abort();
  }, [searchTerm]);

  return (
    <div className="searchpagewrapper">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="searchtitle">
        <h1>Search Results</h1>
      </div>

      <input
        className="searchbar"
        type="search"
        placeholder="Search songs or artists"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="maindivsearch">

            <div className="userhistorybox">
                {songs.map((song, index) => (
                    <Songcard
                    key={index}
                    title={song.title}
             // ✅ IMPORTANT: guard clause        image={song.image}
                    artistname={song.artistname}
                    previewurl={song.previewurl}
                    />
            ))}
            </div>
      </div>
    </div>
  );
}

export default Search;
