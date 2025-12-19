import Sidebar from "../components/Sidebar";
import "../global.css";
import "./Profile.css";
import { Link } from "react-router-dom";


function Profile() {

    return (

        <>
        <div className="maindivprofile">
            
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="title">
                <h1>Profile</h1>
            </div>
            <div className="details">
                
                <p>
                    Email id:-xyz@gmail.com
                </p>
                <p>
                    Password:**********
                </p>
                <Link to= "/">
                <button className="other_account">Login from other account </button>
                </Link>
                <Link to ="/Register">
                <button className="delete_account">Delete account</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Profile;
