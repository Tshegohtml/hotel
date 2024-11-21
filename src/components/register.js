import React, { useState, useEffect } from "react";
import "./register.css";
import Logo from "../components/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../redux/authSlice";
import Loader from "../components/loader";
import Swal from 'sweetalert2';

const Register = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const { user, error, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      // Dispatch the signup action
      await dispatch(
        signUp({
          firstName: firstname,
          lastName: lastname,
          email,
          password,
          phoneNumber: phone,
        })
      );
  
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registered successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      // Navigate to "/home" after successful signup
      navigate("/home");
    } catch (error) {
      console.error("Error signing up:", error);
      Swal.fire("Error", "Signup failed. Please try again.", "error");
    }
  };

  useEffect(() => {
    if (user) {
      setShowSuccessAlert(true);
      setTimeout(() => {
        setShowSuccessAlert(false);
        //navigate("/home");
      }, 2000); // Show alert for 2 seconds
    }
  }, [user, navigate]);

  return (
    <div className="register-container">
      <div className="register-form-section">
        <img
          src={Logo}
          alt="Logo"
          className="logoRegister"
          width="400"
          height="300"
        />
        <h1>STAR-HOTEL BOOKING</h1>
        <small>PLEASE FILL OUT THIS FORM WITH THE REQUIRED INFORMATION</small>

        <form>
          <div className="input-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              required
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <button type="submit" className="submit-btn" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
          {loading && <Loader />}
          {error && <p className="error-text">Error: {error}</p>}
          <div className="login-link">
            <p>
              If you have an account, <Link to="/login"><b>Login</b></Link>
            </p>
          </div>
        </form>
      </div>
      {showSuccessAlert && (
        <div className="success-alert">
          Registration successful! Redirecting...
        </div>
      )}
    </div>
  );
};

export default Register;
