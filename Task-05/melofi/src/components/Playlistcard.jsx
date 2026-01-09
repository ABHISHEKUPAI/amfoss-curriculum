import logo from "../assets/logo.png";
import "./Songcard.css";

function Songcard(){
    return(
    <>
    <button className="box">
        <img className="photo" 
            src = {logo} 
            alt= "playlist image"
        />
        <p className = "name">Playlist </p>

    </button>
    </>
    );

}
export default Songcard;