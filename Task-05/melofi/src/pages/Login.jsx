import "./Login.css";
import blacklogo from "../assets/logoblack.png";
import "../global.css";
import { Link } from "react-router-dom";
function Login(){

    return(
        <div className='maindivhome'>
            
            <img className="blacklogo" src={blacklogo} alt="logomelofi"/>
            <div className = "subdiv">
                <h1 className="loginh1">Login</h1>
                <input  type = "email"
                        className = "email"
                        placeholder = " Email:- "/>
                <input  type = "password"
                        className = "pswd"
                        placeholder = " Password:- "/>
                <Link to="/Home">
                <button  className='signinbtn' >LOGIN </button>
                </Link>
                <Link to="/Register">
                <button  className='signupbtn' >SIGN UP </button>
                </Link>
                
            </div>
        </div>
    );
}
export default Login;