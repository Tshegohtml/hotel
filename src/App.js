import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import "./App.css";
import Navbar from "./components/navbar";
import Hoover from "./components/hoover";
import Rooms from "./components/rooms";
import Avail from "./components/avail";
import  Aboutus from"./components/aboutus";
import Gallery from "./components/gallery";
import Booknow from "./components/booknow";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/avail" element={<Avail />} />
          <Route path="/booknow" element={<Booknow/>} />
         
          <Route path="/hoover" element={<Hoover />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
