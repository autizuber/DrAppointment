import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import MyAppointments from "./Pages/MyAppointments";
import Doctors from "./Pages/Doctors";
import Login from "./Pages/Login";
import MyProfile from "./Pages/MyProfile";
import Appointmen from "./Pages/Appointmen";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Doctor" element={<Doctors />} />
        <Route path="/Doctor/:specility" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/MyProfile" element={<MyProfile />} />
        <Route path="/MyAppointment" element={<MyAppointments />} />
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Appointment/:drId" element={<Appointmen />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
