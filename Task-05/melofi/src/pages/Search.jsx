import Sidebar from "../components/Sidebar";
import "./Search.css";
import "../global.css";
import Songcard from "../components/Songcard";
import { Link } from "react-router-dom";


function Search() {
    return (
    <>
        <div className = "searchpagewrapper">
            <div className="sidebar">
            <Sidebar />
            </div>
            <div className="userhistorytitle">
                <h1>User history</h1>
            </div>
            <div className="latestsongstitle">
                <h1>Latest Songs</h1>
            </div>
            <input className="searchbar"
                    type="search"
                    placeholder="🔎 Search" >
            </input>
            <div className="maindivsearch">
                <div className="userhistory">
                    <Link to= "/Player">
                    <Songcard className="s1"/>
                    </Link>
                    <Songcard className="s2"/>
                    <Songcard className="s3"/>
                    <Songcard className="s4"/>
                </div>
                <div className="Latestsongs">
                    <Link to= "/Player">
                    <Songcard className="s6"/>
                    </Link>
                    <Songcard className="s7"/>
                    <Songcard className="s8"/>
                    <Songcard className="s9"/>
                </div>
            
            </div>
        </div>
    </>   
    );
}

export default Search;
