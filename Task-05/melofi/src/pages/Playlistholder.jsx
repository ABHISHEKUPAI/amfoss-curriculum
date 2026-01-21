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

  const handleDeleteSong = (songId) => {
    fetch(`http://localhost:5000/playlist/song/${songId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete song");
        }

        setSongs((prevSongs) =>
          prevSongs.filter((song) => song.id !== songId)
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="playlistholderpage">
      <Sidebar />

      <div className="title1">
        <h1>Playlist Songs</h1>
      </div>

      <div className="subdivolaylistholder">
        {songs.length === 0 && (
          <p>Add songs to this playlist to view them here</p>
        )}

        {songs.map((song) => (
          <Playlistbar
            key={song.id}        
            song={song}
            onDelete={handleDeleteSong} 
          />
        ))}
      </div>
    </div>
  );
}

export default Playlistholder;
