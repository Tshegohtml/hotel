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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/avail" element={<Avail />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/bookingform" element={<Bookingform />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/payment" element={<PaymentPage />} /> {/* Updated route for PaymentPage */}
          <Route path="/hoover" element={<Hoover />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
