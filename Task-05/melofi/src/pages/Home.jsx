import Sidebar from "../components/Sidebar";
import "../global.css";
import Songcard from "../components/Songcard";
import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="homepage">
      <Sidebar />
      <div className="contents">

        <div className="title1">
          <h1>Recommendation</h1>
        </div>

        <div className="Songcard1">
          {songs.slice(0, 5).map((song) => (
              <Songcard
                title={song.title}
                image={song.image}
                artistname={song.artistname}
                previewurl={song.previewurl}
              />
          ))}
        </div>

        <div className="title2">
          <h1>Latest Hits</h1>
        </div>

        <div className="Songcard2">
          {songs.slice(5, 10).map((song) => (
              <Songcard
                title={song.title}
                image={song.image}
                artistname={song.artistname}
                previewurl={song.previewurl}   
              />
          ))}
        </div>

        <div className="title3">
          <h1>History</h1>
        </div>

        <div className="Songcard1">
          <Songcard className="s9"/>
                    <Link to= "/Player">
                    <Songcard className="s6"/>
                    </Link>
                    <Songcard className="s7"/>
                    <Songcard className="s8"/>
                    <Songcard className="s9"/>
        </div>

      </div>
    </div>
  );
}

export default Home;
