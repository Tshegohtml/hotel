import React from 'react';
import { Link } from 'react-router-dom';
import logo from './STAR-HOTEL-removebg-preview (1).png';
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
const navigate = useNavigate();
const handleHomenav = ()=>{
  navigate("/")
}

    return (
      
      <div className="container">
        <div className="image-section">
          <img src="./stunning image.jpg" className="image"/>
          </div>
          <div className="form-section">
          
        <img src={logo} alt="Logo" className="logo" width="200" height="200" />
          <h1><b>Login</b></h1>
            <h1>Hello Again! </h1>
            <form>
            <div className="form-group">
           
            <input type="Email" placeholder="Enter Email"/><br/>
            </div>
            <div className="form-group">
            
            <input type="password" placeholder="Enter Password"/>
            </div>
            <div className="form-group">
           
            <p className="Forgot-txt"><b>Remember Me</b></p>
            </div>
            <div className="form-group">
            <button type="login" className="Login-btt" onClick={handleHomenav}>Login </button>
          </div>

          <div className="form-group">
            <button type="sign in with google" className="google-bt">sign in with google</button>
          </div>

            <p>Don't have an account yet? <Link to="/register"> <b>Sign Up!</b></Link></p>
          
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
