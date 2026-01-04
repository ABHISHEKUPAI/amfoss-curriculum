import Playlistcard from "../components/Playlistcard";
import Sidebar from "../components/Sidebar";
import "../global.css";
import { Link } from "react-router-dom";
import "./Playlist.css";
import devotional from"../assets/devotional.png";
import english from "../assets/english.png";
import favorates from "../assets/favorates.png";
import happyvibes from"../assets/happyvibes.png";
import hindi from "../assets/hindi.png";
import motivational from "../assets/motivational.png";
import logo from "../assets/logo.png";
import sadvibes from "../assets/sadvibes.png";
import me from "../assets/sigmavibes.png"


function Playlist() {
    return (
        <>
        <div className="playlistpage">
        <Sidebar />

        <div className="contents">
        <div className="title1">
            <h1>Playlist</h1>
        </div>
        <div className="maindivplaylist">
            <div className="playlistcard1">
                <Link to="/Playlistholder">
                    <Playlistcard image={devotional} title="Devotional" />
                </Link>
                <Playlistcard image={motivational} title="Motivational" />
                <Playlistcard image={favorates} title="Favorates" />
            </div>
            <div className="playlistcard2">
                <Link to="/Playlistholder">
                    <Playlistcard image={hindi} title="Hindi" />
                </Link>
                <Playlistcard image={english} title="English" />
                <Playlistcard image={sadvibes} title="Sad Songs" />
            </div>
            <div className="playlistcard3">
                <Link to="/Playlistholder">
                    <Playlistcard image={happyvibes} title="Happy Songs" />
                </Link>
                <Playlistcard image={me} title="Sigma Songs" />
                <Playlistcard image={logo} title="custom " />
            </div>

        </div>

        </div>
    </div>
        </>
        
    );
}

export default Playlist;
