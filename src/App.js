import React from "react";
import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import "./App.css";
import "./components/register";
import Navbar from "./components/navbar";
import Hoover from "./components/hoover";


 



function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/hover" element={<Hoover/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
