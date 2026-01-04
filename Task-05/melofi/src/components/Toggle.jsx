import { useState } from "react";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";

function ToggleImage() {
  const [isplaying, setisplaying] = useState(true);


  return (
    <div>
      <img
        src={isplaying ? pause : play}
        alt="toggle"
        onClick={() =>setisplaying(!isplaying)}
        style={{ width: "100px", cursor: "pointer" }}
      />
    </div>
  );
}

export default ToggleImage;
