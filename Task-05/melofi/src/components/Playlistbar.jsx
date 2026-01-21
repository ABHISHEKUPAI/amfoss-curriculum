import { Link } from "react-router-dom";
import "./Playlistbar.css";
import dustbin from "../assets/delete.svg";

function Playlistbar({ song, onDelete }) {
  return (
    <div className="boxplaylist">
      <Link
        to="/player"
        state={{
          title: song.title,
          image: song.image,
          artistname: song.artist,
          previewurl: song.song_url,
        }}
        className="buttonplaylistbar"
      >
        <img
          className="photoplaylist"
          src={song.image}
          alt={song.title}
        />
        <p className="nameplaylist">{song.title}</p>
      </Link>

      <img
        src={dustbin}
        alt="delete"
        className="dustbin"
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          e.preventDefault();    
          e.stopPropagation();   
          onDelete(song.id);    
        }}
      />
    </div>
  );
}

export default Playlistbar;
