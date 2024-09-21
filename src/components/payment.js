import React, { useState } from 'react';
import './payment.css';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const [userDetails, setUserDetails] = useState({
    phoneNumber: '',
    address: '',
    name: '',
    lastName: '',
    roomType: '',
    adults: 2,
    children: 1,
    checkInTime: '',
    checkOutTime: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="payment-container">
      <h2>HOTEL PAYMENT</h2>
      <form className="payment-form">
        <div className="form-group">
          <label>
            <input
              type="radio"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={() => setPaymentMethod('creditCard')}
            />
            Credit Card
          </label>
          {paymentMethod === 'creditCard' && (
            <div className="credit-card-details">
              <input type="text" placeholder="Card Number" required />
              <input type="text" placeholder="Name on Card" required />
              <input type="text" placeholder="Expiry Date (MM/YY)" required />
              <input type="text" placeholder="CVV" required />
            </div>
          )}
        </div>

        <div className="form-group">
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
            />
            PayPal
          </label>
          {paymentMethod === 'paypal' && (
            <input type="email" placeholder="PayPal Email" required />
          )}
        </div>

        <div className="form-group">
          <label>
            <input
              type="radio"
              value="other"
              checked={paymentMethod === 'other'}
              onChange={() => setPaymentMethod('other')}
            />
            Other Payment Method
          </label>
          {paymentMethod === 'other' && (
            <input type="text" placeholder="Details" required />
          )}
        </div>

       
      </form>

      {/* User Details Table */}
      <div className="user-details-container">
        <h3>User Details</h3>
        <table className="user-details-table">
          <tbody>
            <tr>
              <td><strong>Name:</strong></td>
              <td>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="name" 
                    value={userDetails.name} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <span>{userDetails.name}</span>
                )}
              </td>
            </tr>
            <tr>
              <td><strong>Last Name:</strong></td>
              <td>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="lastName" 
                    value={userDetails.lastName} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <span>{userDetails.lastName}</span>
                )}
              </td>
            </tr>
            <tr>
              <td><strong>Phone Number:</strong></td>
              <td>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="phoneNumber" 
                    value={userDetails.phoneNumber} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <span>{userDetails.phoneNumber}</span>
                )}
              </td>
            </tr>
            <tr>
              <td><strong>Address:</strong></td>
              <td>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="address" 
                    value={userDetails.address} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <span>{userDetails.address}</span>
                )}
              </td>
            </tr>
            <tr>
              <td><strong>Room Type:</strong></td>
              <td>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="roomType" 
                    value={userDetails.roomType} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <span>{userDetails.roomType}</span>
                )}
              </td>
            </tr>
            <tr>
              <td><strong>Adults:</strong></td>
              <td>
                {isEditing ? (
                  <input 
                    type="number" 
                    name="adults" 
                    value={userDetails.adults} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <span>{userDetails.adults}</span>
                )}
              </td>
            </tr>
            <tr>
              <td><strong>Children:</strong></td>
              <td>
                {isEditing ? (
                  <input 
                    type="number" 
                    name="children" 
                    value={userDetails.children} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <span>{userDetails.children}</span>
                )}
              </td>
            </tr>
            <tr>
              <td><strong>Check-In Time:</strong></td>
              <td>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="checkInTime" 
                    value={userDetails.checkInTime} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <span>{userDetails.checkInTime}</span>
                )}
              </td>
            </tr>
            <tr>
              <td><strong>Check-Out Time:</strong></td>
              <td>
                {isEditing ? (
                  <input 
                    type="text" 
                    name="checkOutTime" 
                    value={userDetails.checkOutTime} 
                    onChange={handleInputChange} 
                  />
                ) : (
                  <span>{userDetails.checkOutTime}</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={toggleEditing} className="edit-button">
          {isEditing ? 'Save Changes' : 'Edit Details'}
        </button>
      </div>
      <button type="submit" className="submit-button">Submit Payment</button>
    </div>
  );
}

export default Payment;
