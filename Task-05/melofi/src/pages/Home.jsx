import Sidebar from "../components/Sidebar";
import "../global.css";
import Songcard from "../components/Songcard";
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [songs, setSongs] = useState([]);
  const [history, setHistory] = useState([]);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    fetch("http://localhost:5000/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:5000/history/${userId}`)
      .then((res) => res.json())
      .then((data) => setHistory(data))
      .catch((err) => console.error(err));
  }, [userId]);

  return (
    <div className="homepage">
      <Sidebar />
      <div className="contents">
        <div className="title1">
          <h1>Recommendation</h1>
        </div>
        <div className="Songcard1">
          {songs.slice(0, 5).map((song, i) => (
            <Songcard
              key={i}
              title={song.title}
              image={song.image}
              artistname={song.artistname}
              previewurl={song.previewurl}
            />
          ))}
        </div>
        <div className="title2">
          <h1>Latest Hits</h1>
        </div>
        <div className="Songcard1">
          {songs.slice(5, 10).map((song, i) => (
            <Songcard
              key={i}
              title={song.title}
              image={song.image}
              artistname={song.artistname}
              previewurl={song.previewurl}
            />
          ))}
        </div>
        <div className="title3">
          <h1>History</h1>
        </div>
        <div className="Songcard1">
          {history.length === 0 && (
            <p>No listening history yet</p>
          )}
          {history.map((song, i) => (
            <Songcard
              key={i}
              image={song.song_image}
              title={song.song_name}
              artistname={song.artist_name}
              previewurl={song.song_url}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
export default Home;
