import "./Lyrics.css";
import Sidebar from "../components/Sidebar";
import "../global.css";
import left from "../assets/left arrow.svg";
import right from "../assets/right arrow.svg";
import playlist from "../assets/playlist.svg";
import lyrics from "../assets/lyrics.svg";
import { Link } from "react-router-dom";
import ToggleImage from "../components/Toggle";
import { useState } from "react";
import Popup from "../components/Popup";

function Lyrics (){

    const [showPopup, setshowPopup] = useState(false);

    return(
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
                    <img onClick={() => alert("playing previous song")} className="leftsvg" src={left} width="2500" alt="left arrow" style = {{cursor:"pointer"}}/>
                    <ToggleImage/>
                    <img onClick={() => alert("playing next song")}className = "rightsvg" src={right} width="2500"  alt="right arrow"style = {{cursor:"pointer"}}/>
                    <img onClick={() => setshowPopup(!showPopup)}className = "playlistsvg" src = {playlist} width="1400" alt = "playlist adder" style = {{cursor:"pointer"}}/>
                    <Link to="/Player">
                    <img className = "lyricssvg" src = {lyrics} width="140" alt = "lyrics button"style = {{cursor:"pointer"}}/>
                    </Link>
                </div>
                {showPopup && (
                    <Popup closePopup={() => setshowPopup(false)} />
                )}
            </div>
        </div>
        
    );
}

export default Lyrics;