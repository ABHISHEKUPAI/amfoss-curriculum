import Sidebar from "../components/Sidebar";
import logo from "../assets/logoblack.png";
import "../global.css";
import left from "../assets/left arrow.svg";
import right from "../assets/right arrow.svg";
import playpause from "../assets/playpause.svg";
import playlist from "../assets/playlist.svg";
import lyrics from "../assets/lyrics.svg";
import { Link } from "react-router-dom";




function Player() {
    return (
        <>
        <div className="sidebar">
            <Sidebar/>
        </div>
        <div className="title">
            <h1>Playing....</h1>
        </div>
        <div className = "photoplayer">
            <img className = "playerphoto" src={logo} alt="photo"/>
            <div className="playersong">Song Name</div>
            <div className="controls">

                <img onClick={() => alert("playing previous song")} className="leftsvg" src={left} width="2500" alt="left arrow" />
                <img className = "playpausesvg" src={playpause} width="2500" alt="play/pause"/>
                <img className = "rightsvg" src={right} width="2500"  alt="right arrow"/>  
                <img className = "playlistsvg" src = {playlist} width="1400" alt = "playlist adder"/>
                <Link to="/Lyrics">
                <img className = "lyricssvg" src = {lyrics} width="140" alt = "lyrics button"/>
                </Link>
                
            </div>
        </div>
        </>

    );
}
export default Player;
