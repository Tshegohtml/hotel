import React,{useState,useEffect}  from "react";
import  "./register.css";
import logo from "./STAR-HOTEL-removebg-preview (1).png";
import { Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../redux/authSlice";

const Register =() => {
  const navigate = useNavigate();
  const[firstname,setfirstname]=useState("");
  const[lastname,setlastname]=useState("");
  const[email,setemail]=useState("");
  const[phone,setphone]=useState("");
  const[password,setpassword]=useState("");
  const {user, error, loading} = useSelector((state) => state.auth) 
 

  
const dispatch=useDispatch();

const handleSignUp = () => {
  dispatch(signUp({email,password})); 
};

useEffect(() => {
  if (user) {
    alert("Hi");
    navigate("/home");
  }
}, [user, navigate])



    return (
        <div className="container">
          <div className="image-section">
          <img src="your-logo-url.png" className="image" alt="logo" />
          </div>
          <div className="form-section">
          <img src={logo} alt="Logo" className="logoRegister" width="200" height="200" />
            <h1>STAR-HOTEL BOOKING</h1>
            <small>PLEASE FILLOUT THIS FORM WITH THE REQUIRED INFORMTION</small>
            
            <form>
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required   value={firstname} onChange={(e) => setfirstname(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required value={lastname} onChange={(e) => setlastname(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required value={email}  onChange={(e) => setemail(e.target.value) }/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required  value={phone} onChange={(e) => setphone(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="password">password</label>
                <input type="text" id="password" name="password" required  value={password} onChange={(e) => setpassword(e.target.value)}/>
              </div>
              <div className="form-group">
                <button type="submit" onClick={handleSignUp}>Sign Up</button>
              </div>
              {loading && <h1>Loading...</h1>}
              {error && <p>Error:{error}</p>}
              <div className="login-link">
              <p>If you have an account, <Link to="/login"><b>Login</b></Link></p>
              </div>
            </form>
          </div>
        </div>
      );
    };
    

export default Register;