import "../global.css";
import "./Popup.css";
import { useEffect, useState } from "react";

function Popup({ song, onClose }) {
  const [playlistspop, setPlaylistspop] = useState([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:5000/playlists?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => setPlaylistspop(data))
      .catch((err) => console.error(err));
  }, [userId]);
  const addToPlaylist = (playlistId) => {
    fetch("http://localhost:5000/playlist/add-song", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        playlist_id: playlistId,
        title: song.title,
        artistname: song.artistname,
        image: song.image,
        previewurl: song.previewurl,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        onClose(); 
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="maindivpopup">
      {playlistspop.map((p) => (
        <button
          key={p.id}
          className="popupbutton"
          onClick={() => addToPlaylist(p.id)}
        >
          {p.name}
        </button>
      ))}
    </div>
  );
}

export default Popup;
