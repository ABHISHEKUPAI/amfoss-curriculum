import logo from "../assets/logo.png";
import "./Playlisttab.css";
import dustbin from "../assets/delete.svg";
import { Link } from "react-router-dom";

function Playlistbar({ playlistName }) {
return (
    <div className="boxplaylist">
    <Link to="/Playlistholder">
        <button className="buttonplaylistbar">
        <img
            className="photoplaylist"
            src={logo}
            alt="playlist image"
        />
        <p className="nameplaylist">{playlistName}</p>
        </button>
    </Link>

    <img
        onClick={() => alert(`${playlistName} removed`)}
        className="playlistlogoonbar"
        src={dustbin}
        alt="dustbin"
        height="100px"
    />
    </div>
);
}

export default Playlistbar;
