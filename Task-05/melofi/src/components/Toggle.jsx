import { useState, useEffect } from "react";
import play from "../assets/play.svg";
import pause from "../assets/pause.svg";

function ToggleImage({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [audioRef]);

  return (
    <img
      src={isPlaying ? pause : play}
      alt="play-pause"
      onClick={togglePlay}
      style={{ width: "100px", cursor: "pointer" }}
    />
  );
}

export default ToggleImage;
