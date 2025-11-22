import "./Lyrics.css";
import Sidebar from "../components/Sidebar";
import "../global.css";
import left from "../assets/left arrow.svg";
import right from "../assets/right arrow.svg";
import playpause from "../assets/playpause.svg";
import playlist from "../assets/playlist.svg";
import lyrics from "../assets/lyrics.svg";
import { Link } from "react-router-dom";

function Lyrics (){
    return(
        <>
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
                <img className = "playpausesvg" src={playpause} width="2500" alt="play/pause"/>
                <img className = "rightsvg" src={right} width="2500"  alt="right arrow"/>  
                <img className = "playlistsvg" src = {playlist} width="1400" alt = "playlist adder"/>
                <Link to = "/Player">
                <img className = "lyricssvg" src = {lyrics} width="140" alt = "lyrics button"/>
                </Link>
                
            </div>
        </div>
        </>


    );
}

export default Lyrics;