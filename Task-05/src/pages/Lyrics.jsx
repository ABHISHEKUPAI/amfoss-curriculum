import "./Lyrics.css";
import Sidebar from "../components/Sidebar";
import "../global.css";
import left from "../assets/left arrow.svg";
import right from "../assets/right arrow.svg";
import playlist from "../assets/playlist.svg";
import lyrics from "../assets/lyrics.svg";
import { Link } from "react-router-dom";
import ToggleImage from "../components/Toggle";

function Lyrics (){
    return(
        <>
        <div className="lyricswrapper">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="title">
                <h1>Lyrics....</h1>
            </div>
            <div className = "lyricspage">
                <div className= "lyricsbox">Lyrics displays here </div>
                <div className="playersong">Song Name</div>
                <div className="controls">
                    <img className = "leftsvg" src={left} width="2500" alt="left arrow"/>
                    <ToggleImage/>
                    <img className = "rightsvg" src={right} width="2500"  alt="right arrow"/>
                    <img className = "playlistsvg" src = {playlist} width="1400" alt = "playlist adder"/>
                    <Link to = "/Player">
                    <img className = "lyricssvg" src = {lyrics} width="140" alt = "lyrics button"/>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Lyrics;