import Sidebar from "../components/Sidebar";
import "../global.css";
import Songcard from "../components/Songcard";
import { Link } from "react-router-dom";

function Home() {
      return (
        <>
        <div className="playlist">
            <Sidebar />
        <div className="title">
            <h1>Recomendation</h1>
        </div>
        <div className="maindiv">
            <div className="Songcard1">
                <Link to="/Player">
                <Songcard className="s1"/>
                </Link>
                
                <Songcard className="s2"/>
                <Songcard className="s3"/>
            </div>
            <div className="Songcard2">
                <Songcard className="s1"/>
                <Songcard className="s2"/>
                <Songcard className="s3"/>
            </div>
            <div className="Songcard3">
                <Songcard className="s1"/>
                <Songcard className="s2"/>
                <Songcard className="s3"/>
            </div>

        </div>
        </div>
        </> 
    );
}

export default Home;
