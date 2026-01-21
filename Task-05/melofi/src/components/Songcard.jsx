import "./Songcard.css";
import { useNavigate } from "react-router-dom";

function Songcard({ title, image, artistname, previewurl }) {
  const navigate = useNavigate();
  const handleClick = async () => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      try {
        await fetch("http://localhost:5000/history", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            song_name: title,
            artist_name: artistname,
            song_url: previewurl,
            song_image:image,
          }),
        });
      } catch (err) {
        console.error("Failed to save history", err);
      }
    }
    navigate("/Player", {
      state: {
        title,
        image,
        artistname,
        previewurl,
      },
    });
  };
  return (
    <div className="box" onClick={handleClick}>
      <img className="photo" src={image} alt={title} />
      <p className="name">{title}</p>
      <p className="name2">(BY: {artistname})</p>
    </div>
  );
}

export default Songcard;
