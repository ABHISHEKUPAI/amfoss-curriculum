import Sidebar from "../components/Sidebar";
import "../global.css";
import Playlistbar from "../components/Playlistbar";
import "./Playlistholder.css";


function Playlistholder() {
  return (
    <>
      <div className="playlistholderpage">
        <Sidebar />
        
          <div className="title1">
            <h1>Playlist</h1>
          </div>
          <div className="subdivolaylistholder">
        
                  <Playlistbar className="playbar1"/>
                  <Playlistbar className="playbar2"/>
                  <Playlistbar className="playbar3"/>
                  <Playlistbar className="playbar4"/>
                  <Playlistbar className="playbar1"/>
                  <Playlistbar className="playbar2"/>
                  <Playlistbar className="playbar3"/>
                  <Playlistbar className="playbar4"/>
        
          </div>
        
      </div>
    </>
  );
}

export default Playlistholder;
