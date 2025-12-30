import "./Popup.css";

function Popup({ closePopup }) {
    const handleClick = (playlistName) => {
        alert(`Song added to your ${playlistName} playlist`);
        closePopup();
    };

    
    return(
        <div className="maindivpop">
            <button onClick={() => handleClick("Favorates")}>Your Favorates</button>
            <button onClick={() => handleClick("Motivational Songs")}>Motivational Songs</button>
            <button onClick={() => handleClick("English songs")}>English Songs</button>
            <button onClick={() => handleClick("Hindi songs")}>Hindi Songs</button>
            <button onClick={() => handleClick("Happy songs")}>Happy songs</button>
            <button onClick={() => handleClick("Sad Songs")}>Sad Songs</button>
            <button onClick={() => handleClick("sigma songs")}>Sigma Songs</button>
            <button onClick={() => handleClick("DevotionaL Songs")}>Devotional Songs</button>
            <button onClick={() => handleClick("Custom")}>Custom playlist</button>
        </div>
    );


}

export default Popup;