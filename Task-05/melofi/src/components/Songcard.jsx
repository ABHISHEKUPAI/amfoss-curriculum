import logo from "../assets/logoblack.png";
import "./Songcard.css";

function Songcard(){
    return(
    <>
    <button className="box">
        <img className="photo" 
            src = {logo} 
            alt= "song image"
        />
        <p className = "name">songname</p>

    </button>
    </>
    );

}
export default Songcard;