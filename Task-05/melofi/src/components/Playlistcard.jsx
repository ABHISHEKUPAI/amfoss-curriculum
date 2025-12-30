import "./Songcard.css";

function Playlistcard({ image, title }) {
    return (
        <button className="box">
            <img
                className="photo"
                src={image}
                alt={title}
            />
            <p className="name">{title}</p>
        </button>
    );
}

export default Playlistcard;
