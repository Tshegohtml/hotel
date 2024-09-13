import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import "./App.css";
import Navbar from "./components/navbar";
import Hoover from "./components/hoover";
import Rooms from "./components/rooms";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/hover" element={<Hoover />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
