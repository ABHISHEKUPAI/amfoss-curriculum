import logo from "../assets/logoblack.png";
import "./Playlistbar.css";
import dustbin from"../assets/delete.svg";
import { Link } from "react-router-dom";

function Playlistbar(){
    return(
    <>
    <div className="boxplaylist">
        
        <Link to ="/Player">
            <button className="buttonplaylistbar">
            <img className="photoplaylist"
                 src = {logo}
                 alt= "playlist image"
            />
            <p className = "nameplaylist">Song Name</p>
            </button>
        </Link>
       
            <img onClick={() => alert("Song removed")}className="playlistlogoonbar"
                 src={dustbin}
                 alt="dustbin"
                 height="100px"
            />
    </div>

    
    </>
    );

}
export default Playlistbar;