import "./Register.css";
import blacklogo from "../assets/logoblack.png";
import "../global.css";
import { Link } from "react-router-dom";


function Register(){
    return (
        <div className="maindivregister" >
            <img className = 'blacklogo' src = {blacklogo} alt= "logo"/>
            <input type='email'
                   className="email"
                   placeholder=" Email:-"/>
            <input type='password'
                    className='pswd'
                    placeholder=' password:'/>
            <input type = 'password'
                   className = 'cpswd'
                   placeholder=' confirm password:'/>
            <Link to ="/Home">
            <button className="  registerbtn">Register</button>
            </Link>
            
        </div>
    );
    
}

export default Register;