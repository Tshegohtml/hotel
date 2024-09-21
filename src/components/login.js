import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./STAR-HOTEL-removebg-preview (1).png";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../redux/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, error, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleHomenav = () => {
    dispatch(signIn(email, password));
    alert("Hi");
      navigate("/home");
  };

  useEffect(() => {
    if (user) {
      alert("Hi");
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <div className="login-image-section">
        <img src="./stunning image.jpg" className="login-image" alt="logo" />
      </div>
      <div className="login-form-section">
        <img src={logo} alt="Logo" className="logo" width="200" height="200" />
        <h1>
          <b>Login</b>
        </h1>
        <h1>Hello Again! </h1>
        <form>
          <div className="login-form-group">
            <input
              type="Email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
          </div>
          <div className="login-form-group">
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login-form-group">
            <p className="login-Forgot-txt">
              <b>Remember Me</b>
            </p>
          </div>
          <div className="login-form-group">
            <button type="login" className="Login-btt" onClick={handleHomenav}>
              Login{" "}
            </button>
          </div>

          <div className="login-form-group">
            <button type="sign in with google" className="login-google-btn">
              sign in with google
            </button>
            {loading && <h1>Loading...</h1>}
            {error && <p>Error:{error}</p>}
          </div>

          <p>
            Don't have an account yet?{" "}
            <Link to="/register">
              {" "}
              <b>Sign Up!</b>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
