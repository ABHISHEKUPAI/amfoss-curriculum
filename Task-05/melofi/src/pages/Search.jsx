import Sidebar from "../components/Sidebar";
import "./Search.css";
import "../global.css";
import Songcard from "../components/Songcard";
import { Link } from "react-router-dom";
import search from "../assets/search.svg";

function Search() {
    return (
    <>
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
               placeholder="    Search" >
        </input>
        <div className="searchsvg">
            <img src={search} width="60px" alt = "searchimage"/>
        </div>
        <div className="maindivsearch">   
            <div className="userhistory">
                <Link to= "/Player">
                <Songcard className="s1"/>
                </Link>
                <Songcard className="s2"/>
                <Songcard className="s3"/>
                <Songcard className="s4"/>
                <Songcard className="s5"/>
            </div>     
            <div className="Latestsongs">
                <Link to= "/Player">
                <Songcard className="s6"/>
                </Link>
                <Songcard className="s7"/>
                <Songcard className="s8"/>
                <Songcard className="s9"/>
                <Songcard className="s10"/> 
            </div>
            
        </div>
    </>
       
    );
}

export default Search;
