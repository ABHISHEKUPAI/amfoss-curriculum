import Sidebar from "../components/Sidebar";
import "../global.css";
import "./Playlist.css";
import add from "../assets/add.svg";
import Playlisttab from "../components/Playlisttab";
import { useEffect, useState } from "react";

function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:5000/playlists?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {setPlaylists(data);})
      .catch((err) => {console.error(err);});
  }, [userId]);

  const addPlaylist = async () => {
    const name = prompt("Enter playlist name");
    if (!name) return;

    const res = await fetch("http://localhost:5000/playlists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, name }),
    });
    
    await res.json();

    fetch(`http://localhost:5000/playlists?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => setPlaylists(data));
  };


  return (
    <div className="playlistpage">
      <Sidebar />

      <div className="contents">
        <div className="titleplaylist">
          <h1>Playlist</h1>
          <img
            src={add}
            width="80vh"
            alt="add"
            onClick={addPlaylist}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="maindivplaylist">
          {playlists.map((p) => (
            <Playlisttab
              id={p.id}
              playlistName={p.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
