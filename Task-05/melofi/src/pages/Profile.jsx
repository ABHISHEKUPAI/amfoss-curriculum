import Sidebar from "../components/Sidebar";
import "../global.css";
import "./Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Profile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    if (!userId) {
      navigate("/");
      return;
    }

    fetch(`http://localhost:5000/profile/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch profile");
        }
        return res.json();
      })
      .then((data) => setProfile(data))
      .catch((err) => {
        console.error(err);
        navigate("/");
      });
  }, [userId, navigate]);

  if (!profile) {
    return <p style={{ padding: "20px" }}>Loading profile...</p>;
  }

  return (
    <div className="maindivprofile">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="title">
        <h1>Profile</h1>
      </div>

      <div className="details">
        <p>Email id: {profile.email}</p>
        <p>Password: ********</p>

        <button
          className="other_account"
          onClick={() => {
            localStorage.removeItem("user_id");
            navigate("/", { replace: true });
          }}
        >
          Logout
        </button>

        <Link to="/Register">
          <button className="delete_account">
            Delete account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
