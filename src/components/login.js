import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/logo-removebg-preview.png";
import "./login.css";
import { useSelector, useDispatch } from "react-redux";
import { signIn } from "../redux/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, error, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Redirect to user profile if logged in
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    await dispatch(signIn({ email, password })); // Pass email and password as an object
  };

  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <img src={Logo} alt="Logo" className="logo" width="400" height="400" />
        <h1>Hello Again!</h1>
        <form onSubmit={handleLogin}> {/* Add onSubmit handler */}
          <div className="input-group">
            <label htmlFor="email">Enter your email address</label>
            <input
              type="email" // Changed to lowercase 'email'
              id="email" // Added id for accessibility
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // Optional: Ensure email is required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Enter password</label> {/* Changed htmlFor */}
            <input
              type="password"
              id="password" // Added id for accessibility
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required // Optional: Ensure password is required
            />
          </div>

          <Link to="/forgotpassword"> Forgot Password</Link>

          <div className="input-group">
            <button type="submit" className="Login-btt"> {/* Changed to type="submit" */}
              Login
            </button>
          </div>

          <div className="login-form-group">
            {loading && <h1>Loading...</h1>}
            {error && <p>Error: {error}</p>}
          </div>

          <p>
            Don't have an account yet?{" "}
            <Link to="/register">
              <b>Sign Up!</b>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
