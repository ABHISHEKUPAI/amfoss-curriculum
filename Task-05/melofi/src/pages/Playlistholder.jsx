import Sidebar from "../components/Sidebar";
import "../global.css";
import "./Playlistholder.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Playlistbar from "../components/Playlistbar";

function Playlistholder() {
  const { playlistId } = useParams();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/playlist/${playlistId}/songs`)
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error(err));
  }, [playlistId]);

  return (
    <div className="playlistholderpage">
      <Sidebar />

      <div className="title1">
        <h1>Playlist Songs</h1>
      </div>

      <div className="subdivolaylistholder">
        {songs.length === 0 && <p>add songs to this playlist to view them here </p>}

        {songs.map((song) => (
          <Playlistbar
            key={song.id}
            type="song"
            song={song}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlistholder;
