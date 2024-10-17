import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './forgotpassword.css';
import { useSelector, useDispatch } from "react-redux";
import { resetPassword } from "../redux/authSlice";
import logo from "./STAR-HOTEL-removebg-preview (1).png";




const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [codeSent, setCodeSent] = useState(false);
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    
    const {user,loading,error}=useSelector((state) => state.auth);

    
        
   
   const handleResetPassword = () => {
     
        dispatch(resetPassword({email}));
       

    };


    return (
        <div className="forgot-password-container">
           
         <div>
         <div className="-register-form-section">
         <img src={logo} alt="Logo" className="logoforgotpassword" width="300" height="300" />
         </div>
         
            <h2>Forgot Password</h2>
         
                <div>
                    <div className="input-group">
                        
                    </div>
                    <div className="input-group">
                        <label htmlFor="newPassword">Enter email</label>
                        <input
                            type="email"
                            id="newPassword"
                         
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="reset-password-button" onClick={handleResetPassword}>Reset Password</button>
                </div>
        </div>
        </div>
    );
};
export default ForgotPassword;