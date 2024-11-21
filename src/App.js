// App.js
import React from "react";
import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import "./App.css";
import Navbar from "./components/navbar";
import Hoover from "./components/hoover";
import Rooms from "./components/rooms";
import Avail from "./components/avail";
import Aboutus from "./components/aboutus";
import Gallery from "./components/gallery";
import Booknow from "./components/booknow";
import Summary from "./components/summary";
import PaymentPage from "./components/payment"; 
import Bookingform from "./components/bookingform";
import AdminDashboard from "./components/admindashboard";
import Resturant from "./components/resturant";
import ForgotPassword from "./components/forgotpassword"; 
import Ourhistory from "./components/ourhistory";
import Facilities from "./components/facilities";
import Testimony from "./components/testimony";
import Contactfooter from "./components/contactfooter";
import Profile from "./components/userprofile";
import Reviews from "./components/reviews";
import Loader from "./components/loader";
import Addroomform from "./components/addroomform";
import Viewaddedrooms from "./components/viewaddedrooms";
import ViewAddedRooms from "./components/viewaddedrooms";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/avail" element={<Avail />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/bookingform" element={<Bookingform />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/payment" element={<PaymentPage />} /> {/* Updated route for PaymentPage */}
          <Route path="/hoover" element={<Hoover />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/resturant" element={<Resturant />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/ourhistory" element={<Ourhistory />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/testimony" element={<Testimony />} />
          <Route path="/contactfooter" element={<Contactfooter />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/addroomform" element={<Addroomform />} />
          <Route path="/viewaddedrooms" element={<Viewaddedrooms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
