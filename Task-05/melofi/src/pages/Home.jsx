import Sidebar from "../components/Sidebar";
import "../global.css";
import Songcard from "../components/Songcard";
import { Link } from "react-router-dom";
import Playlistcard from "../components/Playlistcard";
import "./Home.css";
import motivational from "../assets/motivational.png";
import favorates from "../assets/favorates.png";
import happyvibes from"../assets/happyvibes.png";
import devotional from"../assets/devotional.png";

function Home() {
  return (
    <>
    <div className="homepage">
      
        <Sidebar />
        <div className="contents">
          <div className="title1">
            <h1>Recommendation</h1>
          </div>
          <div className="title2">
            <h1>Latest Hits</h1>
          </div>
          <div className="title3">
            <h1>Your Playlist </h1>
          </div>
          <div className="maindivhome">
            <div className="Songcard1">
              <Link to="/Player">
                <Songcard  />
              </Link>
              <Songcard />
              <Songcard />
              <Songcard />
            
            </div>
            <div className="Songcard2">
              <Link to="/Player">
                <Songcard />
              </Link>
              <Songcard />
              <Songcard />
              <Songcard />
            </div>
            <div className="Songcard1">
                <Link to="/Playlistholder">
                <Playlistcard image={favorates} title="Favorates"/>
                </Link>
                <Playlistcard image={motivational} title="Motivational"/>
                <Playlistcard image={devotional} title="Devotional"/>
                <Playlistcard image={happyvibes} title="HappySongs"/>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Home;
