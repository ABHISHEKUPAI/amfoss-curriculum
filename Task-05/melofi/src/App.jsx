import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Playlist from "./pages/Playlist";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Player from "./pages/Player";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Playlistholder from "./pages/Playlistholder";


function App (){
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/Home" element={<Home />}/>
    <Route path="/Register" element={<Register />}/>
    <Route path="/Profile" element={<Profile />}/>
    <Route path="/Playlist" element={<Playlist />}/>
    <Route path="/Player" element={<Player />}/>
    <Route path="/Search" element={<Search />}/>
    <Route path="/Playlistholder" element={<Playlistholder/>}/>
    <Route path="/playlistholder/:playlistId" element={<Playlistholder />} />
    
  </Routes>
  </BrowserRouter>
  );
  
} 

export default App;
