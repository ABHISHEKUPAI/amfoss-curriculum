import { useState } from "react";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";

function ToggleImage() {
  const [First,ShowFirst] = useState(true);

  return (
    <div>
      <img
        src={First ? pause : play}
        alt="toggle"
        onClick={() =>ShowFirst(!First)}
        style={{ width: "200px", cursor: "pointer" }}
      />
    </div>
  );
}

export default ToggleImage;
