import Playlistcard from "../components/Playlistcard";
import Sidebar from "../components/Sidebar";
import "../global.css";
import { Link } from "react-router-dom";
import "./Playlist.css";
import add from "../assets/add.svg";
import Playlisttab from"../components/Playlisttab";
import {useState} from "react";


function Playlist() {
    const [playlists, setPlaylists] = useState([
    { id: 1, name: "Playlist 1" },
    { id: 2, name: "Playlist 2" },
    { id: 3, name: "Playlist 3" },
    { id: 4, name: "Playlist 4" },
]);

const addPlaylist = () => {
    const nextNumber = playlists.length + 1;
    const newPlaylist = {
    id: Date.now(),
    name: `Playlist ${nextNumber}`,
    };
    setPlaylists([...playlists, newPlaylist]);
};
    return (
        <>
        <div className="playlistpage">
        <Sidebar />
        <div className="contents"title1>
        <div className="titleplaylist">
            <h1>Playlist</h1>
            <div>
                <img src={add} height= "100vh" style={{cursor : "pointer"}}onClick={addPlaylist}/>
            </div>
        </div>
        <div className="maindivplaylist">
        {playlists.map((playlist) => (
        <Playlisttab
        key={playlist.id}
        playlistName={playlist.name}
    />
))}
    </div>
        </div>
        </div>
        </>
        
    );
}

export default Playlist;
