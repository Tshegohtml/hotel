import React from "react";
import  "./register.css";
import logo from "./STAR-HOTEL-removebg-preview (1).png";
import { Link} from 'react-router-dom';
import { Navigate } from "react-router-dom";

const Register =() => {

Navigate('/login')


    return (
        <div className="container">
          <div className="image-section">
          <img src="your-logo-url.png" className="image" />
          </div>
          <div className="form-section">
          <img src={logo} alt="Logo" className="logo" width="200" height="200" />
            <h1>STAR-HOTEL BOOKING</h1>
            <small>PLEASE FILLOUT THIS FORM WITH THE REQUIRED INFORMTION</small>
            
            <form>
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <button type="submit">Sign Up</button>
              </div>
              <div className="login-link">
              <p>If you have an account, <Link to="/login"><b>Login</b></Link></p>
              </div>
            </form>
          </div>
        </div>
      );
    };
    

export default Register;