import logo from "../assets/logo.png";
import profile from "../assets/profilephoto.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";


function Sidebar() {
    return (
        <div className="sidebar">
            <Link to = "/Profile">
            <img 
                src={profile} 
                alt="Profile"
                className="profile-img"  
            />
            </Link>
            <div className = "btngrp">
                <Link to="/Search">
                <button className="btn-search">Search</button>
                </Link>
                <Link to="/Home">
                <button className="btn-home">Home</button>
                </Link>
                <Link to="/Playlist">
                <button className="btn-playlist">Playlist</button>
                </Link>
            </div> 
            <img 
                src={logo} 
                alt="App Logo"
                className="logo-img"
            />
        </div>
    );
}
export default Sidebar;
