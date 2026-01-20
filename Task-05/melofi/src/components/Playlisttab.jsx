import logo from "../assets/logo.png";
import "./Playlisttab.css";
import { Link } from "react-router-dom";

function Playlisttab({ id, playlistName}) {
  return (
    <div className="boxplaylist">
      <Link to={`/playlistholder/${id}`} className="buttonplaylistbar">
        <img className="photoplaylist" src={logo} alt="playlist" />
        <p className="nameplaylist">{playlistName}</p>
      </Link>
    </div>
  );
}

export default Playlisttab;
