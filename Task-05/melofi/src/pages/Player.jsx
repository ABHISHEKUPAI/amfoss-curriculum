import Sidebar from "../components/Sidebar";
import logo from "../assets/logoblack.png";
import "../global.css";
import { useState } from "react";
import left from "../assets/left arrow.svg";
import right from "../assets/right arrow.svg";
import "./Player.css";
import playlist from "../assets/playlist.svg";
import lyrics from "../assets/lyrics.svg";
import { Link } from "react-router-dom";
import ToggleImage from "../components/Toggle";
import Popup from "../components/Popup";

function Player() {

    const [showPopup, setshowPopup] = useState(false);

    return (
        <>
        <div className="maindivplayer">
            
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
                    <img onClick={() => alert("playing previous song")} className="leftsvg" src={left} width="2500" alt="left arrow" style = {{cursor:"pointer"}}/>
                    <ToggleImage/>
                    <img onClick={() => alert("playing next song")}className = "rightsvg" src={right} width="2500"  alt="right arrow"style = {{cursor:"pointer"}}/>
                    <img onClick={() => setshowPopup(!showPopup)}className = "playlistsvg" src = {playlist} width="1400" alt = "playlist adder" style = {{cursor:"pointer"}}/>
                    <Link to="/Lyrics">
                    <img className = "lyricssvg" src = {lyrics} width="140" alt = "lyrics button"style = {{cursor:"pointer"}}/>
                    </Link>
            
                </div>
                {showPopup && (
                    <Popup closePopup={() => setshowPopup(false)} />
                )}
            </div>
        </div>
        </>

    );
}
export default Player;
