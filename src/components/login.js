import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/logo-removebg-preview.png";
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

  const handleHomenav = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
    navigate("/home");
  };

  const handleforgotpassword = () => {
    navigate("/forgotpassword");
  };

  useEffect(() => {
    if (user) {
      navigate("/userprofile");
    }
  }, [user, navigate]);

  return (
    <div className="login-container">
      <div className="login-form-section">
        <img src={Logo} alt="Logo" className="logo" width="400" height="400" />
        <h1></h1>
        <h1>Hello Again! </h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">Enter your email address</label>
            <input type="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="email">Enter password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link to="/forgotpassword"> Forgot Password</Link>

          <div className="input-group">
            <button type="button" className="Login-btt" onClick={handleHomenav}>
              Login{" "}
            </button>
          </div>

          <div className="login-form-group">
            {loading && <h1>Loading...</h1>}
            {error && <p>Error: {error}</p>}
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
