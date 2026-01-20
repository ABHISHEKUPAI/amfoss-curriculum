import Sidebar from "../components/Sidebar";
import "../global.css";
import { useState, useEffect, useRef } from "react";
import left from "../assets/left arrow.svg";
import right from "../assets/right arrow.svg";
import "./Player.css";
import playlist from "../assets/playlist.svg";
import { useLocation, Navigate } from "react-router-dom";
import ToggleImage from "../components/Toggle";
import Popup from "../components/Popup";

function Player() {
  const { state } = useLocation();
  const audioRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const { title, image, artistname, previewurl } = state;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Autoplay blocked");
      });
    }
  }, [previewurl]);

  return (
    <div className="maindivplayer">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="subdivplayer">
        <img className="playerphoto" src={image} alt={title} />
        <div className="playersong">
          {title} <br/> ({artistname})
        </div>   
        <audio ref={audioRef} src={previewurl} controls hidden />
        <div className="controls">
          <img
            onClick={() => alert("The Previous song navigation is currently unavailable ")}
            className="leftsvg"
            src={left}
            width="150vw"
            alt="previous" 
            style={{ cursor: "pointer" }}
          />
          <ToggleImage audioRef={audioRef} />
          <img
            onClick={() => alert("The Next song navigation is currently unavailable")}
            className="rightsvg"
            src={right}
            alt="next"
            width="150vh"
            style={{ cursor: "pointer" }}
          />
          <img
            onClick={() => setShowPopup(!showPopup)}
            className="playlistsvg"
            src={playlist}
            alt="playlist"
            width="100vh"
            style={{ cursor: "pointer" }}
          />
        </div>
        {showPopup && (
                  <Popup
                    song={{
                      title,
                      artistname,
                      image,
                      previewurl,
                    }}
                    onClose={() => setShowPopup(false)}
                  />
                )}
      </div>
    </div>
  );
}

export default Player;
