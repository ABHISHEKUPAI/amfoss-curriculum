import "./Songcard.css";
import { useNavigate } from "react-router-dom";

function Songcard({ title, image, artistname, previewurl }) {
  const navigate = useNavigate();

  const handleClick = () => {
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
